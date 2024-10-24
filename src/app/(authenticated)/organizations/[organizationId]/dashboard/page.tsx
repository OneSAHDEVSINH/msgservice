'use client'

import { Typography, Card, Row, Col, Button, Table, Spin, Space } from 'antd'
import {
  UserOutlined,
  DollarOutlined,
  HistoryOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AccountDashboardPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: subscriptions, isLoading: isLoadingSubscriptions } =
    Api.billing.findManySubscriptions.useQuery({})
  const { data: products, isLoading: isLoadingProducts } =
    Api.billing.findManyProducts.useQuery({})
  const { data: messageCampaigns, isLoading: isLoadingCampaigns } =
    Api.messageCampaign.findMany.useQuery({
      where: { userId: user?.id },
      include: { messageRecipients: true, template: true },
    })

  const { mutateAsync: createPaymentLink } =
    Api.billing.createPaymentLink.useMutation()

  const handleUpgrade = async (productId: string) => {
    try {
      const { url } = await createPaymentLink({ productId })
      router.push(url)
    } catch (error) {
      enqueueSnackbar('Failed to create payment link', { variant: 'error' })
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
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'Template',
      dataIndex: ['template', 'name'],
      key: 'template',
    },
    {
      title: 'Recipients',
      dataIndex: 'messageRecipients',
      key: 'recipients',
      render: (recipients: any[]) => recipients?.length.toString() || '0',
    },
  ]

  if (isLoadingSubscriptions || isLoadingProducts || isLoadingCampaigns) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Account Dashboard</Title>
      <Text>
        Manage your account details, subscription, and view messaging history.
      </Text>

      <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
        <Col xs={24} md={12}>
          <Card
            title={
              <>
                <UserOutlined /> Account Details
              </>
            }
          >
            <p>
              <strong>Name:</strong> {user?.name}
            </p>
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
            <p>
              <strong>Status:</strong> {user?.status}
            </p>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card
            title={
              <>
                <DollarOutlined /> Subscription Status
              </>
            }
          >
            {subscriptions && subscriptions.length > 0 ? (
              <>
                <p>
                  <strong>Current Plan:</strong>{' '}
                  {subscriptions[0]?.productId || 'N/A'}
                </p>
                <p>
                  <strong>Renewal Date:</strong>{' '}
                  {subscriptions[0]?.dateExpired
                    ? dayjs(subscriptions[0].dateExpired).format('YYYY-MM-DD')
                    : 'N/A'}
                </p>
                <p>
                  <strong>Status:</strong>{' '}
                  {subscriptions[0]?.status || 'N/A'}
                </p>
              </>
            ) : (
              <p>No active subscription</p>
            )}
            <Space
              direction="vertical"
              style={{ width: '100%', marginTop: '16px' }}
            >
              {products?.map(product => (
                <Button
                  key={product.id}
                  type="primary"
                  onClick={() => handleUpgrade(product.id)}
                  style={{ width: '100%' }}
                >
                  {subscriptions &&
                  subscriptions.length > 0 &&
                  subscriptions[0]?.productId === product.id
                    ? 'Renew'
                    : `Upgrade to ${product.name}`}
                </Button>
              ))}
            </Space>
          </Card>
        </Col>
      </Row>

      <Card
        title={
          <>
            <HistoryOutlined /> Messaging History
          </>
        }
        style={{ marginTop: '24px' }}
      >
        <Table
          dataSource={messageCampaigns}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 5 }}
        />
      </Card>
    </PageLayout>
  )
}
