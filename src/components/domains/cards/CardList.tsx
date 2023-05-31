import { useCallback, useEffect, useReducer } from "react";
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
import {
  CARD_LIST_ACTIONS,
  CardListState,
  cardListReducer,
} from "../../../reducers/searchReducers";
import {
  SESSION_STORAGE_KEYS,
  getFromSessionStorage,
} from "../../../helpers/storage";
import { HALF_SECOND_IN_MS } from "../../../types/consts/time";

const initialState: CardListState = {
  searchCriterias: undefined,
  searchResults: [],
};

const CardList = ({ pantheon, subject }: ResearchCriterias): JSX.Element => {
  const [state, dispatch] = useReducer(cardListReducer, initialState);

  useEffect(() => {
    const pantheonSearchCriterias = getFromSessionStorage(
      SESSION_STORAGE_KEYS.SEARCH_CRITERIAS_PANTHEON
    );
    const subjectSearchCriterias = getFromSessionStorage(
      SESSION_STORAGE_KEYS.SEARCH_CRITERIAS_SUBJECT
    );

    if (pantheonSearchCriterias || subjectSearchCriterias) {
      dispatch({
        type: CARD_LIST_ACTIONS.SET_SEARCH_CRITERIAS,
        payload: {
          pantheon: pantheonSearchCriterias ?? "",
          subject: subjectSearchCriterias ?? "",
        },
      });

      setTimeout(
        () =>
          filterCards({
            pantheon: pantheonSearchCriterias ?? "",
            subject: subjectSearchCriterias ?? "",
          }).then((card) => {
            dispatch({
              type: CARD_LIST_ACTIONS.SET_SEARCH_RESULTS,
              payload: card,
            });
          }),
        HALF_SECOND_IN_MS
      );
    }
  }, []);

  useEffect(() => {
    dispatch({
      type: CARD_LIST_ACTIONS.SET_SEARCH_CRITERIAS,
      payload: { pantheon, subject },
    });
  }, [pantheon, subject]);

  useEffect(() => {
    filterCards(state.searchCriterias).then((card) => {
      dispatch({
        type: CARD_LIST_ACTIONS.SET_SEARCH_RESULTS,
        payload: card,
      });
    });
  }, [state.searchCriterias]);

  const dynamiseColor = useCallback(
    (pantheon: PantheonLabel): string | undefined => {
      const pantheonValue = getPantheonValueFromLabel(pantheon);

      if (pantheonValue === null) return undefined;

      const { backgroundColor, textColor } = getPantheonStyle(pantheonValue);

      return `${BACKGROUND}-${backgroundColor} ${TEXT}-${textColor}`;
    },
    []
  );

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
          {state.searchResults.map(
            (card: TranslatedCardDetails, idx: number) => {
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
                          getPantheonValueFromLabel(card.pantheon) ?? ""
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
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CardList;
