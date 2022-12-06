import { stringifyMonthCode } from "../../../helpers/dates";
import { wording } from "../../../wording/fr/main";
import PageHeader from "../../generics/PageHeader";

const Quoi2NeufPage = (): JSX.Element => {
  const date = new Date();
  const month = date.getMonth();
  const parsedDate = `${stringifyMonthCode(month)} ${date.getFullYear()}`;

  return (
    <>
      <PageHeader
        title={`${wording.articles.quoi_2_neuf_title}`}
        subtitle={`${parsedDate}`}
      />
    </>
  );
};

export default Quoi2NeufPage;
