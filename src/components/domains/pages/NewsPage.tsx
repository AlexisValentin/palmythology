import { wording } from "../../../wording/fr/main";
import PageHeader from "../../generics/PageHeader";

const NewsPage = (): JSX.Element => {
  return (
    <>
      <PageHeader
        title={wording.sections.news_title}
        subtitle={wording.sections.news_description}
      />
    </>
  );
};

export default NewsPage;
