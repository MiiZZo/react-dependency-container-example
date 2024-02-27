import { createContainer } from '../di';
import { useDebounce } from './use-debounce';

export const baseHooksContainer = createContainer<{
    useDebounce: typeof useDebounce
}>()

baseHooksContainer.provide('useDebounce', useDebounce)
