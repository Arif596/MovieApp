import {Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Component/Home'
import Singalmovie from './Component/Singalmovie'
import Error from './Component/Error'
import Search from './Component/Search'
function App() {
  return (
    <div>
      <h1>
        <Search/>
      <Routes>
        <Route path='/'element={<Home/>}> </Route>
        <Route path='/singalmovie/:id' element={<Singalmovie/>}> </Route>
        <Route path='*'element={<Error/>}></Route>
      </Routes>
      </h1>
    </div>
  )
}

export default App
