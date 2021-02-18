import { Container } from "./styles";
import { Icon } from "./styles";

import { IInputProps } from "./index.d";
import { EnumDictionary } from "./index.d";
import { INPUT_TYPE } from "./index.d";

const INPUT_TYPE_DICTIONARY: EnumDictionary<INPUT_TYPE, string> = {
  [INPUT_TYPE.EMAIL]: "text",
  [INPUT_TYPE.PASSWORD]: "password",
};

function Input({
  isValid,
  onChangeCallback,
  placeholder,
  type,
  ...props
}: IInputProps): JSX.Element {
  return (
    <Container isValid={isValid}>
      <input
        type={INPUT_TYPE_DICTIONARY[type]}
        placeholder={placeholder}
        onChange={onChangeCallback}
        {...props}
      />
      {isValid !== undefined && isValid === false && (
        <Icon src="/assets/x.svg" />
      )}
    </Container>
  );
}

export default Input;
