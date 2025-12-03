import './App.css'
import Nav from './Component/Nav'
import Trends from './Component/Trends'
import Reasons from './Component/Reasons'
import Questions from './Component/Questions'
import Footer from './Component/Footer'


function App() {

  return (
    <>
   <div className='bg-black px-30 text-white'>
       <Nav/>
       <Trends/>
       <Reasons/>
       <Questions/>
       <Footer/>
   </div>
    </>
  )
}

export default App
