"use client";

/* Libs */
import type React from "react";
import PantheonList from "../../../src/components/domains/cards/PantheonList";
/* Components */
import PageHeader from "../../../src/components/generics/PageHeader";

/* Hooks */
import useErrorHandler, {
	type ErrorProps,
} from "../../../src/components/hooks/useErrorHandler";

const PantheonErrorPage: React.FC<ErrorProps> = ({ error }) => {
	const { title, subtitle } = useErrorHandler(error);

	return (
		<>
			<PageHeader title={title} subtitle={subtitle} />
			<PantheonList />
		</>
	);
};

export default PantheonErrorPage;
