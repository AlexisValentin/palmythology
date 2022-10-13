import { FunctionComponent, useEffect, useState } from "react";
import { useLocation } from "react-router";

/* Types */
import { Card } from "../../types/cards/card";
import { Pantheons } from "../../types/cards/pantheons";
import { BASE_INPUT_NAMES, SPACED_STRING } from "../../types/form";
import { selectBackgroundColor, selectTextColor } from "../../types/store/styles/styles.selectors";
import { TEXT } from "../../types/styles/colors";
import { GRID } from "../../types/styles/grid";
import { SIZES } from "../../types/styles/sizes";
import { wording } from "../../wording/fr/main";

const CardInfo: FunctionComponent<Card> = () => {
  const location = useLocation();
  const { search } = location;
  const [cardInfo, setCardInfo] = useState<any>({});
  const textSizes = {
    headerOne: `${TEXT}-${SIZES.FIVE_XL}`,
    headerTwo: `${TEXT}-${SIZES.TWO_XL}`,
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    setCardInfo({
      name: searchParams.get(BASE_INPUT_NAMES.NAME),
      pantheon: searchParams.get(BASE_INPUT_NAMES.PANTHEON),
    });
  }, [search]);

  const getCardDescription = () => {
    return wording.global.suspension_points;
  };

  const colorizeBackground = (pantheon: Pantheons): string => {
    const classNames = ["rounded-lg", "w-1/2", GRID, "justify-items-center", selectBackgroundColor(pantheon), selectTextColor(pantheon)];

    return classNames.join(SPACED_STRING);
  };

  return (
    <>
      {cardInfo && (
        <div className="grid justify-items-center">
          <h1 className={textSizes.headerOne}>{cardInfo.name}</h1>
          <h2 className={textSizes.headerTwo}>{cardInfo.pantheon}</h2>
          <div className={colorizeBackground(cardInfo.pantheon)}>
            {getCardDescription()}
          </div>
        </div>
      )}
    </>
  );
};

export default CardInfo;
