import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Catalog from './Pages/Catalog';
import Cart from './Pages/Cart';
import Profile from './Pages/Profile';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='catalog' element={<Catalog/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
