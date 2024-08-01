import React from 'react'
import Navbar from './components/Navbar'
import Om_Oss from './components/Om_Oss'
import Prosjecter from './components/Prosjects'
import Medlemmer from './components/Medlemmer'
import Technologies from './components/Technologies'
import Prosjects from './components/Prosjects'

const App = () => {
  return (
    <div>
  
       <Navbar/>
       <Om_Oss/>
       <Medlemmer/>
       <Technologies/>
       <Prosjects/>
 
    </div>
  )
}

export default App
