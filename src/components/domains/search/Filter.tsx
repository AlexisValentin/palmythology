import { useState } from "react";
import { allPantheon } from "../../../types/cards/pantheons";
import { allSubject } from "../../../types/cards/subjects";
import { BASE_INPUT_NAMES } from "../../../types/form";
import { wording } from "../../../wording/fr/main";
import CardList from "./CardList";
import { FilterSelectContainerStyled } from "./Filter.styled";
import FilterSelect from "./FilterSelect";

interface FilterSelectProps {
  value: string;
  label: string;
}

export type ReactSelectValue = FilterSelectProps | null;

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
      <FilterSelectContainerStyled className="shadow-lg">
        <FilterSelect
          selectLabel={wording.filter.pantheon}
          selectName={selectNames.pantheon}
          onChange={onPantheonSelectChange}
          options={allPantheon}
        />
        <FilterSelect
          selectLabel={wording.filter.subject}
          selectName={selectNames.subject}
          onChange={onSubjectSelectChange}
          options={allSubject}
        />
      </FilterSelectContainerStyled>
      <CardList
        pantheon={pantheonSearchCriterias}
        subject={subjectSearchCriterias}
      />
    </div>
  );
};

export default Filter;
