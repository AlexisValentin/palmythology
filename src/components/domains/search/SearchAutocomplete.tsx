import { fetchAllAvailableCardsForSearch } from "../../../utils/cms/cms.requests";
import SearchAutocompleteClient from "./SearchAutocompleteClient";

const SearchAutocomplete = async () => {
	const entities = await fetchAllAvailableCardsForSearch();

	return <SearchAutocompleteClient entities={entities} />;
};

export default SearchAutocomplete;
