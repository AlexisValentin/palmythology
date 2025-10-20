export interface ButtonProps {
	label: string;
	color: string;
	onClick: () => void;
	icon?: string;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	label,
	color,
	onClick,
	icon,
	className = "",
}) => (
	<button
		className={`bg-${color} text-white rounded-lg hover:opacity-75 ${className}`}
		onClick={onClick}
	>
		<div className="m-2">
			{icon && <span>{icon}</span>}
			<span>{label}</span>
		</div>
	</button>
);

export default Button;
