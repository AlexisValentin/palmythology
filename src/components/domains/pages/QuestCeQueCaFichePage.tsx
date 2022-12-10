import { QU_EST_CE_QUE_CA_FICHE_ITEMS } from "../../../types/consts/questCeQueCaFiche";
import { wording } from "../../../wording/fr/main";
import PageHeader from "../../generics/PageHeader";
import PageSection from "../../generics/PageSection";

const QuestCeQueCaFichePage = (): JSX.Element => (
  <>
    <PageHeader
      title={wording.folders.qu_est_ce_que_ca_fiche_title}
      subtitle={wording.folders.qu_est_ce_que_ca_fiche_description}
    />
    {QU_EST_CE_QUE_CA_FICHE_ITEMS.map((item, idx) => {
      const { name, description, url, gradient, iconUrl } = item;

      return (
        <PageSection
          key={idx}
          name={name}
          description={description}
          url={url}
          iconUrl={iconUrl}
          gradient={gradient}
        />
      );
    })}
  </>
);

export default QuestCeQueCaFichePage;
