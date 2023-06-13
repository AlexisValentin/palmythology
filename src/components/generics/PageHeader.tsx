interface PageHeaderProps {
  title: string
  subtitle?: string
  hasFadingEffect?: boolean
}

const PageHeader: React.FC<PageHeaderProps> = ({
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

export default PageHeader
