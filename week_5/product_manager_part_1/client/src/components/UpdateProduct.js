import React, { useState, useEffect } from "react";
import { useNavigate,useParams,Link } from "react-router-dom";
import axios from "axios";

const UpdateProduct = (props) =>{

    const {id} = useParams();
    const [title,setTitle]= useState("");
    const [price,setPrice]= useState("");  
    const [description,setDescription] = useState("");

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
        .catch((err)=>console.log(err))
    },[])

    const submitHandler= (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate("/");
        })
        .catch((err)=>console.log(err))
    }
    

    return(
        <div>
                <header>PRODUCT EDIT</header>
                <form onSubmit={submitHandler}>
                    <div className='form-fields'>
                        <label>Title</label>
                        <input 
                        onChange={(e)=> setTitle(e.target.value)}
                        value ={title}
                        name = "title"
                        type ="text"
                        />
                    </div>
                    <div className='form-fields'>
                        <label>Price</label>
                        <input 
                        onChange={(e)=> setPrice(e.target.value)}
                        value ={price}
                        name = "price"
                        type ="number"
                        />
                    </div>
                    <div className='form-fields'>
                        <label>Description</label>
                        <input 
                        onChange={(e)=> setDescription(e.target.value)}
                        value ={description}
                        name = "description"
                        type ="text"
                        />
                    </div>
                    <input type="submit" className='submit-input' value="Update"/>
                </form>
                <Link to = {"/"}>go home</Link>
            </div>
    )
}


export default UpdateProduct