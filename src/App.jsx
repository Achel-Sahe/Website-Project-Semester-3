import { Routes, Route } from "react-router-dom"
import { SiteNavbar } from "./orang-1/navbar"
import Footer from "./orang-1/footer"
import Home from "./orang-3/home"
import {
  GunungPage,
  PantaiPage,
  CurugPage,
  TamanPage,
  KebunBinatangPage,
} from "./orang-3/destinations"

const App = () => {
  return (
    <>
      <SiteNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination/gunung" element={<GunungPage />} />
        <Route path="/destination/pantai" element={<PantaiPage />} />
        <Route path="/destination/curug" element={<CurugPage />} />
        <Route path="/destination/taman" element={<TamanPage />} />
        <Route path="/destination/kebun-binatang" element={<KebunBinatangPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App