import { wording } from "../../../wording/fr/main";
import PageHeader from "../../generics/PageHeader";

const AboutPage = (): JSX.Element => {
  return (
    <>
      <PageHeader title={wording.sections.about_title} />
    </>
  );
};

export default AboutPage;
