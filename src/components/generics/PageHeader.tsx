import { PageHeaderContainerStyled } from "./PageHeader.styled";

interface PageHeaderProps {
  text: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ text }): JSX.Element => {
  return (
    <PageHeaderContainerStyled className="text-2xl font-bold p-10">
      {text}
    </PageHeaderContainerStyled>
  );
};

export default PageHeader;
