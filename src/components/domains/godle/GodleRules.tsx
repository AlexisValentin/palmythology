import type { StaticImageData } from "next/image";
import Image from "next/image";
import type { FC } from "react";
import BulbIcon from "../../../assets/icons/bulb.svg";
import CheckIcon from "../../../assets/icons/check.svg";
import WrongIcon from "../../../assets/icons/wrong.svg";
import styles from "./GodleRules.module.scss";

interface GodleMatchIndicatorProps {
	swatchClass: string;
	icon: StaticImageData;
	title: string;
	description: string;
}

const GodleMatchIndicator: React.FC<GodleMatchIndicatorProps> = ({
	swatchClass,
	icon,
	title,
	description,
}) => (
	<div className={styles.indicator}>
		<div className={`${styles.indicatorSwatch} ${swatchClass}`} />
		<Image
			src={icon}
			alt=""
			width={28}
			height={28}
			className={styles.indicatorIcon}
		/>
		<div className={styles.indicatorText}>
			<div className={styles.indicatorTitle}>{title}</div>
			<div className={styles.indicatorDescription}>{description}</div>
		</div>
	</div>
);

const GodleRules: FC = () => (
	<div className={styles.container}>
		<section>
			<h3 className={styles.sectionTitle}>Règles du jeu</h3>
			<p>
				Devinez l&apos;entité mythologique du jour en sélectionnant des entités
				dans la liste. Un nouveau Godle est disponible chaque jour à minuit,
				vous offrant un défi quotidien pour tester vos connaissances en
				mythologie.
			</p>
		</section>
		<section>
			<h3 className={styles.sectionTitle}>Code couleur des indices</h3>
			<p>
				Après chaque tentative, la couleur des attributs vous indiquera à quel
				point vous êtes proche de la réponse :
			</p>
			<div className={styles.indicatorsGrid}>
				<GodleMatchIndicator
					swatchClass={styles.indicatorExact}
					icon={CheckIcon}
					title="Correspondance exacte"
					description="Le ou les attributs sont identiques"
				/>
				<GodleMatchIndicator
					swatchClass={styles.indicatorPartial}
					icon={BulbIcon}
					title="Correspondance partielle"
					description="Certains attributs correspondent"
				/>
				<GodleMatchIndicator
					swatchClass={styles.indicatorNone}
					icon={WrongIcon}
					title="Aucune correspondance"
					description="Le ou les attributs sont différents"
				/>
			</div>
		</section>
		<section>
			<h3 className={styles.sectionTitle}>Attributs comparés</h3>
			<p>Cinq attributs sont analysés à chaque tentative :</p>
			<ul className={styles.list}>
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
					<strong>Domaine</strong> : Le domaine d&apos;attribution de
					l&apos;entité (guerre, amour, sagesse, etc.)
				</li>
				<li>
					<strong>Attributs</strong> : L&apos;ensemble des attributs ou sphères
					d&apos;influence. Une correspondance partielle (jaune) indique
					qu&apos;au moins un attribut correspond.
				</li>
			</ul>
		</section>
		<section>
			<h3 className={styles.sectionTitle}>Statistiques et séries</h3>
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
			<h3 className={styles.sectionTitle}>Stratégie de jeu</h3>
			<p>
				Il n&apos;y a pas de limite au nombre de tentatives, mais le défi
				consiste à deviner avec le moins d&apos;essais possible. Commencez par
				des entités connues de différents panthéons pour éliminer les
				possibilités. Utilisez les indices de couleur pour affiner vos
				hypothèses. Les attributs en jaune vous donnent des pistes précieuses
				sur l&apos;entité recherchée.
			</p>
		</section>
		<p className={styles.closing}>
			Bonne chance et amusez-vous bien avec Godle !
		</p>
	</div>
);

export default GodleRules;
