'use client'
import { useStoryblok } from '@storyblok/react'
import React from 'react'
import { getAboutSlug } from '../../src/helpers/storyblok'
import { SEO_WORDING } from '../../src/wording/fr/seo'
import { wording } from '../../src/wording/fr/main'
import TextBlock, { IconSize } from '../../src/components/generics/TextBlock'
import PageHeader from '../../src/components/generics/PageHeader'
import Meta from '../../src/components/generics/Meta'

const AboutPage: React.FC = () => {
  const story = useStoryblok(getAboutSlug(), {
    version: 'published',
  })

  return (
    <>
      <Meta
        title={SEO_WORDING.ABOUT.title}
        description={SEO_WORDING.ABOUT.description}
      />
      <PageHeader
        title={wording.sections.about_title}
        subtitle={wording.sections.about_description}
      />
      {story?.content?.aboutItems && (
        <TextBlock
          content={story.content.aboutItems}
          iconSize={IconSize.MEDIUM}
          leftSiding={true}
        />
      )}
    </>
  )
}

export default AboutPage
