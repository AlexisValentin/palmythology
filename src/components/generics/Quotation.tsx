import Markdown from "react-markdown";
import styles from "./Quotation.module.scss";

export interface QuotationProps {
	quotation: string;
	author: string;
	origin?: string;
}

const Quotation: React.FC<QuotationProps> = ({ quotation, author, origin }) => {
	return (
		<blockquote className={styles.blockquote}>
			<div className={styles.body}>
				<Markdown>{`"${quotation}"`}</Markdown>
			</div>
			<footer className={styles.footer}>
				<cite className={styles.cite}>
					<span className={styles.author}>{author}</span>
					{origin && `, ${origin}`}
				</cite>
			</footer>
		</blockquote>
	);
};

export default Quotation;
