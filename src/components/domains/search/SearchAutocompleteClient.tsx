"use client";

import { useRouter } from "next/navigation";
import type { GodleEntity } from "../../../utils/godle/godle.types";
import { setCardRouteParameters } from "../../../utils/routes/routes";
import EntityAutocompleteInput from "../../generics/EntityAutocompleteInput";

interface SearchAutocompleteClientProps {
	entities: GodleEntity[];
}

const SearchAutocompleteClient: React.FC<SearchAutocompleteClientProps> = ({
	entities,
}) => {
	const router = useRouter();

	const handleSelect = (entity: GodleEntity) => {
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
