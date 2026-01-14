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

const GodleFAQContent = () => {
	return (
		<div className="space-y-4">
			<p>
				Devinez l&apos;entité mythologique du jour en sélectionnant des entités
				dans la liste.
			</p>
			<p>Après chaque tentative, la couleur des attributs indiquera :</p>
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
			<p className="mt-3">
				Les attributs comparés sont le <strong>panthéon</strong>, le{" "}
				<strong>sujet</strong> (divinité, créature, personnage, lieu,
				événement...), le <strong>genre</strong> et les{" "}
				<strong>domaines</strong>.
			</p>
			<p>
				Tentez de deviner avec le moins d&apos;essais possible. Bonne chance !
			</p>
		</div>
	);
};

export default GodleFAQContent;
