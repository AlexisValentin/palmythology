import Faq from "../../generics/Faq";

interface TranscriptionDetailContent {
  transcriptionDetailTitle: string;
  transcriptionDetailContent: string;
}

interface TranscriptionContent {
  transcriptionTitle: string;
  transcriptionContent: TranscriptionDetailContent[];
}

interface TranscriptionProps {
  transcription: TranscriptionContent[];
}

const Transcription: React.FC<TranscriptionProps> = ({ transcription }) => (
  <>
    {transcription.map((faq) => {
      const { transcriptionTitle, transcriptionContent } = faq;

      // workaround to avoid typescripting issue and in order to comply to `Faq` component
      // should be fixed as soon as possible by creating a `Faq` block in the backend
      const parsedTranscriptionContent = transcriptionContent.map((item) => ({
        title: item.transcriptionDetailTitle,
        description: item.transcriptionDetailContent,
      }));

      return (
        <div className="mb-8" key={transcriptionTitle}>
          <Faq
            faqTitle={transcriptionTitle}
            faqItems={parsedTranscriptionContent}
          />
        </div>
      );
    })}
  </>
);

export default Transcription;
