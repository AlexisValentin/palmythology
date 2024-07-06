enum SESSION_STORAGE_KEYS {
  SEARCH_CRITERIAS_PANTHEON = 'SEARCH_CRITERIAS_PANTHEON',
  SEARCH_CRITERIAS_SUBJECT = 'SEARCH_CRITERIAS_SUBJECT',
}

export enum LOCAL_STORAGE_KEYS {
  MODAL_TRACKING_LAST_DISPLAY = 'MODAL_TRACKING_LAST_DISPLAY',
}

export const getFromLocalStorage = (key: LOCAL_STORAGE_KEYS) =>
  localStorage.getItem(key)

export const setInLocalStorage = (key: LOCAL_STORAGE_KEYS, payload: any) => {
  sessionStorage.setItem(key, payload)
}

export const getFromSessionStorage = (key: SESSION_STORAGE_KEYS) =>
  sessionStorage.getItem(key)

export const setInSessionStorage = (
  key: SESSION_STORAGE_KEYS,
  payload: any,
) => {
  sessionStorage.setItem(key, payload)
}
