"use client";

import { useCallback, useEffect, useState } from "react";
import {
	filterCards,
	getPlaceholderCards,
} from "../../../modules/searchEngine";
import type {
	ResearchCriterias,
	TranslatedCardDetails,
} from "../../../utils/cards/card.constants";
import { getPantheonValueFromLabel } from "../../../utils/cards/pantheons";
import { STORYBLOK_RESULTS_PER_PAGE } from "../../../utils/cms/cms.constants";
import { isStringEmpty } from "../../../utils/string";
import PageSquare, { CONTENT_TYPE } from "../../generics/PageSquare";
import Pagination from "../../generics/Pagination";
import styles from "./SearchResults.module.scss";

const SearchResults: React.FC<ResearchCriterias> = ({
	pantheon,
	subject,
	genre,
}) => {
	const [searchResults, setSearchResults] = useState<TranslatedCardDetails[]>(
		[],
	);
	const [totalResult, setTotalResult] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);

	const areFiltersUnfilled = useCallback(
		() =>
			isStringEmpty(pantheon) && isStringEmpty(subject) && isStringEmpty(genre),
		[pantheon, subject, genre],
	);

	useEffect(() => {
		const updateResultData = async () => {
			if (areFiltersUnfilled()) {
				const cards = await getPlaceholderCards();

				const { results } = cards;

				setTotalResult(0);
				setSearchResults(results);
			} else {
				const cards = await filterCards(currentPage, {
					pantheon,
					subject,
					genre,
				});
				const { results, total } = cards;

				setSearchResults(results);
				setTotalResult(total);
			}
		};

		updateResultData();
	}, [pantheon, subject, genre, currentPage, areFiltersUnfilled]);

	return (
		<div className={styles.container}>
			{areFiltersUnfilled() && (
				<h3 className={styles.recentTitle}>
					Les dernières fiches mises à jour
				</h3>
			)}
			<div className={styles.grid}>
				{searchResults.map((card: TranslatedCardDetails) => {
					const { name, subtitle, pantheon, icon } = card;

					if (!icon) return null;

					return (
						<PageSquare
							key={`${pantheon}-${name}`}
							title={name}
							subtitle={subtitle}
							pantheon={getPantheonValueFromLabel(pantheon)!}
							icon={icon}
							contentType={CONTENT_TYPE.CARD}
						/>
					);
				})}
			</div>
			{totalResult > STORYBLOK_RESULTS_PER_PAGE && (
				<Pagination
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					nbPages={Math.ceil(totalResult / STORYBLOK_RESULTS_PER_PAGE)}
				/>
			)}
		</div>
	);
};

export default SearchResults;
