// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import TestIcon from "../../assets/icons/anonymous.svg";
import Button from "./Button";

test("should trigger callback when clicking on the button", async () => {
	const alertMock = vi.spyOn(window, "alert").mockImplementation(vi.fn());
	const fakeOnClick = () => alert("I've been clicked!");

	render(<Button label="Coucou" color="black" onClick={fakeOnClick} />);

	await userEvent.click(screen.getByText("Coucou"));

	expect(alertMock).toHaveBeenCalledTimes(1);
});

test("should render icon if provided", async () => {
	render(
		<Button label="Coucou" color="black" onClick={vi.fn()} icon={TestIcon} />,
	);

	await userEvent.click(screen.getByText("Coucou"));

	expect(screen.getByText("Coucou")).toHaveTextContent("Coucou");
	expect(screen.getByRole("button")).toHaveTextContent(TestIcon);
});
