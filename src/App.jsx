import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Catalog from './Pages/Catalog';
import Cart from './Pages/Cart';
import Login from './Pages/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='catalog' element={<Catalog/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
