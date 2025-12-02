import './App.css'
import Nav from './Component/Nav'
import Trends from './Component/Trends'
import Reasons from './Component/Reasons'
import Questions from './Component/Questions'
import Subscription from './Component/Subscription'


function App() {

  return (
    <>
   <div className='bg-black px-30 text-white'>
       <Nav/>
       <Trends/>
       <Reasons/>
       <Questions/>
       <Subscription/>
   </div>
    </>
  )
}

export default App
