'use client'
import { useStoryblok } from '@storyblok/react'
import React from 'react'
import { getAboutSlug } from '../../src/helpers/storyblok'
import { wording } from '../../src/wording/fr/main'
import TextBlock, { IconSize } from '../../src/components/generics/TextBlock'
import PageHeader from '../../src/components/generics/PageHeader'

const AboutPage: React.FC = () => {
  const story = useStoryblok(getAboutSlug(), {
    version: 'published',
  })

  return (
    <>
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
