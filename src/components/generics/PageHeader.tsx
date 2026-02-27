import styles from "./PageHeader.module.scss";

interface PageHeaderProps {
	title: string;
	subtitle?: string;
	upperGap?: boolean;
	fullDisplay?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({
	title,
	subtitle,
	upperGap = true,
	fullDisplay = false,
}) => (
	<div
		className={`${styles.container} ${upperGap ? styles.containerWithUpperGap : styles.containerNoUpperGap}`}
	>
		<h1 className={styles.title}>{title}</h1>
		{subtitle && (
			<div className={`${styles.subtitleWrapper} ${fullDisplay ? styles.fullDisplay : ""}`}>
				<h2 className={styles.subtitle}>{subtitle}</h2>
			</div>
		)}
	</div>
);

export default PageHeader;
