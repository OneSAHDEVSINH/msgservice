import { useUserContext } from '@/core/context'
import { Flex } from 'antd'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { Leftbar } from './components/Leftbar'
import { Mobilebar } from './components/Mobilebar'
import { Topbar } from './components/Topbar'
import { NavigationItem } from './types'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()
  const pathname = usePathname()
  const params: Record<string, string> = useParams()

  const { organization } = useUserContext()

  const goTo = (url: string) => {
    router.push(url)
  }

  const items: NavigationItem[] = [
    {
      key: '/home',
      label: 'Home',
      position: 'topbar',

      onClick: () => goTo('/home'),
    },

    {
      key: '/organizations/:organizationId/home',
      label: 'Home Page',
      position: 'topbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/home'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/templates',
      label: 'Template Marketplace',
      position: 'topbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/templates'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/my-templates',
      label: 'My Templates',
      position: 'topbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/my-templates'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/send-messages',
      label: 'Message Sender',
      position: 'topbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/send-messages'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/dashboard',
      label: 'Account Dashboard',
      position: 'topbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/dashboard'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/whatsapp-integration',
      label: 'WhatsApp Integration',
      position: 'topbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/whatsapp-integration'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/pricing',
      label: 'Pricing',

      position: 'topbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/pricing'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },
  ]

  const itemsVisible = items
    .filter(item => item.isVisible !== false)
    .map(item => ({
      key: item.key,
      label: item.label,
      position: item.position,
      onClick: item.onClick,
    }))

  const itemsTopbar = itemsVisible.filter(item => item.position === 'topbar')

  const itemsLeftbar = itemsVisible.filter(item => item.position === 'leftbar')

  const itemsLeftbottom = itemsVisible.filter(
    item => item.position === 'leftbar-bottom',
  )

  const itemsMobile = itemsVisible

  let keySelected = pathname

  Object.entries(params).forEach(([key, value]) => {
    keySelected = keySelected.replace(`/${value}`, `/:${key}`)
  })

  return (
    <>
      <Topbar keySelected={keySelected} items={itemsTopbar} />

      <Mobilebar keySelected={keySelected} items={itemsMobile} />

      <Flex flex={1} style={{ overflowY: 'hidden' }}>
        <Leftbar
          keySelected={keySelected}
          items={itemsLeftbar}
          itemsBottom={itemsLeftbottom}
        />

        <Flex flex={1} vertical style={{ overflowY: 'hidden' }}>
          {children}
        </Flex>
      </Flex>
    </>
  )
}
