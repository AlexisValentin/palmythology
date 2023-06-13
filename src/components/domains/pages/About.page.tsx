import { useStoryblok } from '@storyblok/react'
import { getAboutSlug } from '../../../helpers/storyblok'
import { wording } from '../../../wording/fr/main'
import PageHeader from '../../generics/PageHeader'
import TextBlock, { IconSize } from '../../generics/TextBlock'
import { SEO_WORDING } from '../../../wording/fr/seo'
import Meta from '../../generics/Meta'

const AboutPage = (): JSX.Element => {
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
