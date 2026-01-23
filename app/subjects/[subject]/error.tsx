"use client";

/* Libs */
import type React from "react";
import SubjectList from "../../../src/components/domains/cards/SubjectList";
/* Components */
import PageHeader from "../../../src/components/generics/PageHeader";

/* Hooks */
import useErrorHandler, {
	type ErrorProps,
} from "../../../src/components/hooks/useErrorHandler";

const SubjectErrorPage: React.FC<ErrorProps> = ({ error }) => {
	const { title, subtitle } = useErrorHandler(error);

	return (
		<>
			<PageHeader title={title} subtitle={subtitle} />
			<SubjectList />
		</>
	);
};

export default SubjectErrorPage;
