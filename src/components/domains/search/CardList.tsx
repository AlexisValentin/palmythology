import { useEffect, useState } from "react";
import { getPantheonStyle } from "../../../helpers/styles";
import { filterCards } from "../../../modules/searchEngine";
import { Card, ResearchCriterias } from "../../../types/cards/card";
import { PantheonLabel } from "../../../types/cards/pantheons";
import { BACKGROUND, TEXT } from "../../../types/styles/colors";
import { wording } from "../../../wording/fr/main";
import {
  CardListResultCountSectionStyled,
  CardListTableContainerStyled,
  CardListTableStyled,
} from "./CardList.styled";

const CardList = ({ pantheon, subject }: ResearchCriterias): JSX.Element => {
  const [searchCriterias, setSearchCriterias] = useState<ResearchCriterias>();
  const [searchResults, setSearchResults] = useState<Card[]>([]);
  const [totalResults, setTotalResults] = useState<number>(0);

  useEffect(() => {
    setSearchCriterias({ pantheon, subject });
  }, [pantheon, subject]);

  useEffect(() => {
    setSearchResults(filterCards(searchCriterias));
  }, [searchCriterias]);

  useEffect(() => {
    setTotalResults(searchResults.length);
  }, [searchResults]);

  const getResultsWording = (): string => {
    const { no_result, found_results_plural, found_results_singular } =
      wording.filter;

    if (totalResults === 0) return no_result;
    if (totalResults === 1) return `${totalResults} ${found_results_singular}`;

    return `${totalResults} ${found_results_plural}`;
  };

  const dynamiseColor = (pantheon: PantheonLabel): string => {
    const { backgroundColor, textColor } = getPantheonStyle(pantheon);

    return `${BACKGROUND}-${backgroundColor} ${TEXT}-${textColor}`;
  };

  return (
    <CardListTableContainerStyled className="my-10">
      <CardListResultCountSectionStyled>
        {getResultsWording()}
      </CardListResultCountSectionStyled>
      <CardListTableStyled className="shadow-lg">
        <thead>
          <tr className="bg-gray-900 text-gray-100">
            <th className="px-5">{wording.filter.name}</th>
            <th className="px-5">{wording.filter.pantheon}</th>
            <th className="px-5">{wording.filter.subject}</th>
          </tr>
        </thead>
        <tbody>
          {totalResults > 0 ? (
            searchResults.map((card, idx) => {
              return (
                <tr className={dynamiseColor(card.details.pantheon)} key={idx}>
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
