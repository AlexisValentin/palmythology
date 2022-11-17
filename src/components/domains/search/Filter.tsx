import { useState } from "react";
import Select from "react-select";
import { allPantheon } from "../../../types/cards/pantheons";
import { allSubject } from "../../../types/cards/subjects";
import { BASE_INPUT_NAMES } from "../../../types/form";
import { wording } from "../../../wording/fr/main";
import CardList from "./CardList";
import { FilterSelectContainerStyled } from "./Filter.styled";

type FilterSelectOption = { value: string; label: string };
export type ReactSelectValue = FilterSelectOption | null;

const Filter = (): JSX.Element => {
  const [pantheonSearchCriterias, setPantheonSearchCriterias] =
    useState<string>();
  const [subjectSearchCriterias, setSubjectSearchCriterias] =
    useState<string>();
  const selectNames = {
    pantheon: BASE_INPUT_NAMES.PANTHEON,
    subject: BASE_INPUT_NAMES.SUBJECT,
  };

  const onPantheonSelectChange = (selected?: ReactSelectValue) => {
    setPantheonSearchCriterias(selected?.label);
  };

  const onSubjectSelectChange = (selected?: ReactSelectValue) => {
    setSubjectSearchCriterias(selected?.label);
  };

  return (
    <div className="grid justify-items-center">
      <h1>{wording.sections.research_title}</h1>
      <FilterSelectContainerStyled className="shadow-lg">
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            {wording.filter.pantheon}
          </span>
          <Select
            name={selectNames.pantheon}
            options={allPantheon}
            onChange={onPantheonSelectChange}
            isClearable
            isSearchable
            autoFocus
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            {wording.filter.subject}
          </span>
          <Select
            name={selectNames.subject}
            options={allSubject}
            onChange={onSubjectSelectChange}
            isClearable
            isSearchable
          />
        </label>
      </FilterSelectContainerStyled>
      <CardList
        pantheon={pantheonSearchCriterias}
        subject={subjectSearchCriterias}
      />
    </div>
  );
};

export default Filter;
