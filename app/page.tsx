import React from 'react'
import Meta from '../src/components/generics/Meta'
import { SEO_WORDING } from '../src/wording/fr/seo'
import PageHeader from '../src/components/generics/PageHeader'
import { wording } from '../src/wording/fr/main'
import { ROUTES } from '../src/types/consts/routes'
import PageSection from '../src/components/generics/PageSection'
import { apiPlugin, storyblokInit } from '@storyblok/react'

const HomePage = (): JSX.Element => {
  return (
    <>
      <Meta
        title={SEO_WORDING.HOME.title}
        description={SEO_WORDING.HOME.description}
      />
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
