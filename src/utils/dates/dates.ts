const PARIS_TIMEZONE = "Europe/Paris";

const parseFrenchDate = (frenchDate: string): string => {
	const [day, month, year] = frenchDate.split("/");

	return `${year}-${month}-${day}`;
};

export const getParisDateString = (date: Date = new Date()): string => {
	const frenchDate = date.toLocaleDateString("fr-FR", {
		timeZone: PARIS_TIMEZONE,
	});

	return parseFrenchDate(frenchDate);
};

export const getDaysSinceDate = (epochDate: string): number => {
	const todayParis = getParisDateString();

	const todayTimestamp = new Date(`${todayParis}T00:00:00`).getTime();
	const epochTimestamp = new Date(`${epochDate}T00:00:00`).getTime();

	const diffMs = todayTimestamp - epochTimestamp;

	return Math.floor(diffMs / (24 * 60 * 60 * 1000));
};

export const getTimeUntilNextGame = (): string => {
	const now = new Date();
	const todayParis = getParisDateString(now);

	const tomorrowParis = new Date(`${todayParis}T00:00:00`);
	tomorrowParis.setDate(tomorrowParis.getDate() + 1);

	const parisOffset = getParisOffsetMs(now);
	const midnightParisUtc = tomorrowParis.getTime() - parisOffset;

	const diff = midnightParisUtc - now.getTime();
	const hours = Math.floor(diff / (1000 * 60 * 60));
	const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

	return `${hours}h ${minutes}m`;
};

const parseFrenchDateTime = (frenchDateTime: string): Date => {
	const [datePart, timePart] = frenchDateTime.split(" ");
	const [day, month, year] = datePart.split("/");
	const [hours, minutes, seconds] = timePart.split(":");

	return new Date(
		Number(year),
		Number(month) - 1,
		Number(day),
		Number(hours),
		Number(minutes),
		Number(seconds),
	);
};

const getParisOffsetMs = (date: Date): number => {
	const utcString = date.toLocaleString("fr-FR", { timeZone: "UTC" });
	const parisString = date.toLocaleString("fr-FR", {
		timeZone: PARIS_TIMEZONE,
	});

	const utcDate = parseFrenchDateTime(utcString);
	const parisDate = parseFrenchDateTime(parisString);

	return parisDate.getTime() - utcDate.getTime();
};

export const getDayMonthYearFormat = (
	date: Date,
): { day: string; month: string; year: string } => {
	const day = date.getDate().toString().padStart(2, "0");
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const year = date.getFullYear().toString();

	return { day, month, year };
};

export const getParisDate = (): Date => {
	const parisString = new Date().toLocaleString("fr-FR", {
		timeZone: PARIS_TIMEZONE,
	});

	return parseFrenchDateTime(parisString);
};

export const isMidnightInParis = (): boolean => getParisDate().getHours() === 0;
