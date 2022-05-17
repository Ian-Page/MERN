import { useState } from 'react';
import {Link ,useNavigate} from 'react-router-dom';
import axios from "axios";


const NewAuthor = ()=>{
    const [authorName,setAuthorName] = useState("");
    const navigate = useNavigate()
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors",{authorName}) 
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setAuthorName("");
            navigate("/");
        })
        .catch((err)=> {
            console.log(err)
            console.log(err.response.data.errors.authorName.message);
            setErrors(err.response.data.errors);

        })



    }
    return (
        <div>
            <Link to="/">home</Link>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>name</label>
                <input type="text" 
                onChange={(e) => setAuthorName(e.target.value)}
                value={authorName}/>{console.log (errors)}
                {errors.authorName ? <p>{errors.authorName.message}</p> : null}
                <button type='submit'>submit</button>
            </form>


        </div>
    )

}
export default NewAuthor