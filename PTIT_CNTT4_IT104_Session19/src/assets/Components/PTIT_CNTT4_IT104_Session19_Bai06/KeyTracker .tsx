import React, { useEffect, useState } from "react";

export default function KeyTracker() {
  const [lastKey, setLastKey] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setLastKey(e.key);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <p> Nhấn một phím bất kỳ:</p>
      <h1>{lastKey ? lastKey : "Chưa có phím nào được nhấn"}</h1>
    </div>
  );
}
