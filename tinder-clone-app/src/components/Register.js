import React from "react";
import {Link} from 'react-router-dom';
const Register = () =>{
    return (
        <div className="form-container">
            <div className="form-wrapper">
            <img src="static\icons8-orange-heart-48.png" alt="heart"></img>
                <span className="logo"><h2>Spank Bank </h2></span><br/>
                <span className="title">Register</span>
                <form>
                    <input className="form-field" type="text" placeholder="display name"/><br/>
                    <input className="form-field" type="email" placeholder="email"/><br/>
                    <input className="form-field" type="password" placeholder="password"/><br/>
                    <input className="form-field" type="file"/><br/>

                    <button>Sign Up</button><br/>
                    
                </form><br/>
                    <p>allready a member ? <Link to="/login">login</Link></p>
                <br/>
            </div>
        </div>
    );
};
export default Register;