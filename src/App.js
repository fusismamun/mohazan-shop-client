import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Footer from './Shared/Footer';
import Products from './Products/Products';
import Dashboard from './SideCatagoris/Dashboard';
import Iteams from './Products/Iteams';
import Mobile from './InsideCatagories/Mobile';
import InsideCatagories from './InsideCatagories/InsideCatagories';
import Car from './CarCatagoris/Car';
import WomenFashion from './Women_Fashion/WomenFashion';
import Hobbies from './Hobbies/Hobbies';
import Orders from './Orders/Orders';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='home' element={<Home></Home>}/>
          <Route path='mobile' element={<Mobile></Mobile>}></Route>
          <Route path='car' element={<Car></Car>}> </Route>
          <Route path='women-fashion' element={<WomenFashion></WomenFashion>}> </Route>
          <Route path='hobbies' element={<Hobbies></Hobbies>}> </Route>
          <Route path='order' element={<Orders></Orders>}></Route>

        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
