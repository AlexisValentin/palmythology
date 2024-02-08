'use client'

import { useCallback, useState } from 'react'
import { ALL_PANTHEON } from '../../../types/cards/pantheons'
import { ALL_SUBJECT } from '../../../types/cards/subjects'
import { BASE_INPUT_NAMES } from '../../../types/consts/form'
import { wording } from '../../../wording/fr/main'
import SearchResults from './SearchResults'
import FilterSelect from './FilterSelect'

interface FilterSelectProps {
  value: string
  label: string
}

export type ReactSelectValue = FilterSelectProps | null

const Filter = (): JSX.Element => {
  const [pantheonSearchCriteria, setPantheonSearchCriteria] = useState('')
  const [subjectSearchCriteria, setSubjectSearchCriteria] = useState('')

  const selectNames = {
    pantheon: BASE_INPUT_NAMES.PANTHEON,
    subject: BASE_INPUT_NAMES.SUBJECT,
  }

  const onPantheonSelectChange = useCallback((selected?: ReactSelectValue) => {
    setPantheonSearchCriteria(selected?.value ?? '')
  }, [])

  const onSubjectSelectChange = useCallback((selected?: ReactSelectValue) => {
    setSubjectSearchCriteria(selected?.value ?? '')
  }, [])

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="m-2 w-40">
          <FilterSelect
            key="pantheon_select"
            selectLabel={wording.filter.pantheon}
            selectName={selectNames.pantheon}
            onChange={onPantheonSelectChange}
            options={ALL_PANTHEON}
          />
        </div>
        <div className="m-2 w-40">
          <FilterSelect
            key="subject_select"
            selectLabel={wording.filter.subject}
            selectName={selectNames.subject}
            onChange={onSubjectSelectChange}
            options={ALL_SUBJECT}
          />
        </div>
      </div>
      <SearchResults
        pantheon={pantheonSearchCriteria}
        subject={subjectSearchCriteria}
      />
    </div>
  )
}

export default Filter
