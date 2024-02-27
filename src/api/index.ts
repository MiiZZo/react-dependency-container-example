import { createContainer } from '../di'
import { auth } from './auth'
import { useEmailCheck } from './use-email-check'

export const apiContainer = createContainer<{
    useEmailCheck: typeof useEmailCheck,
    auth: typeof auth,
}>()

apiContainer.provide('useEmailCheck', useEmailCheck)
apiContainer.provide('auth', auth)
