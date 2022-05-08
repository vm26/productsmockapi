import React from "react";
import { useNavigate } from "react-router-dom";

const Home=()=>{
    const navigate=useNavigate();
    return<div>
        <h1 style={{color:'red',marginTop:'20px'}}>Products Home Page</h1>
    <div style={{marginTop:'200px'}}>
    <button type="button" class="btn btn-success" onClick={()=>navigate('/products')}>Get Products</button>
    
    <button style={{marginLeft:'50px'}} type="button" class="btn btn-success" onClick={()=>navigate('/add')}>Add Product</button>   
    </div>
    
    </div>
}
export default Home;