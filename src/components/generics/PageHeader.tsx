interface PageHeaderProps {
  title: string
  subtitle?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
}): JSX.Element => (
  <div className="flex flex-col items-center justify-center mt-12 mb-6">
    <h1 className=" text-2xl font-bold">{title}</h1>
    {subtitle && (
      <div className="hidden md:block">
        <h2 className="italic text-xs text-nowrap sm:block md:text-sm lg:text-base pt-2">
          {subtitle}
        </h2>
      </div>
    )}
  </div>
)

export default PageHeader
