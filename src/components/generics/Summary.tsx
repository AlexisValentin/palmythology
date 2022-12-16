import { getSummaryBackgroundColor } from "../../types/styles/colors";
import { SummaryMainContainerStyled } from "./Summary.styled";

interface SummaryProps {
  content: string;
}

const Summary: React.FC<SummaryProps> = ({ content }): JSX.Element => (
  <SummaryMainContainerStyled
    className={`${getSummaryBackgroundColor()} italic`}
  >
    {content}
  </SummaryMainContainerStyled>
);

export default Summary;
