/* Components */
import PageSquare, { CONTENT_TYPE } from "../../generics/PageSquare";

/* Constants */
import { ALL_PANTHEON } from "../../../utils/cards/pantheons.constants";

const PantheonsList = () => (
	<div className="flex flex-col items-center justify-center flex-wrap md:flex-row mt-4">
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
