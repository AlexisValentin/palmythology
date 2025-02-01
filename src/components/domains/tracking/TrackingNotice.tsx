'use client'

import { isPageServerSide } from '../../../helpers/browser'
import {
  getFromLocalStorage,
  LOCAL_STORAGE_KEYS,
  setInLocalStorage,
} from '../../../helpers/storage'
import { MODAL_IDS } from '../../../types/consts/modal'
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
      modalId={MODAL_IDS.TRACKING}
      onClick={onClick}
      options={{
        additionalUrl: plausibleUrl,
        additionalLabel: 'Pour en savoir plus',
      }}
    />
  )
}

export default TrackingNotice
