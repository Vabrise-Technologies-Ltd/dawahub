// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import TopNav from './components/TopNav'
import Account from './pages/Account'
import Blogs from './pages/Blogs'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import Shop from './pages/Shop'
import Signup from './pages/Signup'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <div className='top-0 sticky z-[100]'>
          <TopNav />
          <Navbar />
        </div>
        <Routes>
          <Route path='/login' element={ <Login /> } />
          <Route path='/signup' element={ <Signup /> } />
          <Route path='/' element={ <Home /> } />
          <Route path='/shop' element={ <Shop /> } />
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
