"use client";

import { parseAsString, useQueryStates } from "nuqs";
import { ALL_PANTHEON } from "../../../utils/cards/pantheons.constants";
import { ALL_SUBJECT } from "../../../utils/cards/subjects.constants";
import { BASE_INPUT_NAMES } from "../../../utils/form.constants";
import SearchResults from "./SearchResults";
import SelectFilter from "./SelectFilter";

const Filter = () => {
	const [filters, setFilters] = useQueryStates(
		{
			pantheon: parseAsString.withDefault(""),
			subject: parseAsString.withDefault(""),
		},
		{ history: "push" },
	);

	const selectNames = {
		pantheon: BASE_INPUT_NAMES.PANTHEON,
		subject: BASE_INPUT_NAMES.SUBJECT,
	};

	return (
		<div className="flex flex-col items-center justify-center mt-12">
			<form className="flex items-center justify-center">
				<div className="mr-6 w-40">
					<SelectFilter
						key="pantheon_select"
						selectLabel="Panthéon"
						selectName={selectNames.pantheon}
						value={filters.pantheon}
						onChange={(selected) => setFilters({ pantheon: selected })}
						options={ALL_PANTHEON}
					/>
				</div>
				<div className="ml-6 w-40">
					<SelectFilter
						key="subject_select"
						selectLabel="Sujet"
						selectName={selectNames.subject}
						value={filters.subject}
						onChange={(selected) => setFilters({ subject: selected })}
						options={ALL_SUBJECT}
					/>
				</div>
			</form>
			<SearchResults pantheon={filters.pantheon} subject={filters.subject} />
		</div>
	);
};

export default Filter;
