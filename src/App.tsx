
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'


function App() {
 

  return (
    <>
      <BrowserRouter>
        <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>        
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
