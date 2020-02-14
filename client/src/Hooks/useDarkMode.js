import { useEffect, useState } from "react";
const useDarkMode = () => {
  const [value, setValue] = useState(true);

  useEffect(() => {
    const mode = document.querySelector("body");
    if (value ) {
      mode.classList.add("dark-mode");
    } else {
      mode.classList.remove("dark-mode");
    }
  }, [value]);

  return [value, setValue];
};

export default useDarkMode;
