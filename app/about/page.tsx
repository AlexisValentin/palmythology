import React from 'react'
import { getAboutStory } from '../../src/helpers/storyblok'
import { wording } from '../../src/wording/fr/main'
import TextBlock, { IconSize } from '../../src/components/generics/TextBlock'
import PageHeader from '../../src/components/generics/PageHeader'

const AboutPage = async () => {
  const story = await getAboutStory()

  const { aboutItems } = story.data.story.content

  if (!story?.data?.story?.content) return <></>

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
