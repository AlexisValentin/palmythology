import { useState } from "react";
import { allPantheon } from "../../../types/cards/pantheons";
import { allSubject } from "../../../types/cards/subjects";
import { BASE_INPUT_NAMES } from "../../../types/consts/form";
import { wording } from "../../../wording/fr/main";
import CardList from "./CardList";
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
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="m-2 w-40">
          <FilterSelect
            selectLabel={wording.filter.pantheon}
            selectName={selectNames.pantheon}
            onChange={onPantheonSelectChange}
            options={allPantheon}
          />
        </div>
        <div className="m-2 w-40">
          <FilterSelect
            selectLabel={wording.filter.subject}
            selectName={selectNames.subject}
            onChange={onSubjectSelectChange}
            options={allSubject}
          />
        </div>
      </div>
      <CardList
        pantheon={pantheonSearchCriterias}
        subject={subjectSearchCriterias}
      />
    </div>
  );
};

export default Filter;
