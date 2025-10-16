'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import SocialNetworks from '../../generics/SocialNetworks'
import DoubleArrowRightIcon from '../../../assets/icons/double_arrow_right.svg'
import {
  getFromLocalStorage,
  setInLocalStorage,
  removeFromLocalStorage,
  LOCAL_STORAGE_KEYS,
} from '../../../utils/storage'
import { SEVEN_DAYS_IN_MS } from '../../../utils/dates/dates.constants'

const SocialsIncentivePopin = () => {
  const [isExpanded, setIsExpanded] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const lastCollapsedTimestamp = getFromLocalStorage(
      LOCAL_STORAGE_KEYS.MODAL_SOCIALS_INCENTIVE_LAST_COLLAPSED,
    )

    if (lastCollapsedTimestamp) {
      const timeSinceCollapsed = Date.now() - Number.parseInt(lastCollapsedTimestamp, 10)

      if (timeSinceCollapsed < SEVEN_DAYS_IN_MS) {
        setIsExpanded(false)
      } else {
        removeFromLocalStorage(LOCAL_STORAGE_KEYS.MODAL_SOCIALS_INCENTIVE_LAST_COLLAPSED)
      }
    }

    setIsMounted(true)
  }, [])

  const toggleExpand = () => {
    const newExpandedState = !isExpanded

    if (newExpandedState) {
      removeFromLocalStorage(LOCAL_STORAGE_KEYS.MODAL_SOCIALS_INCENTIVE_LAST_COLLAPSED)
    } else {
      setInLocalStorage(
        LOCAL_STORAGE_KEYS.MODAL_SOCIALS_INCENTIVE_LAST_COLLAPSED,
        Date.now().toString(),
      )
    }

    setIsExpanded(newExpandedState)
  }

  if (!isMounted) return null

  return (
    <div
      className={`hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 transition-transform duration-300 ${
        isExpanded ? 'translate-x-0' : 'md:translate-x-[calc(100%-2.2rem)] lg:translate-x-[calc(100%-2.2rem)] xl:translate-x-[calc(100%-2.2rem)] 2xl:translate-x-[calc(100%-2.2rem)]'
      }`}
    >
      <button
        onClick={toggleExpand}
        className="bg-white rounded-l-lg shadow-2xl px-2 py-4 flex flex-col items-center justify-center gap-1 hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-pink-400 transition-colors border border-gray-200"
        aria-label={isExpanded ? 'Masquer les réseaux sociaux' : 'Afficher les réseaux sociaux'}
      >
        {isExpanded ? (
          <Image src={DoubleArrowRightIcon} alt="Double flèches vers la droite" width={16} height={16} />      
        ) : (
          <Image
            src={DoubleArrowRightIcon}
            alt="Double flèches vers la gauche"
            width={16}
            height={16}
            className="rotate-180"
          />
        )}
      </button>
      <div className="bg-white rounded-r-lg shadow-2xl p-6 md:w-24 lg:w-40 xl:w-56 2xl:w-72">
        <div>
          <p className="text-sm text-center text-gray-600 mb-4">
            Le meilleur moyen de soutenir la Palmythology, c'est sur les réseaux sociaux !
          </p>
          <div className="flex justify-center items-center">
            <SocialNetworks />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialsIncentivePopin
