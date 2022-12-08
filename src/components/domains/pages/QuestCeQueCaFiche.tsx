import { wording } from "../../../wording/fr/main";
import PageHeader from "../../generics/PageHeader";

const QuestCeQueCaFichePage = (): JSX.Element => (
  <PageHeader
    title={wording.folders.qu_est_ce_que_ca_fiche_title}
    subtitle={wording.folders.qu_est_ce_que_ca_fiche_description}
  />
);

export default QuestCeQueCaFichePage;
