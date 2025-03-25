import Image from 'next/image'
import Link from 'next/link'
import { RouteType } from '../../utils/routes/routes.constants'

type PageSectionProps = RouteType

const PageSectionContent: React.FC<PageSectionProps> = ({
  name,
  description,
  gradient,
  iconUrl,
  url,
}) => {
  const gradientProperty = gradient?.intermediateColor
    ? `via-${gradient?.intermediateColor}`
    : ''

  return (
    <section
      className={`flex flex-col items-center rounded-3xl p-2.5 w-60 sm:w-full sm:flex-row ${
        gradient
          ? `bg-gradient-to-r from-${gradient?.startingColor} ${gradientProperty} to-${gradient?.endingColor}`
          : `bg-white`
      } sm:p-0`}
    >
      <Image
        className="w-24 m-6 sm:m-12"
        src={iconUrl}
        alt={`${name} - ${description}`}
        width={100}
        height={100}
      />
      <div
        className={`flex items-center grow ${
          gradient && `text-white`
        } sm:my-12 sm:mr-12`}
      >
        <div className="flex flex-col mt-2 mb-2">
          <h2
            className={`font-semibold text-md ${url ? 'text-xl' : 'hidden'} md:block`}
          >
            {name}
          </h2>
          <div
            className={`font-medium mt-6 ${!url ? 'block text-center' : 'hidden'} md:block md:text-left`}
          >
            {description}
          </div>
        </div>
      </div>
    </section>
  )
}

const PageSection: React.FC<PageSectionProps> = ({
  name,
  url,
  description,
  gradient,
  iconUrl,
}) =>
  url ? (
    <Link
      href={url}
      className="flex flex-row m-5 sm:block sm:w-full sm:m-0 hover:opacity-75"
    >
      <PageSectionContent
        name={name}
        description={description}
        gradient={gradient}
        iconUrl={iconUrl}
        url={url}
      />
    </Link>
  ) : (
    <div className="flex flex-row items-center justify-center sm:block sm:w-full sm:m-0">
      <PageSectionContent
        name={name}
        description={description}
        gradient={gradient}
        iconUrl={iconUrl}
      />
    </div>
  )

export default PageSection
