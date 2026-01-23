import type { FC } from "react";

interface GodleMatchIndicatorProps {
	colorClasses: string;
	title: string;
	description: string;
}

const GodleMatchIndicator: React.FC<GodleMatchIndicatorProps> = ({
	colorClasses,
	title,
	description,
}) => (
	<div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg border-2 border-neutral-200">
		<div
			className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colorClasses} flex-shrink-0`}
		/>
		<div className="flex-1">
			<div className="font-semibold text-sm">{title}</div>
			<div className="text-xs text-neutral-600">{description}</div>
		</div>
	</div>
);

const GodleRules: FC = () => (
	<div className="space-y-6">
		<section>
			<h3 className="font-semibold text-lg mb-2">Règles du jeu</h3>
			<p>
				Devinez l&apos;entité mythologique du jour en sélectionnant des entités
				dans la liste. Un nouveau Godle est disponible chaque jour à minuit,
				vous offrant un défi quotidien pour tester vos connaissances en
				mythologie.
			</p>
		</section>
		<section>
			<h3 className="font-semibold text-lg mb-2">Code couleur des indices</h3>
			<p className="mb-3">
				Après chaque tentative, la couleur des attributs vous indiquera à quel
				point vous êtes proche de la réponse :
			</p>
			<div className="mt-4 p-4 rounded-xl">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
					<GodleMatchIndicator
						colorClasses="from-green-500 to-green-600 shadow-lg shadow-green-500/30"
						title="Correspondance exacte"
						description="Le ou les attributs sont identiques"
					/>
					<GodleMatchIndicator
						colorClasses="from-yellow-400 to-yellow-500 shadow-lg shadow-yellow-500/30"
						title="Correspondance partielle"
						description="Certains attributs correspondent"
					/>
					<GodleMatchIndicator
						colorClasses="from-red-500 to-red-600 shadow-lg shadow-red-500/30"
						title="Aucune correspondance"
						description="Le ou les attributs sont différents"
					/>
				</div>
			</div>
		</section>
		<section>
			<h3 className="font-semibold text-lg mb-2">Attributs comparés</h3>
			<p className="mb-2">
				Quatre attributs sont analysés à chaque tentative :
			</p>
			<ul className="list-disc list-inside space-y-2 ml-2">
				<li>
					<strong>Panthéon</strong> : La mythologie d&apos;origine (grecque,
					égyptienne, nordique, celtique, romaine, japonaise, chinoise, hindoue,
					aztèque, maya, mésopotamienne)
				</li>
				<li>
					<strong>Sujet</strong> : Le type d&apos;entité (divinité, créature,
					héros, lieu, événement, objet, concept)
				</li>
				<li>
					<strong>Genre</strong> : L&apos;identité de genre associée à
					l&apos;entité (masculin, féminin, androgyne, aucun, indéfini)
				</li>
				<li>
					<strong>Domaines</strong> : Les domaines d&apos;attribution ou sphères
					d&apos;influence (amour, guerre, sagesse, mort, nature, etc.). Une
					correspondance partielle (jaune) indique qu&apos;au moins un domaine
					correspond.
				</li>
			</ul>
		</section>

		<section>
			<h3 className="font-semibold text-lg mb-2">Statistiques et séries</h3>
			<p>
				Vos performances sont suivies automatiquement : nombre de parties
				jouées, taux de victoires, distribution des essais et séries de
				réussite. Gagnez chaque jour pour maintenir et augmenter votre série
				actuelle. Votre série maximale conserve votre meilleur record de jours
				consécutifs. Partagez vos résultats avec vos statistiques pour comparer
				vos performances avec vos amis !
			</p>
		</section>

		<section>
			<h3 className="font-semibold text-lg mb-2">Stratégie de jeu</h3>
			<p>
				Il n&apos;y a pas de limite au nombre de tentatives, mais le défi
				consiste à deviner avec le moins d&apos;essais possible. Commencez par
				des entités connues de différents panthéons pour éliminer les
				possibilités. Utilisez les indices de couleur pour affiner vos
				hypothèses. Les domaines en jaune vous donnent des pistes précieuses sur
				les attributions de l&apos;entité recherchée.
			</p>
		</section>

		<p className="text-center font-semibold text-neutral-700 pt-2">
			Bonne chance et amusez-vous bien avec Godle !
		</p>
	</div>
);

export default GodleRules;
