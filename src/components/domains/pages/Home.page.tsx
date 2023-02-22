import { Helmet } from "react-helmet-async";
import { ROUTES } from "../../../types/consts/routes";
import { wording } from "../../../wording/fr/main";
import PageHeader from "../../generics/PageHeader";
import PageSection from "../../generics/PageSection";

const HomePage = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Palmythology | Page d'accueil</title>
      </Helmet>
      <PageHeader
        title={wording.sections.home_title}
        subtitle={wording.sections.home_description}
      />
      <div className="flex flex-row justify-center flex-wrap mx-8 sm:block sm:mx-0">
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
      </div>
    </>
  );
};

export default HomePage;
