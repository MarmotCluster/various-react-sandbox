import React, { useCallback, useEffect, useMemo, useRef } from "react";

const OnKeydownFocus = () => {
  const ref = useRef<HTMLInputElement>(null);

  const onKeydownHandler = useCallback((e: KeyboardEvent) => {
    if (e.key === "/") {
      if (document.activeElement !== ref.current) {
        e.preventDefault();
      }
      ref.current!.focus();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", onKeydownHandler);

    return () => {
      document.removeEventListener("keydown", onKeydownHandler);
    };
  }, []);

  return (
    <div>
      <input ref={ref} type="text" placeholder="press '/' to focus" />
    </div>
  );
};

export default OnKeydownFocus;
