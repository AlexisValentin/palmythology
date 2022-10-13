import { BaseSyntheticEvent, FunctionComponent, useState } from "react";

/* Components */
import CardList from "./cards/CardList";

/* Types */
import { Pantheons } from "../types/cards/pantheons";
import { Subjects } from "../types/cards/subjects";
import { UNSET_CARD_DETAILS } from "../types/cards/card";
import { BASE_INPUT_NAMES, NONE } from "../types/form";

/* Wording */
import { wording } from "../wording/fr/main";
import { TEXT } from "../types/styles/colors";

const Filter: FunctionComponent = () => {
  const [searchCriterias, setSearchCriterias] = useState(UNSET_CARD_DETAILS);
  const selectNames = {
    name: BASE_INPUT_NAMES.NAME,
    pantheon: BASE_INPUT_NAMES.PANTHEON,
    pantheonUnset: `${BASE_INPUT_NAMES.PANTHEON}_${NONE}`,
    subject: BASE_INPUT_NAMES.SUBJECT,
    subjectUnset: `${BASE_INPUT_NAMES.SUBJECT}_${NONE}`,
  };

  const updateFromForm = (event: BaseSyntheticEvent): void => {
    const input = event.target;
    setSearchCriterias({
      ...searchCriterias,
      [input.name]: input.value,
    });
  };

  return (
    <div className="grid justify-items-center">
      <h1>{wording.sections.research_title}</h1>
      <div className="shadow-lg">
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            {wording.filter.name}
          </span>
          <input
            name={selectNames.name}
            type={TEXT}
            value={searchCriterias.name}
            onChange={updateFromForm}
            autoComplete="off"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            {wording.filter.pantheon}
          </span>
          <select
            name={selectNames.pantheon}
            value={searchCriterias.pantheon}
            onChange={updateFromForm}
          >
            {Object.values(Pantheons).map((pantheon, id) => {
              return (
                <option key={selectNames.pantheon + "_" + id}>
                  {pantheon}
                </option>
              );
            })}
          </select>
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            {wording.filter.subject}
          </span>
          <select
            name={selectNames.subject}
            value={searchCriterias.subject}
            onChange={updateFromForm}
          >
            {Object.values(Subjects).map((subject, id) => {
              return (
                <option key={selectNames.subject + "_" + id}>{subject}</option>
              );
            })}
          </select>
        </label>
      </div>
      <CardList {...searchCriterias}></CardList>
    </div>
  );
};

export default Filter;
