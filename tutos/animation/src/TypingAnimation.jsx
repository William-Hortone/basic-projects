import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
const TypingAnimation = ({ text }) => {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    let index = 0;
    const textLength = text.length;

    const typeNextChar = () => {
      if (index < textLength) {
        setVisibleText((prevVisibleText) => {
          const nextChar = text.charAt(index);
          index += 1;
          return prevVisibleText + nextChar;
        });

        setTimeout(typeNextChar, 100);
      }
    };

    typeNextChar();

    return () => {
      clearTimeout(typeNextChar);
    };
  }, [text]);

  return (
    <div className="text">
      <div className="visibleText">
        {visibleText}
        {/* <span className="plus"></span> */}
      </div>
    </div>
  );
};

export default TypingAnimation;
