import { wording } from "../../../wording/fr/main";
import PageHeader from "../../generics/PageHeader";
import Filter from "../search/Filter";

const SearchPage = (): JSX.Element => {
  return (
    <>
      <PageHeader text={wording.sections.research_title} />
      <Filter />
    </>
  );
};

export default SearchPage;
