import Markdown from "react-markdown";

interface TranscriptionDetailType {
	transcriptionDetailTitle: string;
	content?: string;
}

interface TranscriptionType {
	transcriptionTitle: string;
	transcriptionContent: TranscriptionDetailType[];
}

interface TranscriptionProps {
	transcriptionContent: TranscriptionType[];
}

const Transcription: React.FC<TranscriptionProps> = ({
	transcriptionContent,
}) => (
	<>
		{transcriptionContent.map((content) => {
			const { transcriptionTitle, transcriptionContent } = content;
			const parsedTranscriptionContent = transcriptionContent.map((item) => ({
				title: item.transcriptionDetailTitle,
				description: item.content || "",
			}));

			return (
				<div key={transcriptionTitle}>
					<TranscriptionSection
						transcriptionTitle={transcriptionTitle}
						transcriptionItems={parsedTranscriptionContent}
					/>
				</div>
			);
		})}
	</>
);

export interface TranscriptionSectionProps {
	transcriptionTitle: string;
	transcriptionItems: TranscriptionItemProps[];
}

export interface TranscriptionItemProps {
	title: string;
	description: string;
}

const TranscriptionSection: React.FC<TranscriptionSectionProps> = ({
	transcriptionTitle,
	transcriptionItems,
}) => (
	<>
		<h3 className="text-2xl font-bold mb-4">{transcriptionTitle}</h3>
		{transcriptionItems.map((transcriptionItem) => (
			<TranscriptionItem
				title={transcriptionItem.title}
				description={transcriptionItem.description}
				key={transcriptionItem.title}
			/>
		))}
	</>
);

const TranscriptionItem: React.FC<TranscriptionItemProps> = ({
	title,
	description,
}) => (
	<details className="mb-4" open>
		<summary className="text-xl font-semibold mb-2 hover:bg-slate-100 cursor-pointer pl-2">
			{title}
		</summary>
		<Markdown>{description}</Markdown>
	</details>
);

export default Transcription;
