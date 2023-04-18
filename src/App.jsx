// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Account from './pages/Account'
import Blogs from './pages/Blogs'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Shop from './pages/Shop'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/shop' element={ <Shop /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/cart' element={ <Cart /> } />
          <Route path='/account' element={ <Account /> } />
          <Route path='/checkout' element={ <Checkout /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/blogs' element={ <Blogs /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
