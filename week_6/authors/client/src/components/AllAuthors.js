import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

const AllAuthors = (props) =>{

    const [authorList,setAuthorlist] = useState([]);


    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setAuthorlist(res.data);
        })
        .catch((err)=> {
            console.log(err);
        })
    },[])

    const deleteHandler= (idFromBelow) =>{
        axios.delete(`http://localhost:8000/api/authors/${idFromBelow}`)
            .then((res)=>{
                console.log(res.data);
                setAuthorlist(authorList.filter((author)=> author._id !== idFromBelow))
            })
            .catch((err)=>{
            console.log(err)
        })
    }
    return(
        <div>
            <header>
                <h2>We have qoutes by</h2>
                <Link to={"/new"}>Add a Author</Link>
            </header>
                <div className='table'>
                <table>
                    <thead>
                        <tr className='trrow'>
                            <th>Author</th>
                            <th>Action available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authorList.map((author,index)=>{
                            return(
                                <tr key={author._id}>
                                    <td>{author.authorName}</td>
                                    <td>
                                        <Link to={`/edit/${author._id}`}> 
                                        <button className="edit">edit</button>    
                                        </Link>
                                            
                                        <button className="delete" onClick={()=> deleteHandler(author._id)}>delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </div>        

        </div>
    )
} 

export default AllAuthors;