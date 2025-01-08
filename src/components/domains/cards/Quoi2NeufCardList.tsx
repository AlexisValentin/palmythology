'use client'

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'
import {
  MONTH_LABEL_TYPE,
  MONTH_VALUE_TYPE,
  MONTHS_VALUE,
  stringifyMonthCode,
} from '../../../helpers/dates'
import { Quoi2NeufStoryType } from '../../../types/storyblok/storyblok'
import PageSquare, { CONTENT_TYPE } from '../../generics/PageSquare'
import DoubleRightArrowIcon from '../../../assets/icons/double_arrow_right.svg'
import Image from 'next/image'
import PageHeader from '../../generics/PageHeader'
import { wording } from '../../../wording/fr/main'
import { getMonthLabelFromValue } from '../../../helpers/dictionary'

const Q2NCardList: React.FC<{ stories: any }> = ({ stories }) => {
  const [selectedMonthLabel, setSelectedMonthLabel] =
    useState<MONTH_LABEL_TYPE | null>(null)

  const date = new Date()
  const month = date.getMonth()
  const stringifiedMonth = stringifyMonthCode(month)

  useEffect(() => {
    setSelectedMonthLabel(stringifiedMonth as MONTH_LABEL_TYPE)
  }, [stringifiedMonth])

  if (!stringifiedMonth) return <></>

  const parsedDate = `${selectedMonthLabel ?? stringifiedMonth}`

  return (
    <>
      <PageHeader
        title={`${wording.sections.q2n_title}`}
        subtitle={`${parsedDate}`}
        fullDisplay
      />
      <Q2NItemLists
        quoi2NeufStories={stories}
        currentMonth={MONTHS_VALUE[month]}
        setSelectedMonthLabel={setSelectedMonthLabel}
      />
    </>
  )
}

const Q2NItemLists = ({
  quoi2NeufStories,
  currentMonth,
  setSelectedMonthLabel,
}: {
  quoi2NeufStories: Quoi2NeufStoryType[]
  currentMonth: MONTH_VALUE_TYPE
  setSelectedMonthLabel: Dispatch<SetStateAction<MONTH_LABEL_TYPE | null>>
}) => {
  const [selectedMonthValue, setSelectedMonthValue] =
    useState<MONTH_VALUE_TYPE>(currentMonth)

  const monthArrayIndex = MONTHS_VALUE.findIndex(
    (month) => month === currentMonth,
  )

  const lastMonth =
    monthArrayIndex - 1 < 0
      ? MONTHS_VALUE[monthArrayIndex + 11]
      : MONTHS_VALUE[monthArrayIndex - 1]
  const antepenultimateMonth =
    monthArrayIndex - 2 < 0
      ? MONTHS_VALUE[monthArrayIndex + 10]
      : MONTHS_VALUE[monthArrayIndex - 2]

  const updateSelectedMonth = useCallback(
    (monthNav: 'before' | 'after') => {
      if (monthNav === 'before') {
        if (selectedMonthValue === currentMonth) {
          setSelectedMonthValue(lastMonth)
        }
        if (selectedMonthValue === lastMonth)
          setSelectedMonthValue(antepenultimateMonth)
        if (selectedMonthValue === antepenultimateMonth) {
          /* should never reach this block */
        }
      } else {
        if (selectedMonthValue === currentMonth) {
          /* should never reach this block */
        }
        if (selectedMonthValue === lastMonth)
          setSelectedMonthValue(currentMonth)
        if (selectedMonthValue === antepenultimateMonth)
          setSelectedMonthValue(lastMonth)
      }
    },
    [currentMonth, lastMonth, antepenultimateMonth, selectedMonthValue],
  )

  useEffect(() => {
    setSelectedMonthLabel(
      getMonthLabelFromValue(selectedMonthValue) as MONTH_LABEL_TYPE,
    )
  }, [selectedMonthValue, setSelectedMonthLabel])

  return (
    <div className="flex flex-row items-center">
      <Image
        className={`h-min rotate-180 cursor-pointer hover:opacity-75 ${selectedMonthValue === antepenultimateMonth && 'invisible'}`}
        src={DoubleRightArrowIcon}
        alt="Double flèche bleue pointant à gauche"
        width={50}
        height={50}
        onClick={() => updateSelectedMonth('before')}
      />
      <Q2NSingleMonth
        quoi2NeufStories={quoi2NeufStories}
        quoi2NeufMonth={selectedMonthValue}
      />
      <Image
        className={`h-min cursor-pointer hover:opacity-75 ${selectedMonthValue === currentMonth && 'invisible'}`}
        src={DoubleRightArrowIcon}
        alt="Double flèche bleue pointant à droite"
        width={50}
        height={50}
        onClick={() => updateSelectedMonth('after')}
      />
    </div>
  )
}

const Q2NSingleMonth = ({
  quoi2NeufStories,
  quoi2NeufMonth,
}: {
  quoi2NeufStories: Quoi2NeufStoryType[]
  quoi2NeufMonth: MONTH_VALUE_TYPE
}) => {
  let itemCount = 0

  return (
    <div
      className={`flex items-center justify-center flex-wrap ${!itemCount && 'mt-12'}`}
    >
      {quoi2NeufStories.map((item) => {
        const { title, subtitle, icon, pantheon, available, month } = item

        if (quoi2NeufMonth !== month)
          return <div key={`q2n-${title}-${subtitle}`} />

        itemCount++

        return (
          <PageSquare
            key={`q2n-${title}-${subtitle}`}
            title={title}
            subtitle={subtitle}
            icon={icon}
            available={available}
            pantheon={pantheon}
            contentType={CONTENT_TYPE.CARD}
          />
        )
      })}
      {itemCount === 0 && (
        <div className="flex flex-col justify-center items-center flex-wrap">
          <h3 className="text-2xl font-bold mb-4">
            Oops, le planning n'a pas été défini pour ce mois-ci
          </h3>
          <h4 className="text-xl">
            Vous pouvez peut-être retenter votre chance plus tard !
          </h4>
        </div>
      )}
    </div>
  )
}

export default Q2NCardList
