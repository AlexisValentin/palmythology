export interface QuotationProps {
  quote: string;
  author: string;
  origin?: string;
}

const Quotation: React.FC<QuotationProps> = ({ quote, author, origin }) => {
  return (
    <blockquote cite="source-url">
      <p className="italic">"{quote}"</p>
      <footer>
        <cite className="text-sm not-italic">
          <span className="font-bold">{author}</span>
          {origin && `, ${origin}`}
        </cite>
      </footer>
    </blockquote>
  );
};

export default Quotation;
