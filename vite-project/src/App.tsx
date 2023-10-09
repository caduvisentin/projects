import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import CoffeeList from './pages/coffee-list';
import Coffee from './pages/coffee';
import NotFound from './pages/not-found';
import Navbar from './components/navbar';

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coffees' element={<CoffeeList />} />
        <Route path='/coffees/:coffee' element={<Coffee />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}


export default App
