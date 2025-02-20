import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import ShowProducts from '../src/Components/ShowProducts/ShowProducts'
import CreateStore from './Components/CreateStore/CreateStore';


function App() {
  
  return (
    <div className="App">
    {/* <ShowProducts></ShowProducts> */}
    <CreateStore></CreateStore>
    </div>
  );
}

export default App;
