import React, {useEffect,useState} from "react";
import {useParams , useNavigate,Link} from "react-router-dom";
import axios from "axios";


const OneProduct = (props) =>{
    const {id} =useParams();
    const [oneProduct,setOneProduct] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setOneProduct(res.data);
        })
        .catch((err) => console.log(err));
    },[])

    const deleteFilter =() =>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then ((res)=>{
            console.log(res.data);
            navigate("/");

            
        })
        .catch((err) => console.log(err));
    }



    return(
        <div className="product">
            <header>Product Manager</header>
            <h2>{oneProduct.title}</h2>
            <p>Price : {oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>

            <Link to = {"/"}>go home</Link>
            <button onClick={deleteFilter}>Delete</button>
        </div>
    )
}

export default OneProduct;