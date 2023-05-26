import { useCallback, useEffect, useReducer } from "react";
import { ALL_PANTHEON, PantheonValue } from "../../../types/cards/pantheons";
import { SubjectValue, ALL_SUBJECT } from "../../../types/cards/subjects";
import { BASE_INPUT_NAMES } from "../../../types/consts/form";
import { wording } from "../../../wording/fr/main";
import CardList from "./CardList";
import FilterSelect from "./FilterSelect";
import {
  SESSION_STORAGE_KEYS,
  getFromSessionStorage,
  setInSessionStorage,
} from "../../../helpers/storage";
import {
  getPantheonLabelFromValue,
  getSubjectLabelFromValue,
} from "../../../helpers/dictionary";
import {
  FILTER_ACTIONS,
  FilterState,
  filterReducer,
} from "../../../reducers/searchReducers";

interface FilterSelectProps {
  value: string;
  label: string;
}

export type ReactSelectValue = FilterSelectProps | null;
const initialState: FilterState = {
  pantheonSearchCriterias: "",
  subjectSearchCriterias: "",
};

const Filter = (): JSX.Element => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const selectNames = {
    pantheon: BASE_INPUT_NAMES.PANTHEON,
    subject: BASE_INPUT_NAMES.SUBJECT,
  };

  const getSelectDefaultValue = useCallback(
    (sessionStorageKey: SESSION_STORAGE_KEYS) => {
      const sessionStorageData = getFromSessionStorage(sessionStorageKey) as
        | PantheonValue
        | SubjectValue;

      const selectLabel =
        sessionStorageKey === SESSION_STORAGE_KEYS.SEARCH_CRITERIAS_PANTHEON
          ? getPantheonLabelFromValue(sessionStorageData as PantheonValue)
          : getSubjectLabelFromValue(sessionStorageData as SubjectValue);

      const selectValue = getFromSessionStorage(sessionStorageKey) ?? undefined;

      return {
        label: selectLabel ?? "",
        value: selectValue ?? "",
      };
    },
    []
  );

  useEffect(() => {
    const selectedPantheonDefaultValue = getSelectDefaultValue(
      SESSION_STORAGE_KEYS.SEARCH_CRITERIAS_PANTHEON
    );
    const selectedSubjectDefaultValue = getSelectDefaultValue(
      SESSION_STORAGE_KEYS.SEARCH_CRITERIAS_SUBJECT
    );

    dispatch({
      type: FILTER_ACTIONS.SET_PANTHEON_SEARCH_CRITERIAS,
      payload: selectedPantheonDefaultValue?.value,
    });
    dispatch({
      type: FILTER_ACTIONS.SET_SUBJECT_SEARCH_CRITERIAS,
      payload: selectedSubjectDefaultValue?.value,
    });
  }, [getSelectDefaultValue]);

  const onPantheonSelectChange = useCallback((selected?: ReactSelectValue) => {
    dispatch({
      type: FILTER_ACTIONS.SET_PANTHEON_SEARCH_CRITERIAS,
      payload: selected?.value,
    });
    setInSessionStorage(
      SESSION_STORAGE_KEYS.SEARCH_CRITERIAS_PANTHEON,
      selected?.value
    );
  }, []);

  const onSubjectSelectChange = useCallback((selected?: ReactSelectValue) => {
    dispatch({
      type: FILTER_ACTIONS.SET_SUBJECT_SEARCH_CRITERIAS,
      payload: selected?.value,
    });
    setInSessionStorage(
      SESSION_STORAGE_KEYS.SEARCH_CRITERIAS_SUBJECT,
      selected?.value
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="m-2 w-40">
          <FilterSelect
            key="pantheon_select"
            defaultValue={getSelectDefaultValue(
              SESSION_STORAGE_KEYS.SEARCH_CRITERIAS_PANTHEON
            )}
            selectLabel={wording.filter.pantheon}
            selectName={selectNames.pantheon}
            onChange={onPantheonSelectChange}
            options={ALL_PANTHEON}
          />
        </div>
        <div className="m-2 w-40">
          <FilterSelect
            key="subject_select"
            defaultValue={getSelectDefaultValue(
              SESSION_STORAGE_KEYS.SEARCH_CRITERIAS_SUBJECT
            )}
            selectLabel={wording.filter.subject}
            selectName={selectNames.subject}
            onChange={onSubjectSelectChange}
            options={ALL_SUBJECT}
          />
        </div>
      </div>
      <CardList
        pantheon={state.pantheonSearchCriterias}
        subject={state.subjectSearchCriterias}
      />
    </div>
  );
};

export default Filter;
