import { getSummaryBackgroundColor } from "../../types/styles/colors";

interface SummaryProps {
  content: string;
}

const Summary: React.FC<SummaryProps> = ({ content }): JSX.Element => (
  <div
    className={`flex items-center justify-center ${getSummaryBackgroundColor()} italic p-3 mb-10`}
  >
    {content}
  </div>
);

export default Summary;
