import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Products from './components/Products';
import AddrEdit from './components/AddrEdit';
import { GlobalProvider } from './context/GlobalContext';
import './App.css';
import{useState} from 'react';

function App() {
  let [editdata,seteditdata]=useState({})
  const updatedata=(data)=>{
    seteditdata(data);
    
  }
  return (
    <div className="App">
      <GlobalProvider value={{editdata,updatedata}}>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/products" element={<Products/>}/>
       <Route path="/add" element={<AddrEdit/>}/>
       <Route path="/edit" element={<AddrEdit/>}/>
      </Routes>
      </GlobalProvider>
    </div>
  );
}

export default App;
