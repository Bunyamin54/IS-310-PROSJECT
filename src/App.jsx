import React from 'react'
import Navbar from './components/Navbar'
import Om_Oss from './components/Om_Oss'
import Prosjecter from './components/Prosjecter'
import Medlemmer from './components/Medlemmer'
import Technologies from './components/Technologies'

const App = () => {
  return (
    <div>
  
       <Navbar/>
       <Om_Oss/>
       <Medlemmer/>
       <Technologies/>
       <Prosjecter/>
 
    </div>
  )
}

export default App
