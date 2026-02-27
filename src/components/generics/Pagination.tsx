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
		className={`border rounded-lg border-slate-300 ${
			isActivePage ? `bg-slate-300 hover:bg-slate-100` : `hover:bg-slate-200`
		} w-7 m-1 px-2 py-1 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:outline-none cursor-pointer`}
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
	if (nbPages === 1) return <></>;

	return (
		<nav aria-label="Pagination" className="flex justify-center m-2">
			{buildItems(nbPages, currentPage, setCurrentPage).map((item) => item)}
		</nav>
	);
};

export default Pagination;
