
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className='h-screen w-full duration-200'
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap  justify-center bottom-11'>
        <div className='flex flex-wrap bg-white gap-3  justify-center shadow-sm p-3 rounded-full'>
          <button onClick={() => setColor  ("red")} className='outline-none px-4 text-xl rounded-md text-white'
            style={{ backgroundColor: ("red") }}>red</button>
          <button onClick={() => setColor  ("green")} className='outline-none px-4 text-xl rounded-md text-white'
            style={{ backgroundColor: "green" }}>green</button>
          <button onClick={() => setColor  ("blue")} className='outline-none px-4 text-xl rounded-md text-white'
            style={{ backgroundColor: "blue" }}>blue</button>
          <button onClick={() => setColor  ("black")} className='outline-none px-4 text-xl rounded-md text-white '
            style={{ backgroundColor: "black" }}>black</button>
            <button onClick={() => setColor  ("yellow")} className='outline-none px-4 text-xl rounded-md text-white '
            style={{ backgroundColor: "yellow" }}>yellow</button>
        
        </div>
      </div>
    </div>

  )
}

export default App
