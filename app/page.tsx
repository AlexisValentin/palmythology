import React from 'react'
import PageHeader from '../src/components/generics/PageHeader'
import { wording } from '../src/wording/fr/main'
import { ROUTES } from '../src/types/consts/routes'
import PageSection from '../src/components/generics/PageSection'

const HomePage = (): JSX.Element => {
  return (
    <>
      <PageHeader
        title={wording.sections.home_title}
        subtitle={wording.sections.home_description}
      />
      <div className="flex flex-row justify-center flex-wrap mx-8 sm:block sm:mx-0">
        {ROUTES.map((route, idx) => {
          const { name, url, description, gradient, iconUrl } = route
          const { home_title } = wording.sections

          if (name === home_title) {
            return <div key={idx} />
          }

          return (
            <PageSection
              key={idx}
              name={name}
              url={url}
              description={description}
              gradient={gradient}
              iconUrl={iconUrl}
            />
          )
        })}
      </div>
    </>
  )
}

export default HomePage
