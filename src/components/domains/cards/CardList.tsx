import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setCardRouteParameters } from "../../../helpers/routes";
import { filterCards } from "../../../modules/searchEngine";
import {
  ResearchCriterias,
  TranslatedCardDetails,
} from "../../../types/cards/card";
import { PantheonLabel } from "../../../types/cards/pantheons";
import { BACKGROUND, TEXT } from "../../../types/styles/colors";
import { wording } from "../../../wording/fr/main";
import MoreIcon from "../../../assets/icons/more.svg";
import ForbiddenIcon from "../../../assets/icons/forbidden.svg";
import { getPantheonStyle } from "../../../helpers/colors";
import { getPantheonValueFromLabel } from "../../../helpers/dictionary";

const CardList = ({ pantheon, subject }: ResearchCriterias): JSX.Element => {
  const [searchCriterias, setSearchCriterias] = useState<ResearchCriterias>();
  const [searchResults, setSearchResults] = useState<TranslatedCardDetails[]>(
    []
  );

  useEffect(() => {
    setSearchCriterias({ pantheon, subject });
  }, [pantheon, subject]);

  useEffect(() => {
    filterCards(searchCriterias).then((card) => {
      setSearchResults(() => card);
    });
  }, [searchCriterias]);

  const dynamiseColor = (pantheon: PantheonLabel): string => {
    const { backgroundColor, textColor } = getPantheonStyle(
      getPantheonValueFromLabel(pantheon)
    );

    return `${BACKGROUND}-${backgroundColor} ${TEXT}-${textColor}`;
  };

  return (
    <div className="text-center my-6">
      <table className="shadow-lg mt-6 max-w-xs">
        <thead>
          <tr className="bg-gray-900 text-gray-100">
            <th className="px-4">{wording.filter.name}</th>
            <th className="px-4">{wording.filter.pantheon}</th>
            <th className="px-4 hidden sm:block">{wording.filter.subject}</th>
            <th className="px-4">{wording.filter.details}</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((card, idx) => {
            if (!card) return <tr key={idx}></tr>;

            return (
              <tr className={`${dynamiseColor(card.pantheon)}`} key={idx}>
                <td className="px-4 py-2">{card.name}</td>
                <td className="px-4 py-2">{card.pantheon}</td>
                <td className="px-4 py-2 hidden sm:block">{card.subject}</td>
                <td className="py-2">
                  {card.available ? (
                    <Link
                      className="flex justify-center"
                      to={setCardRouteParameters(
                        card.name,
                        getPantheonValueFromLabel(card.pantheon)
                      )}
                    >
                      <img
                        className={`${
                          card.pantheon === PantheonLabel.JAPANESE &&
                          `filter-dark-red`
                        } w-6`}
                        src={MoreIcon}
                        alt={`Plus de détails sur la fiche ${card.name}`}
                      />
                    </Link>
                  ) : (
                    <div className="flex justify-center">
                      <img
                        className={`${
                          card.pantheon === PantheonLabel.JAPANESE &&
                          `filter-dark-red`
                        } w-6`}
                        src={ForbiddenIcon}
                        alt={`La fiche ${card.name} n'est pas encore disponible`}
                      />
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CardList;
