import React, { useState, useMemo, useEffect } from "react";

export default function Memo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  let a = [1, 2];
  let b = a;
  console.log(`a == b : ${a == b}`);
  console.log(`a == b : ${a === b}`);

  //  const doubleNumber = slowFunction(number);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "green" : "blue",
      color: dark ? "blue" : "green",
    };
  }, [dark]);

  useEffect(() => {
    console.log("theme changed");
  }, [themeStyle]);

  return (
    <>
      <div className="bg-neutral">
        <div className="h-20 flex gap-5">
          <input
            className="text-blue-800 text-2xl"
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
          />
          <button
            className="p-5 btn btn-outline my-auto"
            onClick={() => setDark((prev) => !prev)}
          >
            Change Theme
          </button>
        </div>
        <div style={themeStyle}>{doubleNumber}</div>
      </div>
    </>
  );
}

function slowFunction(num) {
  console.log("calling slow function");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}
