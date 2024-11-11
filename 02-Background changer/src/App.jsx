import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [color, setColor] = useState('#ffffff');
const green =()=>{   
  setColor('#166534')
} 
const red =()=>{ 
  setColor('#991b1b')
}

const blue =()=>{   
  setColor('#1e40af')
}


useEffect(() => {
  document.body.style.backgroundColor = color; // Change body background color
}, [color]); 
  return (
    <>
      <div className='flex absolute bottom-12  flex-wrap h-16 w-[60%] border-none rounded bg-[#e3e3e3] text-white justify-evenly  items-center '>
        <button onClick={red}  className='bg-red-800  h-9 border-2 rounded-full w-16'>red</button>
        <button onClick={blue} className='bg-blue-800 h-9 border-2 rounded-full w-16'>blue</button>
        <button onClick={green} className='bg-green-800 h-9 border-2 w-16 rounded-full'>green</button>
      </div>
    </>
  )
}

export default App
