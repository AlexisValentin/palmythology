import { isPageServerSide } from './browser'

export enum LOCAL_STORAGE_KEYS {
  MODAL_TRACKING_LAST_DISPLAY = 'MODAL_TRACKING_LAST_DISPLAY',
}

export const getFromLocalStorage = (key: LOCAL_STORAGE_KEYS) => {
  if (isPageServerSide()) return null

  return localStorage.getItem(key)
}

export const setInLocalStorage = (key: LOCAL_STORAGE_KEYS, payload: any) => {
  if (isPageServerSide()) return null

  return localStorage.setItem(key, payload)
}
