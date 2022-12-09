import {
  PageHeaderMainTitleStyled,
  PageHeaderSubtitleStyled,
} from "./PageHeader.styled";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
}): JSX.Element => (
  <div className="p-10">
    <PageHeaderMainTitleStyled className="text-2xl font-bold">
      {title}
    </PageHeaderMainTitleStyled>
    {subtitle && (
      <PageHeaderSubtitleStyled className="italic">
        {subtitle}
      </PageHeaderSubtitleStyled>
    )}
  </div>
);

export default PageHeader;
