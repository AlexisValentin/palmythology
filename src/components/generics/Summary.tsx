import { getSummaryBackgroundColor } from "../../types/styles/colors";
import { SummaryMainContainerStyled } from "./Summary.styled";

interface SummaryProps {
  content: string;
}

const Summary: React.FC<SummaryProps> = ({ content }): JSX.Element => (
  <SummaryMainContainerStyled
    className={`${getSummaryBackgroundColor()} italic p-3 mb-10`}
  >
    {content}
  </SummaryMainContainerStyled>
);

export default Summary;
