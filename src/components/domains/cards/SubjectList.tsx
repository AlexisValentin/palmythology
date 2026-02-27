import { ALL_SUBJECT } from "../../../utils/cards/subjects.constants";
import PageSquare, { CONTENT_TYPE } from "../../generics/PageSquare";
import styles from "./SubjectList.module.scss";

const SubjectList: React.FC = () => (
	<div className={styles.list}>
		{ALL_SUBJECT.map((subject) => (
			<PageSquare
				title={subject.label}
				subject={subject.value}
				key={`subject-${subject.value}`}
				icon={{
					alt: `Icône du sujet ${subject.label}`,
					filename: subject.icon,
				}}
				contentType={CONTENT_TYPE.SUBJECT}
			/>
		))}
	</div>
);

export default SubjectList;
