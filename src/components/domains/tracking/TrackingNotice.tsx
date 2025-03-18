'use client'

import { isPageServerSide } from '../../../utils/browser'
import {
  getFromLocalStorage,
  LOCAL_STORAGE_KEYS,
  setInLocalStorage,
} from '../../../utils/storage'
import Modal from '../../generics/Modal'
import useModal from '../../hooks/useModal'

const TrackingNotice = () => {
  const { shouldDisplayModal, hideModal } = useModal(
    !Boolean(
      getFromLocalStorage(LOCAL_STORAGE_KEYS.MODAL_TRACKING_LAST_DISPLAY),
    ),
  )

  const onClick = () => {
    setInLocalStorage(
      LOCAL_STORAGE_KEYS.MODAL_TRACKING_LAST_DISPLAY,
      Date.now(),
    )
    hideModal()
  }

  if (isPageServerSide() || !shouldDisplayModal) return <></>

  const plausibleUrl = 'https://plausible.io/data-policy'

  return (
    <Modal
      onClick={onClick}
      options={{
        additionalUrl: plausibleUrl,
        additionalLabel: 'Pour en savoir plus',
      }}
    />
  )
}

export default TrackingNotice
