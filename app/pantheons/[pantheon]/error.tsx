"use client";

import type React from "react";
import PantheonList from "../../../src/components/domains/cards/PantheonList";
import ErrorPageLayout from "../../../src/components/domains/errors/ErrorPageLayout";
import useErrorHandler, {
	type ErrorProps,
} from "../../../src/components/hooks/useErrorHandler";
import { getErrorContent } from "../../../src/utils/errors/errors.constants";

const PantheonErrorPage: React.FC<ErrorProps> = ({ error }) => {
	const { httpCode } = useErrorHandler(error);
	const errorContent = getErrorContent(httpCode);

	return (
		<ErrorPageLayout
			code={errorContent.code}
			title={errorContent.title}
			subtitle={errorContent.subtitle}
			illustration={errorContent.illustration}
			illustrationAlt={errorContent.illustrationAlt}
		>
			<PantheonList />
		</ErrorPageLayout>
	);
};

export default PantheonErrorPage;
