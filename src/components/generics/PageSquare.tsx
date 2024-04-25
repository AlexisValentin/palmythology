import Link from 'next/link'
import { useCallback } from 'react'
import {
  getPantheonMainColor,
  getPantheonTextColor,
} from '../../helpers/colors'
import {
  setCardRouteParameters,
  setPantheonRouteParameters,
  setSubjectRouteParameters,
} from '../../helpers/routes'
import { PantheonValue } from '../../types/cards/pantheons'
import { SubjectValue } from '../../types/cards/subjects'
import { StoryblokImageType } from '../../types/storyblok/storyblok'
import { BLACK_COLOR, WHITE_COLOR } from '../../types/styles/colors'

export enum CONTENT_TYPE {
  CARD = 'card',
  PANTHEON = 'pantheon',
  SUBJECT = 'subject',
}

export enum PAGE_SQUARE_SIZE_TYPE {
  SM = 'w-6 md:w-8',
  MD = 'w-36 md:w-48',
  XL = 'w-52 md:w-72',
}

interface PageSquareProps {
  title: string
  subtitle?: string
  pantheon?: PantheonValue
  subject?: SubjectValue
  icon: StoryblokImageType | string
  available?: boolean
  contentType: CONTENT_TYPE
  size?:
    | PAGE_SQUARE_SIZE_TYPE.SM
    | PAGE_SQUARE_SIZE_TYPE.MD
    | PAGE_SQUARE_SIZE_TYPE.XL
  withoutText?: boolean
}

const PageSquare: React.FC<PageSquareProps> = ({
  title,
  subtitle,
  pantheon,
  subject,
  icon,
  available = true,
  contentType,
  size = PAGE_SQUARE_SIZE_TYPE.MD,
  withoutText = false,
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
      } rounded-3xl p-6 m-6 ${withoutText && 'py-2 m-4'} bg-${
        pantheon ? getPantheonMainColor(pantheon) : 'slate-500'
      } text-${pantheon ? getPantheonTextColor(pantheon) : WHITE_COLOR} 
      lg:bg-transparent
      lg:text-black
      lg:hover:bg-${
        pantheon ? getPantheonMainColor(pantheon) : 'slate-500'
      } lg:hover:text-${pantheon ? getPantheonTextColor(pantheon) : WHITE_COLOR}`}
    >
      <div className="flex items-center justify-center flex-col">
        <PageSquareBlock
          title={title}
          subtitle={subtitle}
          icon={icon}
          size={size}
          withoutText={withoutText}
        />
      </div>
    </Link>
  ) : (
    <div className="flex items-center justify-center flex-col p-6 mx-6">
      <PageSquareBlock
        title={title}
        subtitle={subtitle}
        icon={icon}
        size={size}
        withoutText={withoutText}
      />
    </div>
  )
}

const PageSquareBlock: React.FC<
  Pick<PageSquareProps, 'title' | 'subtitle' | 'icon' | 'size' | 'withoutText'>
> = ({ title, subtitle, icon, size, withoutText }): JSX.Element => (
  <div className={`flex item-center justify-center flex-col ${size}`}>
    <div className="flex items-center justify-center flex-col mt-4">
      <img
        className={`w-24 pb-4`}
        src={typeof icon === 'string' ? icon : icon?.filename}
        alt={typeof icon === 'string' ? `Icône ${title}` : icon?.alt}
        width={100}
        height={100}
      />
      {!withoutText && <h2 className="font-bold truncate px-2">{title}</h2>}
      {!withoutText && <h3 className="italic truncate px-2">{subtitle}</h3>}
    </div>
  </div>
)

export default PageSquare
