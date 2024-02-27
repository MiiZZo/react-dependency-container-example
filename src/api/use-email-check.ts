import { useState } from 'react';

export function useEmailCheck() {
    const [isEmailFree, setIsEmailFree] = useState<null | boolean>(null)
    const onEmailCheck = async (email: string) => {
        const res = await fetch(`/api/check-email/${email}`)

        setIsEmailFree(res.ok)
    }

    return {
        isEmailFree,
        onEmailCheck,
    }
}
