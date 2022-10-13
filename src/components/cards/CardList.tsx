import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* Modules */
import { filterCards } from "../../modules/searchEngine";

/* Types */
import {
  Card,
  ResearchCriterias,
  UNSET_CARD_DETAILS,
} from "../../types/cards/card";
import { ROUTES } from "../../types/routes";

/* Wording */
import { wording } from "../../wording/fr/main";
import { selectBackgroundColor, selectTextColor } from "../../types/store/styles/styles.selectors";
import { Pantheons } from "../../types/cards/pantheons";
import { SPACED_STRING } from "../../types/form";

const CardList: FunctionComponent<ResearchCriterias> = (
  userResearch: ResearchCriterias,
) => {
  const [searchCriterias, setSearchCriterias] =
    useState<ResearchCriterias>(UNSET_CARD_DETAILS);
  const [searchResults, setSearchResults] = useState<Card[]>([]);

  useEffect(() => {
    const clone = userResearch;
    setSearchCriterias(clone);
  }, [userResearch]);

  useEffect(() => {
    setSearchResults(filterCards(searchCriterias));
  }, [searchCriterias]);

  const colorizeRow = (mythology: Pantheons) => [selectBackgroundColor(mythology), selectTextColor(mythology)].join(SPACED_STRING)

  return (
    <div className="my-10">
      <table className="shadow-lg">
        <thead>
          <tr className="bg-gray-900 text-gray-100">
            <th className="px-5">{wording.filter.name}</th>
            <th className="px-5">{wording.filter.pantheon}</th>
            <th className="px-5">{wording.filter.subject}</th>
            <th className="px-5">{wording.filter.details}</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.length > 0 ? (
            searchResults.map((card, id) => {
              return (
                <tr className={colorizeRow(card.details.pantheon)} key={id}>
                  <td className="px-5">{card.details.name}</td>
                  <td className="px-5">{card.details.pantheon}</td>
                  <td className="px-5">{card.details.subject}</td>
                  <td className="px-5">
                    <Link
                      to={{
                        pathname: ROUTES.DETAILS,
                        search: `?name=${card.details.name}&pantheon=${card.details.pantheon}`,
                      }}
                    >
                      {wording.filter.more}
                    </Link>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>{wording.filter.no_result}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CardList;
