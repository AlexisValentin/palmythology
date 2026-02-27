import { ALL_PANTHEON } from "../../../utils/cards/pantheons.constants";
import PageSquare, { CONTENT_TYPE } from "../../generics/PageSquare";
import styles from "./PantheonList.module.scss";

const PantheonsList = () => (
	<div className={styles.list}>
		{ALL_PANTHEON.map((pantheon) => (
			<PageSquare
				title={pantheon.label}
				pantheon={pantheon.value}
				key={`pantheon-${pantheon.value}`}
				icon={{
					alt: `Icône du panthéon ${pantheon.label}`,
					filename: pantheon.icon,
				}}
				contentType={CONTENT_TYPE.PANTHEON}
			/>
		))}
	</div>
);

export default PantheonsList;
