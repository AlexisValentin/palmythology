interface TranscriptionDetailContent {
  transcriptionDetailTitle: string
  transcriptionDetailContent: string
}

interface TranscriptionContent {
  transcriptionTitle: string
  transcriptionContent: TranscriptionDetailContent[]
}

interface TranscriptionProps {
  transcription: TranscriptionContent[]
}

const Transcription: React.FC<TranscriptionProps> = ({ transcription }) => {
  return (
    <div className="mt-16 w-full lg:w-3/4">
      {transcription.map(({ transcriptionTitle, transcriptionContent }) => {
        return (
          <div className="mb-8" key={transcriptionTitle}>
            <h3 className="text-2xl font-bold mb-4">{transcriptionTitle}</h3>
            {transcriptionContent.map(
              ({ transcriptionDetailTitle, transcriptionDetailContent }) => {
                return (
                  <div className="mb-4" key={transcriptionDetailTitle}>
                    <h4 className="text-xl font-semibold mb-2">
                      {transcriptionDetailTitle}
                    </h4>
                    <div>{transcriptionDetailContent}</div>
                  </div>
                )
              },
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Transcription
