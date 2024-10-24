'use client'

import { Typography, Card, Row, Col, Statistic, List } from 'antd'
import {
  FileOutlined,
  MessageOutlined,
  UserOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: templates, isLoading: templatesLoading } =
    Api.template.findMany.useQuery({
      where: { userId: user?.id },
      take: 5,
      orderBy: { createdAt: 'desc' },
    })

  const { data: messageCampaigns, isLoading: campaignsLoading } =
    Api.messageCampaign.findMany.useQuery({
      where: { userId: user?.id },
      take: 5,
      orderBy: { createdAt: 'desc' },
    })

  const handleTemplateClick = (templateId: string) => {
    router.push(
      `/organizations/${params.organizationId}/templates/${templateId}`,
    )
  }

  const handleCampaignClick = (campaignId: string) => {
    router.push(
      `/organizations/${params.organizationId}/send-messages/${campaignId}`,
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Dashboard Overview</Title>
      <Text>
        Welcome back! Here's an overview of your templates and recent activity.
      </Text>

      <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
        <Col xs={24} sm={12}>
          <Card>
            <Statistic
              title="Total Templates"
              value={templates?.length || 0}
              prefix={<FileOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card>
            <Statistic
              title="Active Campaigns"
              value={
                messageCampaigns?.filter(c => c.status === 'ACTIVE').length || 0
              }
              prefix={<MessageOutlined />}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
        <Col xs={24} md={12}>
          <Card
            title="Recent Templates"
            extra={
              <a
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/my-templates`,
                  )
                }
              >
                View All
              </a>
            }
          >
            <List
              loading={templatesLoading}
              dataSource={templates}
              renderItem={item => (
                <List.Item
                  key={item.id}
                  onClick={() => handleTemplateClick(item.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <List.Item.Meta
                    avatar={<FileOutlined />}
                    title={item.name}
                    description={`Created: ${dayjs(item.createdAt).format('MMMM D, YYYY')}`}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card
            title="Recent Campaigns"
            extra={
              <a
                onClick={() =>
                  router.push(
                    `/organizations/${params.organizationId}/send-messages`,
                  )
                }
              >
                View All
              </a>
            }
          >
            <List
              loading={campaignsLoading}
              dataSource={messageCampaigns}
              renderItem={item => (
                <List.Item
                  key={item.id}
                  onClick={() => handleCampaignClick(item.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <List.Item.Meta
                    avatar={<MessageOutlined />}
                    title={item.name}
                    description={`Status: ${item.status}, Started: ${item.startDate || 'Not started'}`}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
