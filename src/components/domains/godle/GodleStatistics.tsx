"use client";

import type { GodleStats } from "../../../utils/godle/godle.types";
import styles from "./GodleStatistics.module.scss";

interface GodleStatItemProps {
	value: number;
	label: string;
}

const GodleStatItem: React.FC<GodleStatItemProps> = ({ value, label }) => (
	<div className={styles.item}>
		<div className={styles.value}>{value}</div>
		<div className={styles.label}>{label}</div>
	</div>
);

interface GodleStatisticsProps {
	statistics: GodleStats;
}

const GodleStatistics: React.FC<GodleStatisticsProps> = ({ statistics }) => (
	<div className={styles.wrapper}>
		<div className={styles.row}>
			<GodleStatItem value={statistics.gamesPlayed} label="Parties" />
			<GodleStatItem value={statistics.currentStreak} label="Série" />
			<GodleStatItem value={statistics.maxStreak} label="Record" />
		</div>
	</div>
);

export default GodleStatistics;
