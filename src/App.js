import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import ShowProducts from '../src/Components/ShowProducts/ShowProducts'
import CreateStore from './Components/CreateStore/CreateStore';
import { Route, Routes } from 'react-router';
import Navbar from './Components/Navbar';
import ShowSingleProduct from './Components/ShowProducts/ShowSingleProduct';


function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route index element={<CreateStore />} />
        <Route path='/products'  element={<ShowProducts />} />
        <Route path="/product/:id" element={<ShowSingleProduct />} />
      </Routes>

      {/* <ShowProducts></ShowProducts>
      <CreateStore></CreateStore> */}
    </div>
  );
}

export default App;
