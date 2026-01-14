import Script from "next/script";
import { Faq } from "../../generics/Faq";
import GodleFAQContent from "./GodleFAQContent";

const GodleFAQ = () => {
	const question = "Comment jouer ?";
	const response =
		"Devinez l'entité mythologique du jour en sélectionnant des entités dans la liste. Après chaque tentative, la couleur des attributs indiquera si vous êtes proche ou non de la réponse. Les attributs comparés sont le panthéon, le sujet, le genre et les domaines.";

	const faqPageSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: question,
				acceptedAnswer: {
					"@type": "Answer",
					text: response,
				},
			},
		],
	};

	return (
		<>
			<Script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
			/>
			<div className="flex flex-col items-center w-full mt-8">
				<Faq question={question} response={response}>
					<GodleFAQContent />
				</Faq>
			</div>
		</>
	);
};

export default GodleFAQ;
