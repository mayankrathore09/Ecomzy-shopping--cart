import Navbar from './components/Navbar'
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Cart from './pages/Cart'
import Home from './pages/Home'

function App() {
  return (
    <div >
      <div className='bg-slate-900'>
        <Navbar></Navbar> 
      </div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
