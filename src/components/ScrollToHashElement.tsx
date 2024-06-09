import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// source code: https://github.com/ncoughlin/scroll-to-hash-element/blob/main/ScrollToHashElement.js
const ScrollToHashElement = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    const { hash } = location;

    const removeHashCharacter = (str: string) => {
      const result = str.slice(1);
      return result;
    };

    if (hash) {
      const element = document.getElementById(removeHashCharacter(hash));

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          inline: "nearest",
        });
      }
    }
  }, [location]);

  return null;
};

export default ScrollToHashElement;
