import type { Quoi2NeufStoryType } from "../../../utils/cms/cms.constants";
import PageHeader from "../../generics/PageHeader";
import PageSquare, { CONTENT_TYPE } from "../../generics/PageSquare";

const Q2NCardList: React.FC<{ stories: any }> = ({ stories }) => (
	<>
		<PageHeader
			title="Quoi 2 Neuf ?"
			subtitle="Découvrez les fiches du moment !"
			fullDisplay
		/>
		<Q2NItemLists quoi2NeufStories={stories} />
	</>
);

const Q2NItemLists = ({
	quoi2NeufStories,
}: {
	quoi2NeufStories: Quoi2NeufStoryType[];
}) => {
	return (
		<div className="flex flex-row items-center">
			<div className="flex items-center justify-center flex-wrap mt-12">
				{quoi2NeufStories.map((item) => {
					const { title, subtitle, icon, pantheon, available } = item;

					return (
						<PageSquare
							key={`q2n-${title}-${subtitle}`}
							title={title}
							subtitle={subtitle}
							icon={icon}
							available={available}
							pantheon={pantheon}
							contentType={CONTENT_TYPE.CARD}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Q2NCardList;
