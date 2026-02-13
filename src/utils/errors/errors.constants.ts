import type { StaticImageData } from "next/image";
import ForbiddenIcon from "../../assets/icons/http/403.svg";
import NotFoundIcon from "../../assets/icons/http/404.svg";
import ErrorIcon from "../../assets/icons/http/500.svg";

export interface ErrorContent {
		code: number;
		title: string;
		subtitle: string;
		illustration: StaticImageData;
		illustrationAlt: string;
	}

export const ERROR_404: ErrorContent = {
	code: 404,
	title: "On dirait qu'il y a comme un couac !",
	subtitle:
		"Même Hermès, messager des dieux, ne sait pas où cette page est passée !",
	illustration: NotFoundIcon,
	illustrationAlt:
		"Icône représentant le nombre 404 avec une croix à la place du 0",
};

export const ERROR_403: ErrorContent = {
	code: 403,
	title: "Halte là, mortel !",
	subtitle:
		"Cerbère garde bien son domaine. Seuls les dieux et les âmes des défunts peuvent passer ici.",
	illustration: ForbiddenIcon,
	illustrationAlt:
		"Icône représentant un écran d'ordinateur avec un bouclier jaune",
};

export const ERROR_500: ErrorContent = {
	code: 500,
	title: "Le ciel nous tombe sur la tête !",
	subtitle:
		"Même les oracles n'ont pas vu venir cette erreur ! Le Palmypède mène l'enquête...",
	illustration: ErrorIcon,
	illustrationAlt: "Icône représentant une page web se déchirant",
};

export const ERROR_DEFAULT: ErrorContent = {
	code: 0,
	title: "Les forces du chaos ont envahi le site web.",
	subtitle:
		"Pas de paniques ! Les divinités et les héros vont venir nous sauver !",
	illustration: ErrorIcon,
	illustrationAlt: "Icône représentant une page web se déchirant",
};

export const getErrorContent = (httpCode: number): ErrorContent => {
	switch (httpCode) {
		case 403:
			return ERROR_403;
		case 404:
			return ERROR_404;
		case 500:
			return ERROR_500;
		default:
			return ERROR_DEFAULT;
	}
};
