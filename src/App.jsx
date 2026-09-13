import { useEffect } from 'react'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import Home from './page/home.jsx'
import About from './page/about.jsx'
import React from 'react'
import { SiteNavbar } from './dev-1/navbar'
import Footer from './dev-1/footer'

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
import './dev-1/dev1.css'
import './responsif.css'
import Destinasi from './page/destinasi.jsx'
import { PersonalWisata } from './page/personalWisata.jsx'
import Galeri from './page/galeri.jsx'

function Layout() {
  return (
    <>
      <SiteNavbar />
      <Outlet />
      <Footer />
    </>
  )
}

const App = () => {
  return (
    <div className='app'>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/destination" element={<Destinasi />} />
          <Route path="/pw/:name" element={<PersonalWisata />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App