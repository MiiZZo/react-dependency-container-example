import { FormEvent, useState } from 'react'
import { apiContainer } from '../api'
import { createContainer } from '../di'
import { EmailInput } from './email-input'


export const formContainer = createContainer<{
    EmailInput: typeof EmailInput,
}>()

formContainer.provide('EmailInput', EmailInput)

export function Form() {
    const EmailInput = formContainer.get('EmailInput')
    const onAuth = apiContainer.get('auth')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onAuth({ email, password })        
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <EmailInput 
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">submit</button>
        </form>
    )
}
