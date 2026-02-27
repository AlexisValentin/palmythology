"use client";

import { parseAsString, useQueryStates } from "nuqs";
import { ALL_GENRE } from "../../../utils/cards/genres.constants";
import { ALL_PANTHEON } from "../../../utils/cards/pantheons.constants";
import { ALL_SUBJECT } from "../../../utils/cards/subjects.constants";
import { BASE_INPUT_NAMES } from "../../../utils/form.constants";
import { isStringEmpty } from "../../../utils/string";
import styles from "./Filter.module.scss";
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
		<div className={styles.container}>
			<form className={styles.form}>
				<div className={styles.filterItem}>
					<SelectFilter
						key="pantheon_select"
						selectLabel="Panthéon"
						selectName={selectNames.pantheon}
						value={filters.pantheon}
						onChange={(selected) => {
							setFilters({ pantheon: selected });
							if (selected)
								globalThis.window.rybbit?.event("search_filter", {
									type: "pantheon",
									value: selected,
								});
						}}
						options={ALL_PANTHEON}
					/>
				</div>
				<div className={styles.filterItem}>
					<SelectFilter
						key="subject_select"
						selectLabel="Sujet"
						selectName={selectNames.subject}
						value={filters.subject}
						onChange={(selected) => {
							setFilters({ subject: selected });
							if (selected)
								globalThis.window.rybbit?.event("search_filter", {
									type: "subject",
									value: selected,
								});
						}}
						options={ALL_SUBJECT}
					/>
				</div>
				<div className={styles.filterItem}>
					<SelectFilter
						key="genre_select"
						selectLabel="Genre"
						selectName={selectNames.genre}
						value={filters.genre}
						onChange={(selected) => {
							setFilters({ genre: selected });
							if (selected)
								globalThis.window.rybbit?.event("search_filter", {
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
					className={styles.resetButton}
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
