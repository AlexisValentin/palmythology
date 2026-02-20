"use client";

import type React from "react";
import ErrorPageLayout from "../src/components/domains/errors/ErrorPageLayout";
import type { ErrorProps } from "../src/components/hooks/useErrorHandler";
import { ERROR_500 } from "../src/utils/errors/errors.constants";

const GlobalError: React.FC<ErrorProps> = () => (
	<html lang="fr">
		<body>
			<ErrorPageLayout
				code={ERROR_500.code}
				title={ERROR_500.title}
				subtitle={ERROR_500.subtitle}
				illustration={ERROR_500.illustration}
				illustrationAlt={ERROR_500.illustrationAlt}
			/>
		</body>
	</html>
);

export default GlobalError;
