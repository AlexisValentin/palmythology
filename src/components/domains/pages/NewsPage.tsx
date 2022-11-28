import { wording } from "../../../wording/fr/main";
import PageHeader from "../../generics/PageHeader";

const NewsPage = (): JSX.Element => {
  return (
    <>
      <PageHeader text={wording.sections.news_title} />
    </>
  );
};

export default NewsPage;
