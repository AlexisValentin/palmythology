interface PageHeaderProps {
  title: string
  subtitle?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
}): JSX.Element => (
  <div className="flex flex-col items-center justify-center my-12">
    <h1 className=" text-2xl font-bold">{title}</h1>
    {subtitle && (
      <h2 className="italic text-xs md:block md:text-sm lg:text-base pt-2">
        {subtitle}
      </h2>
    )}
  </div>
)

export default PageHeader
