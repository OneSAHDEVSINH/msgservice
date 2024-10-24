'use client'

import { Typography, Card, Space } from 'antd'
import {
  InfoCircleOutlined,
  MessageOutlined,
  ShopOutlined,
} from '@ant-design/icons'
const { Title, Paragraph } = Typography
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

  return (
    <PageLayout layout="narrow">
      <Space
        direction="vertical"
        size="large"
        style={{ width: '100%', textAlign: 'center' }}
      >
        <Title level={1}>Welcome to WhatsApp Sender</Title>
        <Paragraph>
          This application helps you create and send WhatsApp messages
          efficiently. Here's how it works:
        </Paragraph>

        <Card
          hoverable
          style={{ maxWidth: 600, margin: '0 auto' }}
          cover={<InfoCircleOutlined style={{ fontSize: 48, marginTop: 24 }} />}
        >
          <Card.Meta
            title="1. Create or Choose Templates"
            description="Start by creating your own message templates or choosing from our marketplace."
          />
        </Card>

        <Card
          hoverable
          style={{ maxWidth: 600, margin: '0 auto' }}
          cover={<ShopOutlined style={{ fontSize: 48, marginTop: 24 }} />}
        >
          <Card.Meta
            title="2. Set Up WhatsApp Integration"
            description="Connect your WhatsApp account to enable message sending capabilities."
          />
        </Card>

        <Card
          hoverable
          style={{ maxWidth: 600, margin: '0 auto' }}
          cover={<MessageOutlined style={{ fontSize: 48, marginTop: 24 }} />}
        >
          <Card.Meta
            title="3. Send Messages"
            description="Create campaigns and send messages to your recipients using your templates."
          />
        </Card>

        <Paragraph>
          Explore the different sections of the application using the navigation
          menu. If you have any questions, don't hesitate to contact our support
          team.
        </Paragraph>
      </Space>
    </PageLayout>
  )
}
