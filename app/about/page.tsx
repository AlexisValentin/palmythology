import React from 'react'
import { getAboutStory } from '../../src/helpers/storyblok'
import { wording } from '../../src/wording/fr/main'
import TextBlock, { IconSize } from '../../src/components/generics/TextBlock'
import PageHeader from '../../src/components/generics/PageHeader'
import { Metadata } from 'next'
import { SEO_WORDING } from '../../src/wording/fr/seo'

export const metadata: Metadata = {
  title: SEO_WORDING.ABOUT.title,
  description: SEO_WORDING.ABOUT.description,
}

const AboutPage = async () => {
  const story = await getAboutStory()

  if (!story?.data?.story?.content) return <></>

  const { aboutItems } = story.data.story.content

  return (
    <>
      <PageHeader
        title={wording.sections.about_title}
        subtitle={wording.sections.about_description}
      />
      {aboutItems && (
        <TextBlock
          content={aboutItems}
          iconSize={IconSize.MEDIUM}
          leftSiding={true}
        />
      )}
    </>
  )
}

export default AboutPage
