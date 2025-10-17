interface TranscriptionDetailContent {
	transcriptionDetailTitle: string;
	transcriptionDetailContent: string;
}

interface TranscriptionContent {
	transcriptionTitle: string;
	transcriptionContent: TranscriptionDetailContent[];
}

interface TranscriptionProps {
	transcriptionContent: TranscriptionContent[];
}

const Transcription: React.FC<TranscriptionProps> = ({
	transcriptionContent,
}) => (
	<>
		{transcriptionContent.map((content) => {
			const { transcriptionTitle, transcriptionContent } = content;

			// workaround to avoid typescripting issue and in order to comply to `Faq` component
			// should be fixed as soon as possible by creating a `Faq` block in the backend
			const parsedTranscriptionContent = transcriptionContent.map((item) => ({
				title: item.transcriptionDetailTitle,
				description: item.transcriptionDetailContent,
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
		{description}
	</details>
);

export default Transcription;
