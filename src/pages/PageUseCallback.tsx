import React, { useCallback, useMemo, useState } from "react";

const CSS: React.CSSProperties = {
  fontSize: "1.4rem",
};

const PageUseCallback = () => {
  const memoedArr = useMemo(() => {
    let _arr: number[] = [];

    Array.from(Array(10)).forEach((i: number) => {
      _arr.push(Math.round(Math.random() * 9));
    });

    return _arr;
  }, []);

  const [count, setCount] = useState<number>(0);
  const [arr, setArr] = useState<number[]>(memoedArr);

  const renderRandomNumber = (val: number) => {
    const str: String = "0123456789";

    return str[val];
  };

  const renderRandomNumbers = () => {
    return arr.map((i: number, index: number) => {
      return (
        <div key={index} style={CSS}>
          {renderRandomNumber(i)}
        </div>
      );
    });
  };

  return (
    <div>
      <p style={{ ...CSS, fontWeight: "bold" }}>증가된 값: {count}</p>

      {renderRandomNumbers()}
      <button onClick={() => setCount((state: number) => state + 1)}>
        증가
      </button>
    </div>
  );
};

export default PageUseCallback;
