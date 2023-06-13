export enum SESSION_STORAGE_KEYS {
  SEARCH_CRITERIAS_PANTHEON = 'SEARCH_CRITERIAS_PANTHEON',
  SEARCH_CRITERIAS_SUBJECT = 'SEARCH_CRITERIAS_SUBJECT',
}

export const getFromSessionStorage = (key: SESSION_STORAGE_KEYS) =>
  sessionStorage.getItem(key)

export const setInSessionStorage = (
  key: SESSION_STORAGE_KEYS,
  payload: any,
) => {
  sessionStorage.setItem(key, payload)
}
