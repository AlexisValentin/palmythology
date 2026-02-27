import type { CardDetails } from "../../../utils/cards/card.constants";
import PageSquare, { CONTENT_TYPE } from "../../generics/PageSquare";
import styles from "./LPCardList.module.scss";

interface LPCardListProps {
	cards: CardDetails[];
}

const LPCardList: React.FC<LPCardListProps> = ({ cards }) => (
	<>
		{cards && cards.length > 0 && (
			<div className={styles.container}>
				<div className={styles.list}>
					{cards.map((card: CardDetails) => (
						<PageSquare
							key={`${card.name}-${card.subtitle}`}
							title={card.name}
							subtitle={card.subtitle}
							pantheon={card.pantheon}
							icon={card.icon}
							contentType={CONTENT_TYPE.CARD}
						/>
					))}
				</div>
			</div>
		)}
	</>
);

export default LPCardList;
