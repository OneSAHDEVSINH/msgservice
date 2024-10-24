'use client'

import { Typography, Form, Input, Button, Switch, Space, Card } from 'antd'
import { WhatsAppOutlined, SaveOutlined, LinkOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import { Prisma } from '@prisma/client'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function WhatsAppIntegrationPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()

  const [integration, setIntegration] =
    useState<Prisma.WhatsAppIntegrationGetPayload<{}> | null>(null)

  const { data: whatsAppIntegration, isLoading } =
    Api.whatsAppIntegration.findFirst.useQuery({
      where: { userId: user?.id },
    })

  const { mutateAsync: createIntegration } =
    Api.whatsAppIntegration.create.useMutation()
  const { mutateAsync: updateIntegration } =
    Api.whatsAppIntegration.update.useMutation()

  useEffect(() => {
    if (whatsAppIntegration) {
      setIntegration(whatsAppIntegration)
      form.setFieldsValue({
        apiKey: whatsAppIntegration.apiKey,
        phoneNumber: whatsAppIntegration.phoneNumber,
        status: whatsAppIntegration.status === 'ACTIVE',
      })
    }
  }, [whatsAppIntegration, form])

  const onFinish = async (values: any) => {
    try {
      if (integration) {
        await updateIntegration({
          where: { id: integration.id },
          data: {
            apiKey: values.apiKey,
            phoneNumber: values.phoneNumber,
            status: values.status ? 'ACTIVE' : 'INACTIVE',
          },
        })
      } else {
        await createIntegration({
          data: {
            apiKey: values.apiKey,
            phoneNumber: values.phoneNumber,
            status: values.status ? 'ACTIVE' : 'INACTIVE',
            userId: user?.id as string,
          },
        })
      }
      enqueueSnackbar('WhatsApp integration settings saved successfully', {
        variant: 'success',
      })
    } catch (error) {
      console.error('Error saving WhatsApp integration settings:', error)
      enqueueSnackbar('Failed to save WhatsApp integration settings', {
        variant: 'error',
      })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Title level={2}>
            <WhatsAppOutlined /> WhatsApp Integration
          </Title>
          <Text>
            Connect your WhatsApp Business API account and manage your
            integration settings here.
          </Text>
          <Form
            form={form}
            name="whatsappIntegration"
            onFinish={onFinish}
            layout="vertical"
            style={{ maxWidth: 600, margin: '0 auto' }}
          >
            <Form.Item
              name="apiKey"
              label="API Key"
              rules={[
                {
                  required: true,
                  message: 'Please input your WhatsApp API Key!',
                },
              ]}
            >
              <Input
                prefix={<LinkOutlined />}
                placeholder="Enter your WhatsApp API Key"
              />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: 'Please input your WhatsApp Phone Number!',
                },
              ]}
            >
              <Input
                prefix={<WhatsAppOutlined />}
                placeholder="Enter your WhatsApp Phone Number"
              />
            </Form.Item>
            <Form.Item
              name="status"
              label="Integration Status"
              valuePropName="checked"
            >
              <Switch checkedChildren="Active" unCheckedChildren="Inactive" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
                Save Settings
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </Card>
    </PageLayout>
  )
}
