// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from "react";
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
import Terms_And_Conditions from './pages/Terms_And_Conditions'
import ProductDetails from './components/Products/ProductDetails';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
        fetch("https://dummyjson.com/products")
          .then((res) => res.json())
          .then((data) => {
              const items = data.products
              setProducts(items);
              setLoading(false)
              setError(false) 
          })
          .catch((err) => {
            setError(err.message)
            setLoading(false)
          })
  }, []);


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
          <Route path='/' element={ <Home products={products} loading={loading} error={error} /> } />
          <Route path='/categories/products/:id' element={ <ProductDetails products={products} error={error} loading={loading} /> } />
          <Route path='/shop' element={ <Shop /> } />
          <Route path='/cart' element={ <Cart /> } />
          <Route path='/account' element={ <Account /> } />
          <Route path='/checkout' element={ <Checkout /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/blog' element={ <Blogs /> } />
          <Route path='/terms_and_conditions' element={ <Terms_And_Conditions /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
