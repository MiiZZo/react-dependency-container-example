import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react";
import { apiContainer } from "../api";
import { baseHooksContainer } from "../hooks";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export function EmailInput(props: Props) {
  const { isEmailFree, onEmailCheck } = apiContainer.get("useEmailCheck")();
  const debouncedEmailCheck = baseHooksContainer.get("useDebounce")(
    onEmailCheck,
    500
  );

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedEmailCheck(e.target.value);

    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <input
      style={{ color: isEmailFree === false ? "red" : "black" }}
      type="email"
      {...props}
      onChange={handleEmailChange}
    />
  );
}
