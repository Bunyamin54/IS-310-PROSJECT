
import Navbar from './components/Navbar'
import Om_Oss from './components/Om_Oss'
import Medlemmer from './components/Medlemmer'
import Technologies from './components/Technologies'
import Projects from './components/Projects'

const App = () => {
  return (
       <div className='overflow-x-hidden text-neutral-300 antialiased  selection:bg-cyan-300 selection:text-cyan-900'>

        <div className='fixed top-0 left-0 w-screen h-screen -z-10 bg-neutral-950'></div>

        <div className="fixed top-0 left-0 w-screen h-screen z-[-9] bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>

          <div className='container mx-auto px-8'>

       <Navbar/>
       <Om_Oss/>
       <Medlemmer/>
       <Technologies/>
       <Projects/>
       
       
       </div>
       
    </div>
  )
}

export default App
