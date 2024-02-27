import { useRef } from 'react'

export function useDebounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
    const timeoutRef = useRef<number>()  

    return (...args: Parameters<T>) => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }  

        timeoutRef.current = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}
