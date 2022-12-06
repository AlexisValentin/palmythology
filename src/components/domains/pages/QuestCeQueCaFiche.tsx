import { wording } from "../../../wording/fr/main";
import PageHeader from "../../generics/PageHeader";

const QuestCeQueCaFichePage = (): JSX.Element => {
  return (
    <PageHeader
      title={wording.articles.qu_est_ce_que_ca_fiche_title}
      subtitle={wording.articles.qu_est_ce_que_ca_fiche_description}
    />
  );
};

export default QuestCeQueCaFichePage;
