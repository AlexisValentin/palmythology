import Script from "next/script";
import { Faq } from "../../generics/Faq";
import GodleRules from "./GodleRules";

const GodleFAQ = () => {
	const mainQuestion = "Comment jouer ?";
	const mainResponse =
		"Devinez l'entité mythologique du jour en sélectionnant des entités dans la liste. Après chaque tentative, la couleur des attributs indiquera si vous êtes proche ou non de la réponse. Les attributs comparés sont le panthéon, le sujet, le genre, le domaine et les attributs.";

	const faqItems = [
		{
			question: mainQuestion,
			answer: mainResponse,
		},
		{
			question: "À quelle fréquence un nouveau Godle est-il disponible ?",
			answer:
				"Un nouveau Godle est généré chaque jour à minuit. Vous avez 24 heures pour deviner l'entité mythologique du jour. Revenez quotidiennement pour tester vos connaissances en mythologie !",
		},
		{
			question: "Quels sont les attributs comparés dans Godle ?",
			answer:
				"Cinq attributs sont comparés à chaque tentative : le panthéon (mythologie grecque, égyptienne, nordique, etc.), le sujet (divinité, créature, héros, lieu ou événement), le genre (masculin, féminin, androgyne ou autre), le domaine et les attributs (amour, guerre, mort, nature, etc.). Chaque attribut peut afficher une correspondance exacte (vert), partielle (jaune) ou aucune correspondance (rouge).",
		},
		{
			question: "Comment sont calculées les statistiques et les séries ?",
			answer:
				"Vos statistiques suivent votre progression : nombre de parties jouées, nombre de victoires, taux de réussite et distribution des essais. Votre série actuelle augmente de 1 à chaque victoire consécutive quotidienne. Si vous perdez ou manquez un jour, la série retombe à 0. Votre série maximale conserve votre meilleur record de jours consécutifs.",
		},
		{
			question: "Combien d'entités mythologiques sont disponibles dans Godle ?",
			answer:
				"Godle inclut des centaines d'entités provenant de 11 panthéons différents à travers le monde : mythologies grecque, romaine, égyptienne, nordique, celtique, japonaise, chinoise, hindoue, aztèque, maya et mésopotamienne. La base de données couvre 7 types de sujets incluant les divinités, créatures, héros, lieux, événements, objets et concepts mythologiques.",
		},
		{
			question: "Y a-t-il une limite au nombre de tentatives ?",
			answer:
				"Non, il n'y a pas de limite au nombre de tentatives dans Godle. Vous pouvez essayer autant de fois que nécessaire pour trouver l'entité du jour. Cependant, le défi consiste à deviner avec le moins d'essais possible pour améliorer vos statistiques et votre distribution de réussite.",
		},
	];

	const faqPageSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqItems.map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.answer,
			},
		})),
	};

	return (
		<>
			<Script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
			/>
			<div className="flex flex-col items-center w-full mt-8">
				<Faq question={mainQuestion} response={mainResponse}>
					<GodleRules />
				</Faq>
			</div>
		</>
	);
};

export default GodleFAQ;
