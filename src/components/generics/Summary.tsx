import { getSummaryBackgroundColor } from '../../helpers/colors'

interface SummaryProps {
  content: string
}

const Summary: React.FC<SummaryProps> = ({ content }): JSX.Element => (
  <div className="hidden xl:flex xl:justify-center">
    <div
      className={`flex items-center justify-center ${getSummaryBackgroundColor()} italic p-3 mb-10 w-full lg:w-3/4`}
    >
      {content}
    </div>
  </div>
)

export default Summary
