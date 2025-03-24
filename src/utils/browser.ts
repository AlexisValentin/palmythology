export const isPageServerSide = () => typeof window === 'undefined'
export const isPageClientSide = () => !isPageServerSide()
