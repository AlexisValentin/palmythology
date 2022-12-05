import { ROUTES } from "../../../types/consts/routes";
import { wording } from "../../../wording/fr/main";
import PageHeader from "../../generics/PageHeader";
import PageSection from "../../generics/PageSection";

const HomePage = (): JSX.Element => {
  return (
    <>
      <PageHeader title={wording.sections.home_title} />
      {ROUTES.map((route, idx) => {
        const { name, url, description, gradient, iconUrl } = route;
        const { home_title } = wording.sections;

        if (name === home_title) {
          return null;
        }

        return (
          <PageSection
            key={idx}
            name={name}
            url={url}
            description={description}
            gradient={gradient}
            iconUrl={iconUrl}
          />
        );
      })}
    </>
  );
};

export default HomePage;
