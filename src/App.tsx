import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState<string>("");
  const [frequency, setFrequency] = useState<Record<string, number>>({});

  const frequencyArr = new Array(count.length * 2).fill(Object.entries(frequency).map((word,freq) =>word + ":" + freq))

  const onCheck = () => {
    const cleaned: Array<string> = count
      .split("")
      .map((c) => c.trim())
      .filter((w) => w.length > 0);
    const freee: Record<string, number> = cleaned.reduce((acc, i) => {
      acc[i] = (acc[i] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    setFrequency(freee)
  };
  return (
    <>
      <textarea name="" id="shit" security="" value={count}></textarea>
      <div>
        <button onClick={onCheck}></button>
      </div>

      {frequencyArr}
    </>
  );
}

export default App;
