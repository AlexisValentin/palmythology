"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { getPantheonLabelFromValue } from "../../utils/cards/pantheons";
import { getSubjectLabelFromValue } from "../../utils/cards/subjects";
import type { CardEntity } from "../../utils/cms/cms.requests";
import { normalizeString } from "../../utils/string";
import styles from "./EntityAutocompleteInput.module.scss";

interface EntityAutocompleteInputProps<T extends CardEntity> {
	entities: T[];
	onSelect: (entity: T) => void;
	placeholder?: string;
	disabled?: boolean;
	maxResults?: number;
}

const EntityAutocompleteInput = <T extends CardEntity>({
	entities,
	onSelect,
	placeholder = "Rechercher une entité...",
	disabled = false,
	maxResults = 50,
}: EntityAutocompleteInputProps<T>) => {
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
			.slice(0, maxResults);
	}, [query, entities, maxResults]);

	const handleSelect = (entity: T) => {
		if (!disabled) {
			onSelect(entity);
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
		<div className={styles.wrapper}>
			<input
				ref={inputRef}
				type="text"
				className={styles.input}
				placeholder={placeholder}
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
						className={styles.dropdown}
					>
						{filteredEntities.map((entity, index) => (
							<button
								type="button"
								key={entity.slug}
								className={[styles.option, index === focusedIndex ? styles.optionFocused : ""].filter(Boolean).join(" ")}
								onClick={() => handleSelect(entity)}
								onMouseEnter={() => setFocusedIndex(index)}
							>
								<span className={styles.optionName}>{entity.name}</span>
								<span className={styles.optionMeta}>
									{getPantheonLabelFromValue(entity.pantheon)} •{" "}
									{getSubjectLabelFromValue(entity.subject)}
								</span>
							</button>
						))}
					</div>
				)}
		</div>
	);
}

export default EntityAutocompleteInput;
