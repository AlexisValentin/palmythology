import { stringifyMonthCode } from "../../../helpers/dates";
import { wording } from "../../../wording/fr/main";
import PageHeader from "../../generics/PageHeader";
import Quoi2NeufCards from "../../../assets/images/quoi_2_neuf/december_2022_cards.png";
import Quoi2NeufArticles from "../../../assets/images/quoi_2_neuf/december_2022_articles.png";
import { COLUMNS_NUMBER, GRID } from "../../../types/styles/grid";

const Quoi2NeufPage = (): JSX.Element => {
  const date = new Date();
  const month = date.getMonth();
  const parsedDate = `${stringifyMonthCode(month)} ${date.getFullYear()}`;

  return (
    <>
      <PageHeader
        text={`${wording.articles.quoi_2_neuf_title} - ${parsedDate}`}
      />
      <div className={`${GRID} grid-cols-${COLUMNS_NUMBER.TWO}`}>
        <img src={Quoi2NeufCards} alt={`${parsedDate} cards`} />
        <img src={Quoi2NeufArticles} alt={`${parsedDate} cards`} />
      </div>
    </>
  );
};

export default Quoi2NeufPage;
