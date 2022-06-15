import { ChangeEvent, useEffect, useState } from "react";

const useInput = (validate: any, initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  const valueIsValid = validate && validate(value);

  useEffect(() => {
    setValue(() => initialValue);
  }, [initialValue]);

  const valueInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(`${event?.target?.value ?? event}`);
  };

  return {
    value,
    valueInputChange,
    valueIsValid,
  };
};

export default useInput;
