import FadeIn from 'react-fade-in'

interface PageHeaderProps {
  title: string
  subtitle?: string
  hasFadingEffect?: boolean
}

const PageHeaderContent: React.FC<Omit<PageHeaderProps, 'hasFadingEffect'>> = ({
  title,
  subtitle,
}): JSX.Element => (
  <div className="p-10">
    <h1 className="flex justify-center text-2xl font-bold">{title}</h1>
    {subtitle && (
      <h3 className="hidden md:flex justify-center italic md:text-sm lg:text-base pt-2">
        {subtitle}
      </h3>
    )}
  </div>
)

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  hasFadingEffect = false,
}): JSX.Element =>
  hasFadingEffect ? (
    <FadeIn delay={1000} transitionDuration={3000}>
      <PageHeaderContent title={title} subtitle={subtitle} />
    </FadeIn>
  ) : (
    <PageHeaderContent title={title} subtitle={subtitle} />
  )

export default PageHeader
