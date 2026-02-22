"use client";

import { useRouter } from "next/navigation";
import type { CardEntity } from "../../../utils/cms/cms.requests";
import { setCardRouteParameters } from "../../../utils/routes/routes";
import EntityAutocompleteInput from "../../generics/EntityAutocompleteInput";

interface SearchAutocompleteClientProps {
	entities: CardEntity[];
}

const SearchAutocompleteClient: React.FC<SearchAutocompleteClientProps> = ({
	entities,
}) => {
	const router = useRouter();

	const handleSelect = (entity: CardEntity) => {
		const cardUrl = setCardRouteParameters(entity.name, entity.pantheon);
		router.push(cardUrl);
	};

	return (
		<EntityAutocompleteInput
			entities={entities}
			onSelect={handleSelect}
			placeholder="Rechercher une fiche par son nom..."
			maxResults={50}
		/>
	);
};

export default SearchAutocompleteClient;
