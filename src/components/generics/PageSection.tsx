import Image from 'next/image'
import Link from 'next/link'
import { RouteType } from '../../types/consts/routes'

type PageSectionProps = RouteType

const PageSectionContent: React.FC<PageSectionProps> = ({
  name,
  description,
  gradient,
  iconUrl,
}) => (
  <section
    className={`flex flex-col items-center rounded-3xl p-2.5 w-60 sm:w-full sm:rounded-none sm:flex-row ${
      gradient
        ? `bg-gradient-to-r from-${gradient?.startingColor} ${gradient?.intermediateColor ? `via-${gradient?.intermediateColor}` : ''} to-${gradient?.endingColor}`
        : `bg-slate-100`
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
        <h2 className="font-semibold text-xl">{name}</h2>
        <div className="font-medium mt-6 hidden md:block">{description}</div>
      </div>
    </div>
  </section>
)

const PageSection: React.FC<PageSectionProps> = ({
  name,
  url,
  description,
  gradient,
  iconUrl,
}): JSX.Element =>
  url ? (
    <Link href={url} className="flex flex-row m-5 sm:block sm:w-full sm:m-0">
      <PageSectionContent
        name={name}
        description={description}
        gradient={gradient}
        iconUrl={iconUrl}
      />
    </Link>
  ) : (
    <PageSectionContent
      name={name}
      description={description}
      gradient={gradient}
      iconUrl={iconUrl}
    />
  )

export default PageSection
