'use client'

import { Button, Card, Col, Input, Modal, Row, Typography } from 'antd'
import {
  EditOutlined,
  CopyOutlined,
  DeleteOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
import { Prisma } from '@prisma/client'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function MyTemplatesPage() {
  const router = useRouter()
  const params = useParams<{ organizationId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [editModalVisible, setEditModalVisible] = useState(false)
  const [selectedTemplate, setSelectedTemplate] =
    useState<Prisma.TemplateGetPayload<{ include: { user: true } }> | null>(
      null,
    )
  const [editedName, setEditedName] = useState('')
  const [editedContent, setEditedContent] = useState('')

  const {
    data: templates,
    isLoading,
    refetch,
  } = Api.template.findMany.useQuery({
    where: { userId: user?.id },
    include: { user: true },
  })

  const { mutateAsync: updateTemplate } = Api.template.update.useMutation()
  const { mutateAsync: createTemplate } = Api.template.create.useMutation()
  const { mutateAsync: deleteTemplate } = Api.template.delete.useMutation()

  const handleEdit = (
    template: Prisma.TemplateGetPayload<{ include: { user: true } }>,
  ) => {
    setSelectedTemplate(template)
    setEditedName(template.name)
    setEditedContent(template.content)
    setEditModalVisible(true)
  }

  const handleSave = async () => {
    if (selectedTemplate) {
      try {
        await updateTemplate({
          where: { id: selectedTemplate.id },
          data: { name: editedName, content: editedContent },
        })
        enqueueSnackbar('Template updated successfully', { variant: 'success' })
        setEditModalVisible(false)
        refetch()
      } catch (error) {
        enqueueSnackbar('Failed to update template', { variant: 'error' })
      }
    }
  }

  const handleCreate = async () => {
    if (selectedTemplate) {
      try {
        await createTemplate({
          data: {
            name: `Copy of ${selectedTemplate.name}`,
            content: selectedTemplate.content,
            userId: user?.id || '',
          },
        })
        enqueueSnackbar('New template created successfully', {
          variant: 'success',
        })
        refetch()
      } catch (error) {
        enqueueSnackbar('Failed to create new template', { variant: 'error' })
      }
    }
  }

  const handleDelete = async (templateId: string) => {
    try {
      await deleteTemplate({ where: { id: templateId } })
      enqueueSnackbar('Template deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to delete template', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>My Templates</Title>
      <Text>Manage and customize your purchased templates</Text>

      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        {templates?.map(template => (
          <Col xs={24} sm={12} md={8} key={template.id}>
            <Card
              title={template.name}
              extra={
                <Button icon={<PlusOutlined />} onClick={() => handleCreate()}>
                  Create New
                </Button>
              }
              actions={[
                <EditOutlined
                  key="edit"
                  onClick={() => handleEdit(template)}
                />,
                <CopyOutlined key="copy" onClick={() => handleCreate()} />,
                <DeleteOutlined
                  key="delete"
                  onClick={() => handleDelete(template.id)}
                />,
              ]}
            >
              <p>{template.content.substring(0, 100)}...</p>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        title="Edit Template"
        visible={editModalVisible}
        onOk={handleSave}
        onCancel={() => setEditModalVisible(false)}
      >
        <Input
          value={editedName}
          onChange={e => setEditedName(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <Input.TextArea
          value={editedContent}
          onChange={e => setEditedContent(e.target.value)}
          rows={4}
        />
      </Modal>
    </PageLayout>
  )
}
