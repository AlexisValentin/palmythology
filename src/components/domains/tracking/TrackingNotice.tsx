'use client'

import { useEffect, useState } from 'react'
import {
  getFromLocalStorage,
  LOCAL_STORAGE_KEYS,
  setInLocalStorage,
} from '../../../utils/storage'
import Modal from '../../generics/Modal'
import useModal from '../../hooks/useModal'

const TrackingNotice = () => {
  const [isMounted, setIsMounted] = useState(false)
  const { shouldDisplayModal, hideModal } = useModal(
    !getFromLocalStorage(LOCAL_STORAGE_KEYS.MODAL_TRACKING_LAST_DISPLAY),
  )

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const onClick = () => {
    setInLocalStorage(
      LOCAL_STORAGE_KEYS.MODAL_TRACKING_LAST_DISPLAY,
      Date.now(),
    )
    hideModal()
  }

  if (!isMounted || !shouldDisplayModal) return <></>

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
