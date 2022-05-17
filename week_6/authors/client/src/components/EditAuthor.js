import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {Link} from 'react-router-dom';



const EditAuthor = (props) =>{
    const {id} = useParams();
    const [author, setAuthor] = useState("");
    const navigate = useNavigate();

    

    const handleSubmit= (e)=> {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`,{authorName: author})
        .then ((res) =>{
            console.log(res.data)
            navigate('/');
        }) 
        .catch((err)=>{
            console.log(err.response);
        });
    }
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then ((res) =>{
            console.log(res.data)
            setAuthor(res.data.authorName);
        }) 
        .catch((err)=>{
            console.log(err.response);
        });
    },[]);
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={author} onChange={(e) => setAuthor(e.target.value)} />
                <button  className="sub" type= "submit" name="submit">Submit</button>
                <Link to={'/'}> 
                <button className="edit">cancel</button>    
                </Link>
            </div>
        </form>
    ) 
};

export default EditAuthor;
