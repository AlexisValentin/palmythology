import { FunctionComponent, useEffect, useState } from "react";
import { getPantheonStyle } from "../../helpers/styles";
import { filterCards } from "../../modules/searchEngine";
import { Card, ResearchCriterias } from "../../types/cards/card";
import { PantheonLabel } from "../../types/cards/pantheons";
import { BACKGROUND, TEXT } from "../../types/styles/colors";
import { wording } from "../../wording/fr/main";
import {
  CardListTableContainerStyled,
  CardListTableStyled,
} from "./CardList.styled";

const CardList: FunctionComponent<ResearchCriterias> = ({
  pantheon,
  subject,
}) => {
  const [searchCriterias, setSearchCriterias] = useState<ResearchCriterias>();
  const [searchResults, setSearchResults] = useState<Card[]>([]);

  useEffect(() => {
    setSearchCriterias({ pantheon, subject });
  }, [pantheon, subject]);

  useEffect(() => {
    setSearchResults(filterCards(searchCriterias));
  }, [searchCriterias]);

  const dynamiseColor = (pantheon: PantheonLabel): string => {
    const { backgroundColor, textColor } = getPantheonStyle(pantheon);

    return `${BACKGROUND}-${backgroundColor} ${TEXT}-${textColor}`;
  };

  return (
    <CardListTableContainerStyled className="my-10">
      <CardListTableStyled className="shadow-lg">
        <thead>
          <tr className="bg-gray-900 text-gray-100">
            <th className="px-5">{wording.filter.name}</th>
            <th className="px-5">{wording.filter.pantheon}</th>
            <th className="px-5">{wording.filter.subject}</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.length > 0 ? (
            searchResults.map((card, id) => {
              return (
                <tr className={dynamiseColor(card.details.pantheon)} key={id}>
                  <td className="px-5">{card.details.name}</td>
                  <td className="px-5">{card.details.pantheon}</td>
                  <td className="px-5">{card.details.subject}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>{wording.filter.no_result}</td>
            </tr>
          )}
        </tbody>
      </CardListTableStyled>
    </CardListTableContainerStyled>
  );
};

export default CardList;
