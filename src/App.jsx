import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routers from './Routes'

function App() {

  return (
   <BrowserRouter>
      <Routers/>
   </BrowserRouter>
  )
}

export default App
