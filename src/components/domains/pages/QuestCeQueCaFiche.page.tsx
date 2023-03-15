import { useEffect, useState } from "react";
import { setCardRouteParameters } from "../../../helpers/routes";
import { fetchQuEstCeQueCaFicheStories } from "../../../helpers/storyblok";
import { QuestCeQueCaFicheItemType } from "../../../types/consts/questCeQueCaFiche";
import { wording } from "../../../wording/fr/main";
import PageHeader from "../../generics/PageHeader";
import PageSection from "../../generics/PageSection";

const QuestCeQueCaFichePage = (): JSX.Element => {
  const [quEstCeQueCaFicheItems, setQuEstCeQueCaFicheItems] = useState<
    QuestCeQueCaFicheItemType[]
  >([]);

  useEffect(() => {
    fetchQuEstCeQueCaFicheStories().then((items) => {
      setQuEstCeQueCaFicheItems(() => items);
    });
  }, []);

  return (
    <>
      <PageHeader
        title={wording.folders.qu_est_ce_que_ca_fiche_title}
        subtitle={wording.folders.qu_est_ce_que_ca_fiche_description}
      />
      <div className="flex flex-row justify-center flex-wrap mx-8 sm:block sm:mx-0">
        {quEstCeQueCaFicheItems.map((item, idx) => {
          if (!item) return <div key={idx} />;

          const { title, summary, icon, pantheon } = item;

          return (
            <PageSection
              key={idx}
              name={title}
              description={summary}
              url={setCardRouteParameters(title, pantheon)}
              iconUrl={icon.filename}
            />
          );
        })}
      </div>
    </>
  );
};

export default QuestCeQueCaFichePage;
