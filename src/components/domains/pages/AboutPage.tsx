import { wording } from "../../../wording/fr/main";
import PageHeader from "../../generics/PageHeader";

const AboutPage = (): JSX.Element => {
  return (
    <>
      <PageHeader text={wording.sections.about_title} />
    </>
  );
};

export default AboutPage;
