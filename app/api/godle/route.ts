import { type NextRequest, NextResponse } from "next/server";
import { getDayMonthYearFormat, getParisDate } from "../../../src/utils/dates/dates";
import { getYesterdayEntity } from "../../../src/utils/godle";

type DiscordEmbed = {
	title: string;
	description: string;
	color: number;
	fields?: { name: string; value: string; inline?: boolean }[];
	footer?: { text: string };
	timestamp?: string;
	url?: string;
};

const sendDiscordEmbed = async (
	webhookUrl: string,
	embed: DiscordEmbed,
): Promise<boolean> => {
	const response = await fetch(webhookUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			embeds: [embed],
		}),
	});

	return response.ok;
};

export const GET = async (request: NextRequest) => {
	try {
		const secret = request.nextUrl.searchParams.get("secret");

		if (secret !== process.env.CRON_SECRET) {
			return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
		}

		const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
		
		if (!webhookUrl) {
			return NextResponse.json(
				{ message: "Discord webhook URL not configured" },
				{ status: 500 },
			);
		}

		const yesterdayEntity = await getYesterdayEntity();

		if (!yesterdayEntity) {
			return NextResponse.json(
				{ message: "No yesterday entity available" },
				{ status: 200 },
			);
		}

		const parisYesterday = getParisDate();
		parisYesterday.setDate(parisYesterday.getDate() - 1);
		const { day, month, year } = getDayMonthYearFormat(parisYesterday);

		const embed: DiscordEmbed = {
			title: `⏰ Le Godle du **${day}/${month}/${year}** est terminé !`,
			description: `L'entité à trouver était **${yesterdayEntity.name}**.\n\n🔎 Nouvelle entité à trouver dès maintenant. Bonne chance !`,
			color: 0xfdc103,
			url: "https://palmythology.com/godle",
			footer: {
				text: "palmythology.com/godle",
			},
			timestamp: new Date().toISOString(),
		};

		const success = await sendDiscordEmbed(webhookUrl, embed);

		if (!success) {
			return NextResponse.json(
				{ message: "Failed to send Discord webhook" },
				{ status: 500 },
			);
		}

		return NextResponse.json(
			{ message: "Discord webhook sent successfully", entity: yesterdayEntity.name },
			{ status: 200 },
		);
	} catch (error) {
		console.error("Error sending Godle webhook:", error);
		
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 },
		);
	}
};
