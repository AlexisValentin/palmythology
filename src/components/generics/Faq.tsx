export interface FaqProps {
  question: string;
  answer: string;
}

const Faq: React.FC<FaqProps> = ({ question, answer }) => (
  <div itemScope className="rounded-lg drop-shadow-lg bg-neutral-200" itemProp="mainEntity" itemType="https://schema.org/Question">
    <h5 className="rounded-t-lg bg-black text-white font-bold text-lg mb-2 px-3 py-2" itemProp="name">
      {question}
    </h5>
    <div
      className="p-2 pt-0"
      itemScope
      itemProp="acceptedAnswer"
      itemType="https://schema.org/Answer"
    >
      <p itemProp="text">{answer}</p>
    </div>
  </div>
);

export default Faq;
