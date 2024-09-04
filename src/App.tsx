import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='bg-gray-200 min-h-[68vh]'>
      
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
