"use client";

import React from "react";

import PageHeader from "../../../src/components/generics/PageHeader";
import useErrorHandler, {
	ErrorProps,
} from "../../../src/components/hooks/useErrorHandler";

const Error: React.FC<ErrorProps> = ({ error }) => {
	const { title, subtitle } = useErrorHandler(error);

	return (
		<>
			<PageHeader title={title} subtitle={subtitle} />
		</>
	);
};

export default Error;
