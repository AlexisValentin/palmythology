"use client";

import { parseAsString, useQueryStates } from "nuqs";
import { ALL_GENRE } from "../../../utils/cards/genres.constants";
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
			genre: parseAsString.withDefault(""),
		},
		{ history: "push" },
	);

	const selectNames = {
		pantheon: BASE_INPUT_NAMES.PANTHEON,
		subject: BASE_INPUT_NAMES.SUBJECT,
		genre: BASE_INPUT_NAMES.GENRE,
	};

	return (
		<div className="flex flex-col items-center justify-center mt-12">
			<form className="flex flex-col md:flex-row items-center justify-center gap-4">
				<div className="w-40">
					<SelectFilter
						key="pantheon_select"
						selectLabel="Panthéon"
						selectName={selectNames.pantheon}
						value={filters.pantheon}
						onChange={(selected) => setFilters({ pantheon: selected })}
						options={ALL_PANTHEON}
					/>
				</div>
				<div className="w-40">
					<SelectFilter
						key="subject_select"
						selectLabel="Sujet"
						selectName={selectNames.subject}
						value={filters.subject}
						onChange={(selected) => setFilters({ subject: selected })}
						options={ALL_SUBJECT}
					/>
				</div>
				<div className="w-40">
					<SelectFilter
						key="genre_select"
						selectLabel="Genre"
						selectName={selectNames.genre}
						value={filters.genre}
						onChange={(selected) => setFilters({ genre: selected })}
						options={ALL_GENRE}
					/>
				</div>
			</form>
			<SearchResults
				pantheon={filters.pantheon}
				subject={filters.subject}
				genre={filters.genre}
			/>
		</div>
	);
};

export default Filter;
