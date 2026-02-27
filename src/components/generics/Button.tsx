export interface ButtonProps {
	label: string;
	bgColor: string;
	onClick: () => void;
	icon?: string;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	label,
	bgColor,
	onClick,
	icon,
	className = "",
}) => (
	<button
		type="button"
		className={`${bgColor} text-white rounded-lg hover:opacity-75 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:outline-none ${className} cursor-pointer`}
		onClick={onClick}
	>
		<div className="m-2">
			{icon && <span>{icon}</span>}
			<span>{label}</span>
		</div>
	</button>
);

export default Button;
