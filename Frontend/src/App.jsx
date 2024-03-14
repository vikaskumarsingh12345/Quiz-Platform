import React from 'react'
import Header from './Components/Header/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './index.css'
import Home from './Components/Home/Home'

import Layout from './Layout'
import About from './Components/About/About'

import CreateQuiz from './Components/CreateQuiz/CreateQuiz'
import JoinQuiz from './Components/JoinQuiz/JoinQuiz'
import CreatedQuizes from './Components/Cards/CreatedQuizes'
import JoinedQuizes from './Components/Cards/JoinedQuizes'
 
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/CreateQuiz" element={<CreateQuiz/>}/>
            <Route path="/JoinQuiz" element={<JoinQuiz/>}/>
            <Route path="/CreatedQuizes" element={<CreatedQuizes/>}/>
            <Route path="/JoinedQuizes" element={<JoinedQuizes/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App