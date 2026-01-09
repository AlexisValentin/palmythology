"use client";

import { useState } from "react";

const GodleHeader = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className="mb-8">
			<button
				type="button"
				onClick={() => setIsExpanded(!isExpanded)}
				className="text-left w-full px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
			>
				<span className="font-bold">
					{isExpanded ? "▼" : "▶"} Comment jouer ?
				</span>
			</button>

			{isExpanded && (
				<div className="mt-4 px-4 py-4 bg-neutral-50 rounded-lg text-sm space-y-2">
					<p>
						Devinez l&apos;entité mythologique du jour en sélectionnant des
						entités dans la liste.
					</p>
					<p>Après chaque tentative, la couleur des attributs indiquera :</p>
					<ul className="list-disc list-inside space-y-1 ml-2">
						<li>
							<span className="inline-block w-4 h-4 bg-green-500 rounded align-middle mr-1" />
							Vert : L&apos;attribut correspond
						</li>
						<li>
							<span className="inline-block w-4 h-4 bg-red-500 rounded align-middle mr-1" />
							Rouge : L&apos;attribut ne correspond pas
						</li>
					</ul>
					<p className="mt-3">
						Les attributs comparés sont le <strong>panthéon</strong> et le{" "}
						<strong>type</strong> (divinité, créature, personnage, lieu,
						événement...).
					</p>
					<p>
						Tentez de deviner avec le moins d&apos;essais possible. Bonne chance
						!
					</p>
				</div>
			)}
		</div>
	);
};

export default GodleHeader;
