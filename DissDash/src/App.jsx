import { useState } from 'react'
import Card from './components/Cards'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* navbar starts here */}
      <div className= 'bg-blue-500 w-full flex items-center justify-between p-4 '>
        
        <div className='text-white font-bold text-3xl mx-4'>DishDash.</div>


        <div >
          <ul className='flex space-x-10 text-cyan-50 '>
            <li className='hover:cursor-pointer hover:bg-cyan-50 hover:text-black rounded-2xl p-2'>Home</li>
            <li className='hover:cursor-pointer hover:bg-cyan-50 hover:text-black rounded-2xl p-2'>My Orders</li>
            <li className='hover:cursor-pointer hover:bg-cyan-50 hover:text-black rounded-2xl p-2'>Cart</li>
          </ul>
        </div>

        <div className='flex space-x-10 mx-4 text-cyan-50'>
          <button className='border p-2 rounded-xl bg-blue-500 hover:text-black hover:bg-cyan-50 hover:cursor-pointer'>Contact us</button>
          <button className='border p-2 rounded-xl bg-blue-500 hover:text-black hover:bg-cyan-50 hover:cursor-pointer'>Login/Signup</button>
        </div>



      </div>
      {/* navbar ends here */}

      {/* outlet cards  */}
      <div className='flex flex-wrap mt-20 mx-15 space-x-15'>
      <Card OutletName={"SOUTHERN_STORIES"}/ >
      <Card OutletName={"KATHI"}/ >
      <Card OutletName={"QUENCH"}/ >
      {/* <Card OutletName={"Snap_Eats"}/> */}
        
      </div>
      






    </>
  )
}

export default App
