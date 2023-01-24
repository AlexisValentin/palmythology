import {
  PageHeaderContainerStyled,
  PageHeaderMainTitleStyled,
  PageHeaderSubtitleStyled,
} from "./PageHeader.styled";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  hasFadingEffect?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  hasFadingEffect,
}): JSX.Element => (
  <PageHeaderContainerStyled className="p-10" hasFadingEffect={hasFadingEffect}>
    <PageHeaderMainTitleStyled className="text-2xl font-bold">
      {title}
    </PageHeaderMainTitleStyled>
    {subtitle && (
      <PageHeaderSubtitleStyled className="italic">
        {subtitle}
      </PageHeaderSubtitleStyled>
    )}
  </PageHeaderContainerStyled>
);

export default PageHeader;
