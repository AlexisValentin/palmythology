import {
  getPantheonMainColor,
  getPantheonTextColor,
} from '../../helpers/colors'
import {
  setCardRouteParameters,
  setPantheonRouteParameters,
  setSubjectRouteParameters,
} from '../../helpers/routes'
import { StoryblokImageType } from '../../types/storyblok/storyblok'
import { PantheonValue } from '../../types/cards/pantheons'
import { useCallback } from 'react'
import Link from 'next/link'
import { BLACK_COLOR, WHITE_COLOR } from '../../types/styles/colors'
import { SubjectValue } from '../../types/cards/subjects'

export enum CONTENT_TYPE {
  CARD = 'card',
  PANTHEON = 'pantheon',
  SUBJECT = 'subject',
}

interface PageSquareProps {
  title: string
  subtitle?: string
  pantheon?: PantheonValue
  subject?: SubjectValue
  icon: StoryblokImageType
  available?: boolean
  contentType: CONTENT_TYPE
}

const PageSquare: React.FC<PageSquareProps> = ({
  title,
  subtitle,
  pantheon,
  subject,
  icon,
  available = true,
  contentType,
}): JSX.Element => {
  const buildLink = useCallback(() => {
    switch (contentType) {
      case CONTENT_TYPE.CARD:
        return setCardRouteParameters(title, pantheon!)
      case CONTENT_TYPE.PANTHEON:
        return setPantheonRouteParameters(pantheon!)
      case CONTENT_TYPE.SUBJECT:
        return setSubjectRouteParameters(subject!)
      default:
        return null
    }
  }, [contentType, title, pantheon, subject])

  if (available === undefined || !buildLink()) return <></>

  return available ? (
    <Link
      href={buildLink()!}
      className={`border-4 border-${
        pantheon ? getPantheonMainColor(pantheon) : BLACK_COLOR
      } rounded-3xl p-6 m-6 bg-${
        pantheon ? getPantheonMainColor(pantheon) : WHITE_COLOR
      } text-${pantheon ? getPantheonTextColor(pantheon) : BLACK_COLOR} 
      lg:bg-transparent
      lg:text-black
      lg:hover:bg-${
        pantheon ? getPantheonMainColor(pantheon) : BLACK_COLOR
      } lg:hover:text-${pantheon ? getPantheonTextColor(pantheon) : WHITE_COLOR}`}
    >
      <div className="flex items-center justify-center flex-col">
        <PageSquareBlock title={title} subtitle={subtitle} icon={icon} />
      </div>
    </Link>
  ) : (
    <div className="flex items-center justify-center flex-col p-6 mx-6">
      <PageSquareBlock title={title} subtitle={subtitle} icon={icon} />
    </div>
  )
}

const PageSquareBlock: React.FC<
  Pick<PageSquareProps, 'title' | 'subtitle' | 'icon'>
> = ({ title, subtitle, icon }): JSX.Element => (
  <div className="flex item-center justify-center flex-col w-52">
    <div className="flex items-center justify-center flex-col mt-4">
      <img
        className="w-24 pb-4"
        src={icon.filename}
        alt={icon.alt}
        width={100}
        height={100}
      />
      <h2 className="font-bold truncate">{title}</h2>
      <h3 className="italic truncate">{subtitle}</h3>
    </div>
  </div>
)

export default PageSquare
