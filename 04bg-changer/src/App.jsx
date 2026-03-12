import { useState } from "react"

function App() {
  const [color, setColor] = useState("white")

  return (
      <div className="w-full h-screen duration-200 "
        style={{backgroundColor: color}}>
          <div className="fixed flex flex-wrap justify-center
          bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center
            gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
              <button 
              onClick={() => setColor("firebrick")}
              className="outline-none px-4 py-1 rounded-full
              text-white shadow-2xl"
              style={{backgroundColor: "firebrick"}}>brown
              </button>
              <button 
              onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full
              text-white shadow-2xl"
              style={{backgroundColor: "black"}}>Black
              </button>
              <button 
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full
              text-black shadow-2xl"
              style={{backgroundColor: "yellow"}}>Yellow
              </button>
              <button 
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full
              text-white shadow-2xl"
              style={{backgroundColor: "green"}}>Green
              </button>
              <button 
              onClick={() => setColor("royalblue")}
              className="outline-none px-4 py-1 rounded-full
              text-white shadow-2xl"
              style={{backgroundColor: "royalblue"}}>Blue
              </button>
              <button 
              onClick={() => setColor("plum")}
              className="outline-none px-4 py-1 rounded-full
              text-white shadow-2xl"
              style={{backgroundColor: "plum"}}>Plum
              </button>
              <button 
              onClick={() => setColor("mistyrose")}
              className="outline-none px-4 py-1 rounded-full
              text-black shadow-2xl"
              style={{backgroundColor: "mistyrose"}}>Pink
              </button>
              <button 
              onClick={() => setColor("coral")}
              className="outline-none px-4 py-1 rounded-full
              text-black shadow-2xl"
              style={{backgroundColor: "coral"}}>Coral
              </button>
              <button 
              onClick={() => setColor("olive")}
              className="outline-none px-4 py-1 rounded-full
              text-black shadow-2xl"
              style={{backgroundColor: "olive"}}>Olive
              </button>
            </div>
          </div>
      </div>
  )
}

export default App
