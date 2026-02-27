import Markdown from "react-markdown";
import styles from "./Faq.module.scss";

export interface FaqProps {
	question: string;
	response: string;
	children?: React.ReactNode;
}

export const Faq: React.FC<FaqProps> = ({ question, response, children }) => {
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
				className={styles.container}
			>
				<h5 itemProp="name" className={styles.question}>
					{question}
				</h5>
				<div
					itemScope
					itemType="https://schema.org/Answer"
					itemProp="acceptedAnswer"
					className={styles.answerWrapper}
				>
					<div className={styles.answer} itemProp="text">
						{children ?? <Markdown>{response}</Markdown>}
					</div>
				</div>
			</div>
		</>
	);
};
