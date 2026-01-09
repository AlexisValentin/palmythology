"use client";

import type { GodleStats } from "../../../utils/godle/godle.types";

interface GodleStatisticsProps {
	statistics: GodleStats;
}

const GodleStatistics: React.FC<GodleStatisticsProps> = ({ statistics }) => (
	<div className="px-4 py-2">
		<div className="flex justify-between">
			<div className="text-center">
				<div className="text-3xl font-bold">{statistics.gamesPlayed}</div>
				<div className="text-sm text-neutral-600">Parties jouées</div>
			</div>
			<div className="text-center">
				<div className="text-3xl font-bold">{statistics.currentStreak}</div>
				<div className="text-sm text-neutral-600">Série actuelle</div>
			</div>
			<div className="text-center">
				<div className="text-3xl font-bold">{statistics.maxStreak}</div>
				<div className="text-sm text-neutral-600">Meilleure série</div>
			</div>
		</div>
	</div>
);
	

export default GodleStatistics;
