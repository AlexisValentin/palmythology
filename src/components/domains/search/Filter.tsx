"use client";

import { parseAsString, useQueryStates } from "nuqs";
import { ALL_GENRE } from "../../../utils/cards/genres.constants";
import { ALL_PANTHEON } from "../../../utils/cards/pantheons.constants";
import { ALL_SUBJECT } from "../../../utils/cards/subjects.constants";
import { BASE_INPUT_NAMES } from "../../../utils/form.constants";
import { isStringEmpty } from "../../../utils/string";
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

	const hasActiveFilters =
		!isStringEmpty(filters.pantheon) ||
		!isStringEmpty(filters.subject) ||
		!isStringEmpty(filters.genre);

	const resetFilters = () =>
		setFilters({ pantheon: "", subject: "", genre: "" });

	return (
		<div className="flex flex-col items-center justify-center mt-12">
			<form className="flex flex-col md:flex-row items-center justify-center gap-4">
				<div className="w-40">
					<SelectFilter
						key="pantheon_select"
						selectLabel="Panthéon"
						selectName={selectNames.pantheon}
						value={filters.pantheon}
						onChange={(selected) => {
							setFilters({ pantheon: selected });
							if (selected)
								window.rybbit?.event("search_filter", {
									type: "pantheon",
									value: selected,
								});
						}}
						options={ALL_PANTHEON}
					/>
				</div>
				<div className="w-40">
					<SelectFilter
						key="subject_select"
						selectLabel="Sujet"
						selectName={selectNames.subject}
						value={filters.subject}
						onChange={(selected) => {
							setFilters({ subject: selected });
							if (selected)
								window.rybbit?.event("search_filter", {
									type: "subject",
									value: selected,
								});
						}}
						options={ALL_SUBJECT}
					/>
				</div>
				<div className="w-40">
					<SelectFilter
						key="genre_select"
						selectLabel="Genre"
						selectName={selectNames.genre}
						value={filters.genre}
						onChange={(selected) => {
							setFilters({ genre: selected });
							if (selected)
								window.rybbit?.event("search_filter", {
									type: "genre",
									value: selected,
								});
						}}
						options={ALL_GENRE}
					/>
				</div>
				<button
					type="button"
					disabled={!hasActiveFilters}
					className="px-4 py-3 md:px-5 md:py-4 rounded-xl bg-gradient-to-r from-pink-400 to-sky-500 text-white text-base font-semibold hover:from-pink-500 hover:to-sky-500 focus:ring-4 focus:ring-pink-400/20 focus:outline-none cursor-pointer transition-all duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-pink-400 disabled:hover:to-sky-500 self-center md:self-end"
					onClick={resetFilters}
					data-rybbit-event="search_reset"
				>
					Réinitialiser
				</button>
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
