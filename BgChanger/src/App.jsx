import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-500"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-10 px-5">
          <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-amber-50 px-5 py-3 rounded-4xl">
            <button
              className="outline-2 px-4 py-2 rounded-full text-black font-bold shadow-lg"
              style={{ backgroundColor: "Red" }}
              onClick={() => setColor("red")}
            >
              RED
            </button>

            <button
              className="outline-2 px-4 py-2 rounded-full text-black font-bold shadow-lg"
              style={{ backgroundColor: "Green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>

            <button
              className="outline-2 px-4 py-2 rounded-full text-black font-bold shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
