import { beforeEach, describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { apiContainer } from "../api";
import { Form, formContainer } from "./form";

describe("<Form />", () => {
  beforeEach(() => {
    formContainer.provide("EmailInput", () => <></>);
  });

  it("Should trigger auth on form submit", async () => {
    const authSpy = vi.fn();
    apiContainer.provide("auth", authSpy);
    const { queryByText } = render(<Form />);

    const submitButton = queryByText("submit")!;
    await userEvent.click(submitButton);

    expect(authSpy).toBeCalledTimes(1);
    expect(authSpy).toBeCalledWith(
      expect.objectContaining({ email: "", password: "" })
    );
  });
});
