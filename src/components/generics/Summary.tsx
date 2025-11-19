import Markdown from "react-markdown";
import { getSummaryBackgroundColor } from "../../utils/styles/colors";

interface SummaryProps {
	content: string;
}

const Summary: React.FC<SummaryProps> = ({ content }) => (
	<div className="md:flex md:justify-center">
		<div
			className={`flex flex-col items-center justify-center rounded-lg drop-shadow-lg ${getSummaryBackgroundColor()} italic p-3 mb-10 w-full`}
		>
			<Markdown>{content}</Markdown>
		</div>
	</div>
);

export default Summary;
