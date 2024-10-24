'use client'

import { useState } from 'react'
import { Typography, Input, Card, Row, Col, Button, Modal, Spin } from 'antd'
import {
  SearchOutlined,
  EyeOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function TemplateMarketplacePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [searchTerm, setSearchTerm] = useState('')
  const [previewTemplate, setPreviewTemplate] = useState<any>(null)
  const [isPreviewModalVisible, setIsPreviewModalVisible] = useState(false)

  const { data: templates, isLoading } = Api.template.findMany.useQuery({
    where: {
      name: {
        contains: searchTerm,
        mode: 'insensitive',
      },
    },
  })

  const { mutateAsync: purchaseTemplate } =
    Api.templatePurchase.create.useMutation()

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  const handlePreview = (template: any) => {
    setPreviewTemplate(template)
    setIsPreviewModalVisible(true)
  }

  const handlePurchase = async (template: any) => {
    try {
      await purchaseTemplate({
        data: {
          purchaseDate: new Date().toISOString(),
          price: '9.99', // Assuming a fixed price for simplicity
          userId: user?.id || '',
          templateId: template.id,
        },
      })
      enqueueSnackbar('Template purchased successfully!', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to purchase template', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Template Marketplace</Title>
      <Text>
        Browse and search through available templates for your WhatsApp
        messaging needs.
      </Text>

      <Input
        placeholder="Search templates"
        prefix={<SearchOutlined />}
        onChange={e => handleSearch(e.target.value)}
        style={{ marginTop: 16, marginBottom: 24 }}
      />

      {isLoading ? (
        <Spin size="large" />
      ) : (
        <Row gutter={[16, 16]}>
          {templates?.map(template => (
            <Col xs={24} sm={12} md={8} key={template.id}>
              <Card
                title={template.name}
                extra={
                  <>
                    <Button
                      icon={<EyeOutlined />}
                      onClick={() => handlePreview(template)}
                    >
                      Preview
                    </Button>
                    <Button
                      icon={<ShoppingCartOutlined />}
                      onClick={() => handlePurchase(template)}
                      style={{ marginLeft: 8 }}
                    >
                      Purchase
                    </Button>
                  </>
                }
              >
                <Text>{template.content.substring(0, 100)}...</Text>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <Modal
        title="Template Preview"
        visible={isPreviewModalVisible}
        onCancel={() => setIsPreviewModalVisible(false)}
        footer={null}
      >
        {previewTemplate && (
          <>
            <Title level={4}>{previewTemplate.name}</Title>
            <Text>{previewTemplate.content}</Text>
          </>
        )}
      </Modal>
    </PageLayout>
  )
}
