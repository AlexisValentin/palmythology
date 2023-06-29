import { useStoryblok } from '@storyblok/react'
import { useParams } from 'react-router-dom'
import { getCardSlug } from '../../../helpers/storyblok'
import Carrousel from '../../generics/Carrousel'
import PageHeader from '../../generics/PageHeader'
import Summary from '../../generics/Summary'
import NotFound404 from '../http/404'
import { isObjectEmpty } from '../../../helpers/object'
import Meta from '../../generics/Meta'
import { SEO_WORDING } from '../../../wording/fr/seo'
import SocialNetworks from '../../generics/SocialNetworks'

const CardDetailsPage = (): JSX.Element => {
  const params = useParams()
  // @ts-ignore
  const story = useStoryblok(getCardSlug(params.card, params.pantheon), {
    version: 'published',
  })

  if (isObjectEmpty(story)) return <NotFound404 />

  const {
    name,
    subtitle,
    summary,
    images,
    available,
    instagramUrl,
    facebookUrl,
    twitterUrl,
  } = story.content

  if (!available) return <NotFound404 />

  const hasCustomLinks = instagramUrl.url || facebookUrl.url || twitterUrl.url
  const socialLinks = hasCustomLinks && {
    instagram: instagramUrl.url,
    facebook: facebookUrl.url,
    twitter: twitterUrl.url,
  }

  return (
    <>
      <Meta
        title={SEO_WORDING.CARD_DETAILS.title}
        description={SEO_WORDING.CARD_DETAILS.description}
      />
      <div className="flex items-center justify-center flex-col">
        <PageHeader title={name} subtitle={subtitle} />
        {summary && <Summary content={summary} />}
        <div className="flex items-center justify-center w-full lg:w-3/4">
          <Carrousel imageList={images} />
        </div>
        <div className="flex flex-row mt-16">
          {hasCustomLinks && <SocialNetworks customLinks={socialLinks} />}
        </div>
      </div>
    </>
  )
}

export default CardDetailsPage
