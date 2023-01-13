import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setCardRouteParameters } from "../../../helpers/routes";
import { getPantheonStyle } from "../../../helpers/styles";
import { filterCards } from "../../../modules/searchEngine";
import { CardDetails, ResearchCriterias } from "../../../types/cards/card";
import { PantheonLabel } from "../../../types/cards/pantheons";
import { BACKGROUND, TEXT } from "../../../types/styles/colors";
import { wording } from "../../../wording/fr/main";
import {
  CardListDetailsContainerStyled,
  CardListDetailsIconStyled,
  CardListTableContainerStyled,
  CardListTableStyled,
} from "./CardList.styled";
import MagnifyinglassIcon from "../../../assets/icons/magnifying_glass.svg";
import ForbiddenIcon from "../../../assets/icons/forbidden.svg";

const CardList = ({ pantheon, subject }: ResearchCriterias): JSX.Element => {
  const [searchCriterias, setSearchCriterias] = useState<ResearchCriterias>();
  const [searchResults, setSearchResults] = useState<CardDetails[]>([]);

  useEffect(() => {
    setSearchCriterias({ pantheon, subject });
  }, [pantheon, subject]);

  useEffect(() => {
    filterCards(searchCriterias).then((card) => {
      setSearchResults(() => card);
    });
  }, [searchCriterias]);

  const dynamiseColor = (pantheon: PantheonLabel): string => {
    const { backgroundColor, textColor } = getPantheonStyle(pantheon);

    return `${BACKGROUND}-${backgroundColor} ${TEXT}-${textColor} p-2`;
  };

  return (
    <CardListTableContainerStyled className="my-6">
      <CardListTableStyled className="shadow-lg mt-6">
        <thead>
          <tr className="bg-gray-900 text-gray-100">
            <th className="px-5">{wording.filter.name}</th>
            <th className="px-5">{wording.filter.pantheon}</th>
            <th className="px-5">{wording.filter.subject}</th>
            <th className="px-5">{wording.filter.details}</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((card, idx) => {
            if (!card) return <tr key={idx}></tr>;

            return (
              <tr className={dynamiseColor(card.pantheon)} key={idx}>
                <td className="px-5">{card.name}</td>
                <td className="px-5">{card.pantheon}</td>
                <td className="px-5">{card.subject}</td>
                <CardListDetailsContainerStyled className="pt-1">
                  {card.available ? (
                    <Link to={setCardRouteParameters(card.name, card.pantheon)}>
                      <CardListDetailsIconStyled
                        src={MagnifyinglassIcon}
                        alt={`Plus de détails sur la fiche ${card.name}`}
                      />
                    </Link>
                  ) : (
                    <CardListDetailsIconStyled
                      src={ForbiddenIcon}
                      alt={`La fiche ${card.name} n'est pas encore disponible`}
                    />
                  )}
                </CardListDetailsContainerStyled>
              </tr>
            );
          })}
        </tbody>
      </CardListTableStyled>
    </CardListTableContainerStyled>
  );
};

export default CardList;
