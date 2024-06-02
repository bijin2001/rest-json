import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './Components/Landing'
import View from './Components/View'



function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Landing />}/>  
      <Route path="/:id/view" element={<View />} />    
    </Routes>
    </>
  )
}

export default App
