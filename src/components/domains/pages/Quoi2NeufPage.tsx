import { stringifyMonthCode } from "../../../helpers/dates";
import { getQuoi2NeufItems } from "../../../types/consts/quoi2Neuf";
import { wording } from "../../../wording/fr/main";
import PageHeader from "../../generics/PageHeader";
import PageSquare from "../../generics/PageSquare";
import { Quoi2NeufItemsContainerStyled } from "./Quoi2NeufPage.styled";

const Quoi2NeufPage = (): JSX.Element => {
  const date = new Date();
  const month = date.getMonth();
  const parsedDate = `${stringifyMonthCode(month)} ${date.getFullYear()}`;
  const quoi2NeufItems = getQuoi2NeufItems();

  return (
    <>
      <PageHeader
        title={`${wording.folders.quoi_2_neuf_title}`}
        subtitle={`${parsedDate}`}
      />
      <Quoi2NeufItemsContainerStyled>
        {quoi2NeufItems.map((item, idx) => (
          <PageSquare
            key={idx}
            name={item.name}
            description={item.description}
            iconUrl={item.iconUrl}
          />
        ))}
      </Quoi2NeufItemsContainerStyled>
    </>
  );
};

export default Quoi2NeufPage;
