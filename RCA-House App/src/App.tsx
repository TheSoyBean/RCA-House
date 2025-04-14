import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./Home"
import Leaderboard from './leaderboard'
import Profile from './profile'
import Store from './Store'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/leaderboard" element = {<Leaderboard/>} />
        <Route path = "/profile" element = {<Profile/>} />
        <Route path = "/store" element = {<Store />} />
    </Routes>
    </BrowserRouter>
  )
}
