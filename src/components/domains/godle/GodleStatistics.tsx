"use client";

import type { GodleStats } from "../../../utils/godle/godle.types";

interface GodleStatItemProps {
	value: number;
	label: string;
}

const GodleStatItem: React.FC<GodleStatItemProps> = ({ value, label }) => (
	<div className="text-center flex-1">
		<div className="text-2xl md:text-3xl font-bold">{value}</div>
		<div className="text-xs md:text-sm text-neutral-600">{label}</div>
	</div>
);

interface GodleStatisticsProps {
	statistics: GodleStats;
}

const GodleStatistics: React.FC<GodleStatisticsProps> = ({ statistics }) => (
	<div className="px-2 md:px-4 py-2">
		<div className="flex justify-between gap-2">
			<GodleStatItem value={statistics.gamesPlayed} label="Parties" />
			<GodleStatItem value={statistics.currentStreak} label="Série" />
			<GodleStatItem value={statistics.maxStreak} label="Record" />
		</div>
	</div>
);

export default GodleStatistics;
