import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const FormValidate=()=>Yup.object().shape({
    productname:Yup.string().required('Name is required'),
    category:Yup.string(),
    price:Yup.string().required('price is required'),
    image:Yup.string().required('Image URL is required')

})
const AddrEdit=()=>{
    
    const {editdata,updatedata}=useContext(GlobalContext);

    
const navigate=useNavigate();
    const {values,errors,handleBlur,handleChange,handleSubmit}= useFormik({
        initialValues:editdata,
        validationSchema:FormValidate,
        onSubmit:(data)=>{
            if(values.id){
                axios.put(`https://61b20c42c8d4640017aaf155.mockapi.io/products/${editdata.id}`,
                {
                     productname:data.productname,
                     image:data.image,
                     price:data.price,
                     category:data.category
         
                 }
                 )       
                 .then(res=>{navigate('/products');updatedata({})}).catch(err=>console.log(err));
               
             }
            else{
                axios.post('https://61b20c42c8d4640017aaf155.mockapi.io/products',
           {
                productname:data.productname,
                image:data.image,
                price:data.price,
                category:data.category
    
            }
            )       
            .then(res=>{navigate('/products')}).catch(err=>console.log(err));
            }
        }  
    }) 

    return<div>
   <button style={{marginTop:'50px'}}type="button" class="btn btn-info" onClick={()=>{navigate('/');updatedata({})}}>Back</button>

   <div >
          
            <form onSubmit={handleSubmit} style={{textAlign:'justify',border:'2px solid black',margin:'100px 300px',padding:'50px',background:'lightpink'}}>
                <h3 style={{textAlign:'center',color:'green'}}>{values.id?'Edit Product':'Add Product'} </h3>
                <div>
                    <label style={{display:'block',marginBottom:'2px',fontWeight:'bold',color:'grey'}}> Product Name:</label>
                    <input name='productname' value={values.productname} onChange={handleChange} onBlur={handleBlur}  style={{marginBottom:'5px',width:'300px'}}  type='text'></input>
                    {errors.productname && <small style={{color:'red'}}>{errors.productname}</small>}
                </div>
                <div>
                    <label style={{display:'block',marginBottom:'2px',fontWeight:'bold',color:'grey'}}>Category:</label>
                    <input name='category' value={values.category} onChange={handleChange} onBlur={handleBlur} style={{marginBottom:'5px',width:'300px'}} type='text'></input>
                    {errors.category && <small style={{color:'red'}}>{errors.category}</small>}
                </div>
                <div>
                    <label style={{display:'block',marginBottom:'2px',fontWeight:'bold',color:'grey'}}>Image URL:</label>
                    <input name='image' value={values.image} onChange={handleChange} onBlur={handleBlur} style={{marginBottom:'5px',width:'300px'}}  type='url'></input>
                    {errors.image && <small style={{color:'red'}}>{errors.image}</small>}
                </div>
                <div>
                    <label style={{display:'block',marginBottom:'2px',fontWeight:'bold',color:'grey'}}>Price:</label>
                    <input name='price' value={values.price} onChange={handleChange} onBlur={handleBlur} style={{marginBottom:'5px',width:'300px'}} type='text'></input>
                    {errors.price && <small style={{color:'red'}}>{errors.price}</small>}
                </div>
                <button style={{marginTop:'20px'}} type="submit" class="btn btn-primary">Submit</button>
            </form>
          
          
           
        </div>
    </div>
}
export default AddrEdit;