import { PantheonSelectType } from "../../../utils/cards/pantheons.constants";
import { SubjectSelectType } from "../../../utils/cards/subjects.constants";

interface SelectFilterProps {
	selectLabel: string;
	selectName: string;
	onChange: (selected: string) => void;
	options: PantheonSelectType[] | SubjectSelectType[];
}

const SelectFilter: React.FC<SelectFilterProps> = ({
	selectLabel,
	selectName,
	onChange,
	options,
}) => (
	<label className="block">
		<span className="block text-sm font-medium text-slate-700 mb-2">
			{selectLabel}
		</span>
		<select
			className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
			name={selectName}
			onChange={(e) => onChange(e.target.value)}
		>
			<option value={""} label={`--- ${selectLabel} ---`} />
			{options.map((option) => {
				const { label, value } = option;

				return <option key={`${label}-${value}`} value={value} label={label} />;
			})}
		</select>
	</label>
);

export default SelectFilter;
