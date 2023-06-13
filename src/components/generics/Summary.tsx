import { getSummaryBackgroundColor } from '../../helpers/colors'

interface SummaryProps {
  content: string
}

const Summary: React.FC<SummaryProps> = ({ content }): JSX.Element => (
  <div className="hidden xl:block">
    <div
      className={`flex items-center justify-center ${getSummaryBackgroundColor()} italic p-3 mb-10`}
    >
      {content}
    </div>
  </div>
)

export default Summary
