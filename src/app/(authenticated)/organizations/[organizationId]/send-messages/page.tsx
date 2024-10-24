'use client'

import { useState } from 'react'
import {
  Typography,
  Select,
  Input,
  DatePicker,
  Button,
  Table,
  Space,
  Upload,
  message,
} from 'antd'
import { SendOutlined, UploadOutlined, PhoneOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { TextArea } = Input
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function MessageSenderPage() {
  const router = useRouter()
  const params = useParams<{ organizationId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [selectedTemplate, setSelectedTemplate] = useState<string>('')
  const [phoneNumbers, setPhoneNumbers] = useState<string>('')
  const [scheduleDate, setScheduleDate] = useState<dayjs.Dayjs | null>(null)
  const [campaignName, setCampaignName] = useState<string>('')

  const { data: templates } = Api.template.findMany.useQuery({
    where: { userId: user?.id },
  })
  const { data: campaigns } = Api.messageCampaign.findMany.useQuery({
    where: { userId: user?.id },
    include: { messageRecipients: true },
  })

  const { mutateAsync: createCampaign } =
    Api.messageCampaign.create.useMutation()
  const { mutateAsync: createRecipients } =
    Api.messageRecipient.createMany.useMutation()

  const handleSendMessage = async () => {
    if (!selectedTemplate || !phoneNumbers || !scheduleDate || !campaignName) {
      enqueueSnackbar('Please fill all required fields', { variant: 'error' })
      return
    }

    try {
      const campaign = await createCampaign({
        data: {
          name: campaignName,
          status: 'SCHEDULED',
          startDate: scheduleDate.toISOString(),
          userId: user?.id as string,
          templateId: selectedTemplate,
        },
      })

      const recipients = phoneNumbers.split(',').map(number => number.trim())
      await createRecipients({
        data: recipients.map(number => ({
          phoneNumber: number,
          status: 'PENDING',
          messageCampaignId: campaign.id,
        })),
      })

      enqueueSnackbar('Message campaign created successfully', {
        variant: 'success',
      })
      router.push(`/organizations/${params.organizationId}/home`)
    } catch (error) {
      enqueueSnackbar('Failed to create message campaign', { variant: 'error' })
    }
  }

  const handleFileUpload = (info: any) => {
    const { status } = info.file
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
      // Here you would typically parse the file and set the phone numbers
      // For this example, we'll just set a placeholder
      setPhoneNumbers('123456789,987654321')
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  }

  const columns = [
    {
      title: 'Campaign Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD HH:mm'),
    },
    {
      title: 'Recipients',
      key: 'recipients',
      render: (text: string, record: any) =>
        record.messageRecipients?.length.toString() || '0',
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Message Sender</Title>
      <Text>Create and manage your messaging campaigns</Text>

      <Space
        direction="vertical"
        size="large"
        style={{ width: '100%', marginTop: 24 }}
      >
        <Select
          style={{ width: '100%' }}
          placeholder="Select a template"
          onChange={setSelectedTemplate}
          value={selectedTemplate}
        >
          {templates?.map(template => (
            <Select.Option key={template.id} value={template.id}>
              {template.name}
            </Select.Option>
          ))}
        </Select>

        <Space direction="vertical" style={{ width: '100%' }}>
          <Text>Enter phone numbers (comma-separated):</Text>
          <TextArea
            rows={4}
            value={phoneNumbers}
            onChange={e => setPhoneNumbers(e.target.value)}
            placeholder="e.g., 123456789, 987654321"
          />
          <Upload
            accept=".csv,.txt"
            showUploadList={false}
            customRequest={({ onSuccess }) =>
              setTimeout(() => onSuccess?.('ok'), 0)
            }
            onChange={handleFileUpload}
          >
            <Button icon={<UploadOutlined />}>Upload phone numbers</Button>
          </Upload>
        </Space>

        <Space direction="vertical" style={{ width: '100%' }}>
          <Text>Campaign Name:</Text>
          <Input
            value={campaignName}
            onChange={e => setCampaignName(e.target.value)}
            placeholder="Enter campaign name"
            prefix={<PhoneOutlined />}
          />
        </Space>

        <Space direction="vertical" style={{ width: '100%' }}>
          <Text>Schedule send time:</Text>
          <DatePicker
            showTime
            style={{ width: '100%' }}
            onChange={setScheduleDate}
            value={scheduleDate}
          />
        </Space>

        <Button
          type="primary"
          icon={<SendOutlined />}
          onClick={handleSendMessage}
        >
          Schedule Message Campaign
        </Button>

        <Title level={3}>Campaign Status</Title>
        <Table columns={columns} dataSource={campaigns} rowKey="id" />
      </Space>
    </PageLayout>
  )
}
