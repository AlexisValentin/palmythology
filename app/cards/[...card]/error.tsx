"use client";

import type React from "react";
import ErrorPageLayout from "../../../src/components/domains/errors/ErrorPageLayout";
import useErrorHandler, {
	type ErrorProps,
} from "../../../src/components/hooks/useErrorHandler";
import { getErrorContent } from "../../../src/utils/errors/errors.constants";

const CardErrorPage: React.FC<ErrorProps> = ({ error }) => {
	const { httpCode } = useErrorHandler(error);
	const errorContent = getErrorContent(httpCode);

	return (
		<ErrorPageLayout
			code={errorContent.code}
			title={errorContent.title}
			subtitle={errorContent.subtitle}
			illustration={errorContent.illustration}
			illustrationAlt={errorContent.illustrationAlt}
		/>
	);
};

export default CardErrorPage;
