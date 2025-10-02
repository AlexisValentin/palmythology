export interface FaqProps {
  question: string;
  answer: string;
}

const Faq: React.FC<FaqProps> = ({ question, answer }) => (
  <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
    <h5 className="font-bold text-lg mb-2" itemProp="name">
      {question}
    </h5>
    <div
      itemScope
      itemProp="acceptedAnswer"
      itemType="https://schema.org/Answer"
    >
      <p itemProp="text">{answer}</p>
    </div>
  </div>
);

export default Faq;
