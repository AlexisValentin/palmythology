"use client";

import type { GodleEntity } from "../../../utils/godle/godle.types";
import EntityAutocompleteInput from "../../generics/EntityAutocompleteInput";

interface GodleInputProps {
	entities: GodleEntity[];
	onGuess: (entity: GodleEntity) => void;
	disabled: boolean;
}

const GodleInput: React.FC<GodleInputProps> = ({
	entities,
	onGuess,
	disabled,
}) => (
	<div className="mb-8 sticky top-16 rounded-lg bg-white z-20">
		<EntityAutocompleteInput
			entities={entities}
			onSelect={onGuess}
			placeholder="Rechercher une entité..."
			disabled={disabled}
			maxResults={50}
		/>
	</div>
);

export default GodleInput;
