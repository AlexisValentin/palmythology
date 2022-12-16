import Select from "react-select";
import { PantheonSelectType } from "../../../types/cards/pantheons";
import { SubjectSelectType } from "../../../types/cards/subjects";
import { ReactSelectValue } from "./Filter";

interface FilterSelectProps {
  selectLabel: string;
  selectName: string;
  onChange: (selected?: ReactSelectValue) => void;
  options: readonly PantheonSelectType[] | SubjectSelectType[];
}

const FilterSelect: React.FC<FilterSelectProps> = ({
  selectLabel,
  selectName,
  onChange,
  options,
}): JSX.Element => {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-slate-700">
        {selectLabel}
      </span>
      <Select
        name={selectName}
        // @ts-ignore
        options={options}
        onChange={onChange}
        isClearable
        isSearchable
        autoFocus
      />
    </label>
  );
};

export default FilterSelect;
