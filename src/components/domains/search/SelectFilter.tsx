import type { GenreSelectType } from "../../../utils/cards/genres.constants";
import type { PantheonSelectType } from "../../../utils/cards/pantheons.constants";
import type { SubjectSelectType } from "../../../utils/cards/subjects.constants";

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
	<label className="block">
		<span className="block text-base font-medium text-neutral-700 mb-2">
			{selectLabel}
		</span>
		<select
			className="w-full px-4 py-3 md:px-5 md:py-4 border-2 border-neutral-300 rounded-xl focus:border-pink-400 focus:ring-4 focus:ring-pink-400/20 focus:outline-none transition-all duration-200 text-base font-medium shadow-sm focus:shadow-md cursor-pointer bg-white"
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
