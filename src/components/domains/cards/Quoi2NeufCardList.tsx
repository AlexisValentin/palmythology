import type { FC } from "react";
import type { Quoi2NeufStoryType } from "../../../utils/cms/cms.constants";
import { setCardRouteParameters } from "../../../utils/routes/routes";
import PageHeader from "../../generics/PageHeader";
import PageSection from "../../generics/PageSection";

interface Q2NCardListProps {
	stories: Quoi2NeufStoryType[];
}

const Q2NCardList: React.FC<Q2NCardListProps> = ({ stories }) => (
	<>
		<PageHeader
			title="Quoi 2 Neuf ?"
			subtitle="Découvrez les fiches du moment !"
			fullDisplay
		/>
		<Q2NItemLists quoi2NeufStories={stories} />
	</>
);

interface Q2NItemListsProps {
	quoi2NeufStories: Quoi2NeufStoryType[];
}

const Q2NItemLists: FC<Q2NItemListsProps> = ({ quoi2NeufStories }) => {
	return (
		<div className="flex flex-col items-center gap-6 mt-12 px-4 sm:px-8 lg:px-16">
			{quoi2NeufStories.map((item) => {
				const { title, icon, pantheon, available, teasing } = item;
				const url = available
					? setCardRouteParameters(title, pantheon)
					: undefined;

				return (
					<PageSection
						key={`q2n-${title}-${pantheon}`}
						name={title}
						description={teasing}
						icon={icon}
						url={url}
						pantheon={pantheon}
					/>
				);
			})}
		</div>
	);
};

export default Q2NCardList;
