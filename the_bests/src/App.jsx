import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'

import Search from './pages/Search'

import { Link } from 'react-router-dom'
import NavBar from './components/NavBar'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <div className="App">

      <NavBar></NavBar>

      <Outlet />
    </div>
  )
}

export default App
