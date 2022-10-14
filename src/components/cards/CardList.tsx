import { FunctionComponent, useEffect, useState } from "react";

/* Modules */
import { filterCards } from "../../modules/searchEngine";

/* Types */
import { Card, ResearchCriterias } from "../../types/cards/card";

/* Wording */
import { wording } from "../../wording/fr/main";

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

  return (
    <div className="my-10">
      <table className="shadow-lg">
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
                <tr key={id}>
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
      </table>
    </div>
  );
};

export default CardList;
