import styles from "./Button.module.scss";

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
		style={{ "--button-bg": bgColor } as React.CSSProperties}
		className={`${styles.button} ${className}`}
		onClick={onClick}
	>
		<div className={styles.inner}>
			{icon && <span>{icon}</span>}
			<span>{label}</span>
		</div>
	</button>
);

export default Button;
