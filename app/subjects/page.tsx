import React from 'react'
import { Metadata } from 'next'
import PageHeader from '../../src/components/generics/PageHeader'
import PageSquare, {
  CONTENT_TYPE,
} from '../../src/components/generics/PageSquare'
import { wording } from '../../src/wording/fr/main'
import { SEO_WORDING } from '../../src/wording/fr/seo'
import { ALL_SUBJECT } from '../../src/types/cards/subjects'

export const metadata: Metadata = {
  title: SEO_WORDING.SUBJECTS.title,
  description: SEO_WORDING.SUBJECTS.description,
}

const SubjectsPage = () => {
  return (
    <>
      <PageHeader
        title={wording.sections.subject_title}
        subtitle={wording.sections.subject_description}
      />
      <div className="flex flex-col items-center justify-center flex-wrap md:flex-row mt-4">
        {ALL_SUBJECT.map((subject, idx) => (
          <PageSquare
            title={subject.label}
            subject={subject.value}
            key={idx}
            icon={{
              alt: `Icône du sujet ${subject.label}`,
              filename: subject.icon,
            }}
            contentType={CONTENT_TYPE.SUBJECT}
          />
        ))}
      </div>
    </>
  )
}

export default SubjectsPage
