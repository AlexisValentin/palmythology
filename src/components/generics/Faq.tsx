import Markdown from "react-markdown";

export interface FaqProps {
	question: string;
	response: string;
}

export const Faq: React.FC<FaqProps> = ({ question, response }) => {
	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "Question",
		name: question,
		acceptedAnswer: {
			"@type": "Answer",
			text: response,
		},
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
			/>
			<div
				itemScope
				itemType="https://schema.org/Question"
				className="w-full rounded-lg drop-shadow-lg bg-neutral-200"
			>
				<h5
					itemProp="name"
					className="rounded-t-lg bg-black text-white font-bold text-lg mb-2 px-3 py-2"
				>
					{question}
				</h5>
				<div
					itemScope
					itemType="https://schema.org/Answer"
					itemProp="acceptedAnswer"
					className="p-2 pt-0"
				>
					<div itemProp="text">
						<Markdown>{response}</Markdown>
					</div>
				</div>
			</div>
		</>
	);
};
