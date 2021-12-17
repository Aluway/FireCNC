import { useState } from "react";
// handle any onChange input that needs to be controlled

const useControlledInput = (initValue) => {
  const [value, setValue] = useState(initValue);
  return {
    value: value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };
};

export default useControlledInput;
