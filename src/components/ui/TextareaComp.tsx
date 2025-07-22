"use client";

import React, { useEffect, useRef } from "react";

type TextareaType = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextareaComp = (props: TextareaType) => {
  const { className, ...rest } = props;
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // auto-resizing logic
  const resize = () => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resize);

    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const handleInput = () => {
    resize();
  };

  const combinedClassName = `resize-none overflow-hidden ${className || ""}`;

  return (
    <textarea
      // pass all props except for className and onInput
      {...rest}
      ref={textareaRef}
      className={combinedClassName}
      onInput={handleInput}
      rows={1}
      maxLength={200}
    />
  );
};

export default TextareaComp;
