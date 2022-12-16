import React, { useMemo, useState } from "react";

const DirectMemo = () => {
  const [state, setState] = useState<number | string>(
    `${Math.round(Math.random() * 9 + 1)}`
  );

  const temp = Math.round(Math.random() * 9 + 1);
  const memo = useMemo(() => Math.round(Math.random() * 9 + 1), []);

  return (
    <div>
      <h1>
        {temp} {memo}
      </h1>
      <button onClick={() => setState("yo")}>refresh</button>
    </div>
  );
};

export default DirectMemo;
