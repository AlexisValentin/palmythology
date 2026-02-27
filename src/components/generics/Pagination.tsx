import styles from "./Pagination.module.scss";

interface PaginationProps {
	nbPages: number;
	currentPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

interface PaginationItemProps {
	pageNumber: number;
	isActivePage: boolean;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const buildItems = (
	nbPages: number,
	currentPage: number,
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
) => {
	const items = [];

	for (let i = 1; i <= nbPages; i++) {
		items.push(
			<PaginationItem
				key={`page_${i}`}
				pageNumber={i}
				isActivePage={i === currentPage}
				setCurrentPage={setCurrentPage}
			/>,
		);
	}

	return items;
};

const PaginationItem: React.FC<PaginationItemProps> = ({
	pageNumber,
	isActivePage,
	setCurrentPage,
}) => (
	<button
		type="button"
		className={`${styles.item} ${isActivePage ? styles.itemActive : ""}`}
		onClick={() => setCurrentPage(pageNumber)}
		aria-label={`Page ${pageNumber}`}
		aria-current={isActivePage ? "page" : undefined}
	>
		{pageNumber}
	</button>
);

const Pagination: React.FC<PaginationProps> = ({
	nbPages,
	currentPage,
	setCurrentPage,
}) => {
	if (nbPages === 1) return null;

	return (
		<nav aria-label="Pagination" className={styles.nav}>
			{buildItems(nbPages, currentPage, setCurrentPage).map((item) => item)}
		</nav>
	);
};

export default Pagination;
