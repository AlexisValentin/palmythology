export enum LOCAL_STORAGE_KEYS {
  MODAL_TRACKING_LAST_DISPLAY = 'MODAL_TRACKING_LAST_DISPLAY',
}

export const getFromLocalStorage = (key: LOCAL_STORAGE_KEYS) => {
  if (typeof window === 'undefined') return null

  return localStorage.getItem(key)
}

export const setInLocalStorage = (key: LOCAL_STORAGE_KEYS, payload: any) => {
  if (typeof window === 'undefined') return null

  return localStorage.setItem(key, payload)
}
