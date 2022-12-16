import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface ScrollEventTarget {
  target: HTMLElement | null;
}

const PageImageSlide = () => {
  const ref = useRef<null | HTMLParagraphElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [mdPosition, setMdPosition] = useState<{ x: Number; y: Number }>({
    x: 0,
    y: 0,
  });

  const onMouseHandler = (e: MouseEvent) => {
    // console.log(e.type);
    // console.log(rref.scrollLeft + e.clientX);
    if (e.type === "mousedown") {
      setIsMouseDown(true);
      setMdPosition({
        x: e.clientX + (e.target as HTMLElement).scrollLeft,
        y: e.clientY,
      });
    }
    if (e.type === "mouseup") {
      setIsMouseDown(false);
    }
    if (e.type === "mousemove") {
      if (isMouseDown) {
        // console.log(mdPosition);
        console.log(e.clientX - Number(mdPosition.x));
      }
    }
  };

  useEffect(() => {
    const rref = ref.current as HTMLElement;

    const onScrollHandler = (e: Event) => {
      // console.log((e.target as HTMLElement).scrollLeft);
      if (isMouseDown === true) {
        // console.log(mdPosition);
        // (e.target as HTMLElement).scrollLeft = mdPosition
      }
    };

    window.addEventListener("scroll", onScrollHandler, { passive: true });
    rref.addEventListener("scroll", onScrollHandler);

    return () => {
      window.removeEventListener("scroll", onScrollHandler);
      rref.removeEventListener("scroll", onScrollHandler);
    };
  }, [isMouseDown]);

  useEffect(() => {
    const rref = ref.current as HTMLElement;

    rref.addEventListener("mousedown", onMouseHandler);
    window.addEventListener("mouseup", onMouseHandler);
    rref.addEventListener("mousemove", onMouseHandler);

    return () => {
      rref.removeEventListener("mousedown", onMouseHandler);
      window.removeEventListener("mouseup", onMouseHandler);
      rref.removeEventListener("mousemove", onMouseHandler);
    };
  }, [isMouseDown]);

  const getColor = useCallback((): Number => {
    return Math.round(Math.random() * 9);
  }, []);

  const renderBlocks = useMemo(() => {
    return Array.from(Array(20).keys()).map((i: number, index: number) => {
      return (
        <div
          key={index}
          className="image-slide-item"
          style={{
            backgroundColor: `#${getColor()}${getColor()}${getColor()}`,
          }}
        ></div>
      );
    });
  }, []);

  return (
    <>
      <div ref={ref} className="image-slide">
        {renderBlocks}
      </div>
      <p>SUCCEED USING useMemo()!</p>
    </>
  );
};

export default PageImageSlide;
