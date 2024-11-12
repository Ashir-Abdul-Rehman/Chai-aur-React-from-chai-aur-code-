import './App.css'

function App() {

  return (
    <>
    <h1 className='text-3xl font-bold underline text-center ' >Password Genrator</h1>
    <div className='flex justify-center mt-6'>
    <div className="div mt-6 flex items-center justify-center bg-[#3d3d3d] w-[600px] rounded-sm flex-wrap">
      <h3 className='h-12 border-none w-[486.389px] bg-[#000000a6] pt-3 rounded-l-md '>Password</h3>
      <button className='bg-black text-white h-12 w-auto border-none rounded-r-md '><svg className='w-12 h-12 p-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4V2H17V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H7ZM7 6H5V20H19V6H17V8H7V6ZM9 4V6H15V4H9Z"></path></svg></button>
      <div className='mt-8 flex justify-center flex-wrap'>
      <input type="range" name="" id="" className='mr-2' />
      <p>{"length ( )"}</p>
      <input type="checkbox" name="" id="num" className='ml-2' /> <label htmlFor="num" className='ml-2'>Name</label>
      <input type="checkbox" name="" id="char" className='ml-2' /> <label htmlFor="char" className='ml-2'>Chracters</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
