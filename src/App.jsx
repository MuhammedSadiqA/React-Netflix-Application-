import './App.css'
import Nav from './Component/Nav'
import Trends from './Component/Trends'
import Reasons from './Component/Reasons'

function App() {

  return (
    <>
   <div className='bg-black px-30 text-white'>
       <Nav/>
       <Trends/>
       <Reasons/>
   </div>
    </>
  )
}

export default App
