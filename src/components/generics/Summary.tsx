import { getSummaryBackgroundColor } from '../../utils/styles/colors'

interface SummaryProps {
  content: string
}

const Summary: React.FC<SummaryProps> = ({ content }) => (
  <div className="md:flex md:justify-center">
    <div
      className={`flex items-center justify-center rounded-lg drop-shadow-lg ${getSummaryBackgroundColor()} italic p-3 mb-10 w-full lg:w-3/4`}
    >
      {content}
    </div>
  </div>
)

export default Summary
