"use client";

import ErrorPageLayout from "../src/components/domains/errors/ErrorPageLayout";
import { ERROR_404 } from "../src/utils/errors/errors.constants";

const NotFoundPage = () => (
	<ErrorPageLayout
		code={ERROR_404.code}
		title={ERROR_404.title}
		subtitle={ERROR_404.subtitle}
		illustration={ERROR_404.illustration}
		illustrationAlt={ERROR_404.illustrationAlt}
	/>
);

export default NotFoundPage;
