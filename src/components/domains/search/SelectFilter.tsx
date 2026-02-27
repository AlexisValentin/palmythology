import type { GenreSelectType } from "../../../utils/cards/genres.constants";
import type { PantheonSelectType } from "../../../utils/cards/pantheons.constants";
import type { SubjectSelectType } from "../../../utils/cards/subjects.constants";
import styles from "./SelectFilter.module.scss";

interface SelectFilterProps {
	selectLabel: string;
	selectName: string;
	value?: string;
	onChange: (selected: string) => void;
	options: PantheonSelectType[] | SubjectSelectType[] | GenreSelectType[];
}

const SelectFilter: React.FC<SelectFilterProps> = ({
	selectLabel,
	selectName,
	value,
	onChange,
	options,
}) => (
	<label className={styles.label}>
		<span className={styles.labelText}>{selectLabel}</span>
		<select
			className={styles.select}
			name={selectName}
			value={value}
			onChange={(e) => onChange(e.target.value)}
		>
			<option value={""} label={`- ${selectLabel} -`} />
			{options.map((option) => {
				const { label, value } = option;

				return <option key={`${label}-${value}`} value={value} label={label} />;
			})}
		</select>
	</label>
);

export default SelectFilter;
