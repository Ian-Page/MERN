import React, { useState } from  'react';
import FormDetails from './FormDetails';
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifypassword, setVerifyPassword]= useState("");
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstname,lastname, email, password };
        console.log("Welcome", newUser);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setVerifyPassword("");
    };
    
    return(

    <>
    <h1> USER FORM</h1>
    <form onSubmit={ createUser }>
        <div className='formblock'>
            <label>First name: </label> 
            <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
        </div>
        <div className='formblock'>
            <label>last name: </label> 
            <input type="text" onChange={ (e) => setLastname(e.target.value) } />
        </div>
        <div className='formblock'>
            <label>Email Address: </label> 
            <input type="text" onChange={ (e) => setEmail(e.target.value) } />
        </div>
        <div className='formblock'>
            <label>Password: </label>
            <input type="password" onChange={ (e) => setPassword(e.target.value) } />
        </div>
        <div className='formblock'>
            <label>Verify-Password: </label>
            <input type="password" onChange={ (e) => setVerifyPassword(e.target.value) } />
        </div>
        <div className='formblock'>
        <input type="submit" value="Create User" />
        </div>
    </form>
        <FormDetails 
        firstname = {firstname}
        lastname = {lastname}
        email ={email}
        password ={password}
        verifypassword={verifypassword}
        />
        
    </>
    );
};
    
export default UserForm;