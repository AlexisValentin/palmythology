"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { getPantheonLabelFromValue } from "../../../utils/cards/pantheons";
import { getSubjectLabelFromValue } from "../../../utils/cards/subjects";
import type { GodleEntity } from "../../../utils/godle/godle.types";

const normalizeString = (str: string): string => {
	return str
		.toLowerCase()
		.normalize("NFD")
		.replaceAll(/[\u0300-\u036f]/g, "");
};

interface GodleInputProps {
	entities: GodleEntity[];
	onGuess: (entity: GodleEntity) => void;
	disabled: boolean;
}

const GodleInput: React.FC<GodleInputProps> = ({
	entities,
	onGuess,
	disabled,
}) => {
	const [query, setQuery] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [focusedIndex, setFocusedIndex] = useState(-1);
	const inputRef = useRef<HTMLInputElement>(null);
	const listRef = useRef<HTMLDivElement>(null);

	const filteredEntities = useMemo(() => {
		const normalizedQuery = normalizeString(query);
		return entities
			.filter((entity) =>
				normalizeString(entity.name).includes(normalizedQuery),
			)
			.slice(0, 50);
	}, [query, entities]);

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
		<div className="mb-8 sticky top-16 rounded-lg bg-white z-20">
			<div className="relative">
				<input
					ref={inputRef}
					type="text"
					className="w-full px-4 py-3 md:px-5 md:py-4 border-2 border-neutral-300 rounded-xl focus:border-pink-400 focus:ring-4 focus:ring-pink-400/20 focus:outline-none disabled:bg-neutral-100 disabled:cursor-not-allowed transition-all duration-200 text-base font-medium placeholder:text-neutral-400 shadow-sm focus:shadow-md"
					placeholder="Rechercher une entité..."
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
							className="absolute z-10 w-full mt-1 bg-white border-2 border-neutral-300 rounded-xl shadow-lg max-h-48 md:max-h-60 overflow-auto"
						>
							{filteredEntities.map((entity, index) => (
								<button
									type="button"
									key={entity.slug}
									className={`w-full text-left px-3 py-2.5 md:px-4 md:py-3 cursor-pointer flex flex-col md:flex-row md:justify-between md:items-center gap-1 md:gap-3 transition-all duration-150 ${
										index === focusedIndex
											? "bg-pink-50 border-l-4 border-pink-400"
											: "hover:bg-neutral-50"
									}`}
									onClick={() => handleSelect(entity)}
									onMouseEnter={() => setFocusedIndex(index)}
								>
									<span className="font-semibold truncate">{entity.name}</span>
									<span className="text-xs text-neutral-500 flex-shrink-0">
										{getPantheonLabelFromValue(entity.pantheon)} •{" "}
										{getSubjectLabelFromValue(entity.subject)}
									</span>
								</button>
							))}
						</div>
					)}
			</div>
		</div>
	);
};

export default GodleInput;
