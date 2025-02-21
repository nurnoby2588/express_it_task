import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import ShowProducts from '../src/Components/ShowProducts/ShowProducts'
import CreateStore from './Components/CreateStore/CreateStore';
import { Route, Routes } from 'react-router';
import Navbar from './Components/Navbar';


function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route index element={<ShowProducts />} />
        <Route path="/createStore" element={<CreateStore />} />
      </Routes>

      {/* <ShowProducts></ShowProducts>
      <CreateStore></CreateStore> */}
    </div>
  );
}

export default App;
