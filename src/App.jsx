

import './App.css'
import Home from './Component/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
    
    <div className="App  dark:bg-gray-950 bg-white dark:text-white  font-raleway">

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

       
    </div>


  </BrowserRouter>
  )
}

export default App
