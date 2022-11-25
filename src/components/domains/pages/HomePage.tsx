import { wording } from "../../../wording/fr/main";
import PageHeader from "../../generics/PageHeader";
import HomePageSection from "../navigation/HomePageSection";

const HomePage = (): JSX.Element => {
  return (
    <>
      <PageHeader text={wording.sections.research_title} />
      <HomePageSection />
    </>
  );
};

export default HomePage;
