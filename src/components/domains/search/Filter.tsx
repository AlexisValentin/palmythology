"use client";

import { useCallback, useState } from "react";
import { BASE_INPUT_NAMES } from "../../../utils/form.constants";
import SearchResults from "./SearchResults";
import SelectFilter from "./SelectFilter";
import { ALL_PANTHEON } from "../../../utils/cards/pantheons.constants";
import { ALL_SUBJECT } from "../../../utils/cards/subjects.constants";

const Filter = () => {
	const [pantheonSearchCriteria, setPantheonSearchCriteria] = useState("");
	const [subjectSearchCriteria, setSubjectSearchCriteria] = useState("");

	const selectNames = {
		pantheon: BASE_INPUT_NAMES.PANTHEON,
		subject: BASE_INPUT_NAMES.SUBJECT,
	};

	const onPantheonSelectChange = useCallback((selected: string) => {
		setPantheonSearchCriteria(selected);
	}, []);

	const onSubjectSelectChange = useCallback((selected: string) => {
		setSubjectSearchCriteria(selected);
	}, []);

	return (
		<div className="flex flex-col items-center justify-center mt-12">
			<form className="flex items-center justify-center">
				<div className="mr-6 w-40">
					<SelectFilter
						key="pantheon_select"
						selectLabel="Panthéon"
						selectName={selectNames.pantheon}
						onChange={onPantheonSelectChange}
						options={ALL_PANTHEON}
					/>
				</div>
				<div className="ml-6 w-40">
					<SelectFilter
						key="subject_select"
						selectLabel="Sujet"
						selectName={selectNames.subject}
						onChange={onSubjectSelectChange}
						options={ALL_SUBJECT}
					/>
				</div>
			</form>
			<SearchResults
				pantheon={pantheonSearchCriteria}
				subject={subjectSearchCriteria}
			/>
		</div>
	);
};

export default Filter;
