"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { getPantheonLabelFromValue } from "../../../utils/cards/pantheons";
import { getSubjectLabelFromValue } from "../../../utils/cards/subjects";
import type { GodleEntity } from "../../../utils/godle/godle.types";

interface GodleInputProps {
	entities: GodleEntity[];
	onGuess: (entity: GodleEntity) => void;
	disabled: boolean;
	alreadyGuessed: string[];
}

const GodleInput: React.FC<GodleInputProps> = ({
	entities,
	onGuess,
	disabled,
	alreadyGuessed,
}) => {
	const [query, setQuery] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [focusedIndex, setFocusedIndex] = useState(-1);
	const inputRef = useRef<HTMLInputElement>(null);
	const listRef = useRef<HTMLDivElement>(null);

	const filteredEntities = useMemo(() => {
		const lowerQuery = query.toLowerCase();
		return entities
			.filter(
				(entity) =>
					entity.name.toLowerCase().includes(lowerQuery) &&
					!alreadyGuessed.includes(entity.name),
			)
			.slice(0, 50);
	}, [query, entities, alreadyGuessed]);

	const handleSelect = (entity: GodleEntity) => {
		if (!disabled) {
			onGuess(entity);
			setQuery("");
			setIsOpen(false);
			setFocusedIndex(-1);
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (disabled) return;

		switch (e.key) {
			case "ArrowDown":
				e.preventDefault();
				setFocusedIndex((prev) =>
					prev < filteredEntities.length - 1 ? prev + 1 : prev,
				);
				break;
			case "ArrowUp":
				e.preventDefault();
				setFocusedIndex((prev) => (prev > 0 ? prev - 1 : -1));
				break;
			case "Enter":
				e.preventDefault();
				if (focusedIndex >= 0 && filteredEntities[focusedIndex]) {
					handleSelect(filteredEntities[focusedIndex]);
				}
				break;
			case "Escape":
				setIsOpen(false);
				setFocusedIndex(-1);
				break;
		}
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				inputRef.current &&
				!inputRef.current.contains(event.target as Node) &&
				listRef.current &&
				!listRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
				setFocusedIndex(-1);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	useEffect(() => {
		if (focusedIndex >= 0 && listRef.current) {
			const focusedElement = listRef.current.children[
				focusedIndex
			] as HTMLElement;
			if (focusedElement) {
				focusedElement.scrollIntoView({ block: "nearest" });
			}
		}
	}, [focusedIndex]);

	return (
		<div className="mb-6">
			<div className="relative">
				<input
					ref={inputRef}
					type="text"
					className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-[#f461b1] focus:outline-none disabled:bg-neutral-100 disabled:cursor-not-allowed"
					placeholder={
						disabled
							? "Partie terminée"
							: "Rechercher une entité mythologique..."
					}
					value={query}
					onChange={(e) => {
						setQuery(e.target.value);
						setIsOpen(e.target.value.length > 0);
						setFocusedIndex(-1);
					}}
					onKeyDown={handleKeyDown}
					disabled={disabled}
					autoComplete="off"
				/>

				{filteredEntities.length > 0 &&
					query.length > 0 &&
					!disabled &&
					isOpen && (
						<div
							ref={listRef}
							className="absolute z-10 w-full mt-1 bg-white border-2 border-neutral-300 rounded-lg shadow-lg max-h-60 overflow-auto"
						>
							{filteredEntities.map((entity, index) => (
								<div
									key={entity.slug}
									className={`px-4 py-2 cursor-pointer flex justify-between items-center ${
										index === focusedIndex
											? "bg-neutral-200"
											: "hover:bg-neutral-100"
									}`}
									onClick={() => handleSelect(entity)}
									onMouseEnter={() => setFocusedIndex(index)}
								>
									<span className="font-medium">{entity.name}</span>
									<span className="text-sm text-neutral-600">
										{getPantheonLabelFromValue(entity.pantheon)} •{" "}
										{getSubjectLabelFromValue(entity.subject)}
									</span>
								</div>
							))}
						</div>
					)}
			</div>
		</div>
	);
};

export default GodleInput;
