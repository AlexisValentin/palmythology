import Markdown from "react-markdown";

export interface FaqProps {
		question: string;
		answer: string;
	}

const Faq: React.FC<FaqProps> = ({ question, answer }) => {
	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "Question",
		name: question,
		acceptedAnswer: {
			"@type": "Answer",
			text: answer,
		},
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
			/>
			<div className="w-full rounded-lg drop-shadow-lg bg-neutral-200">
				<h5 className="rounded-t-lg bg-black text-white font-bold text-lg mb-2 px-3 py-2">
					{question}
				</h5>
				<div className="p-2 pt-0">
					<Markdown>{answer}</Markdown>
				</div>
			</div>
		</>
	);
};

export default Faq;
