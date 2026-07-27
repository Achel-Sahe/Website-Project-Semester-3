import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './page/home.jsx'
import About from './page/about.jsx'
import React from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    const lenis = window.lenis
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])
  return null
}
import './App.css'
import './orang-1/orang1.css'
import './responsif.css'
import Destinasi from './page/destinasi.jsx'
import { PersonalWisata } from './page/personalWisata.jsx'
import Galeri from './page/galeri.jsx'

const App = () => {
  return (
    <div className='app'>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/destination" element={<Destinasi />} />
        <Route path="/pw/:name" element={<PersonalWisata />} />
      </Routes>
    </div>
  )
}

export default App