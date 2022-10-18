import React from "react";

const Login = () =>{
    return (
        <div className="form-container">
            <div className="form-wrapper">
            <img src="static\icons8-orange-heart-48.png" alt="heart"></img>
                <span className="logo"><h2>Spank Bank </h2></span><br/>
                <span className="title">Log in</span>
                <form>
                
                    <input className="form-field" type="email" placeholder="email"/><br/>
                    <input className="form-field" type="password" placeholder="password"/><br/>
                    

                    <button>Log in</button><br/>
                    
                </form><br/>
                
            </div>
        </div>
    );
};
export default Login;