export interface QuotationProps {
	quote: string;
	author: string;
	origin?: string;
}

const Quotation: React.FC<QuotationProps> = ({ quote, author, origin }) => {
	return (
		<blockquote
			className="rounded-lg drop-shadow-lg bg-neutral-200"
			cite="source-url"
		>
			<p className="italic p-2 mb-0">"{quote}"</p>
			<footer className="rounded-b-lg bg-black text-white px-3 py-1">
				<cite className="text-sm not-italic">
					<span className="font-bold">{author}</span>
					{origin && `, ${origin}`}
				</cite>
			</footer>
		</blockquote>
	);
};

export default Quotation;
