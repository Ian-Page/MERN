import React, { useState } from  'react';
import FormDetails from './FormDetails';
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifypassword, setVerifyPassword]= useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
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

        setHasBeenSubmitted( true );

        
    };
    
    return(

    <>
    
    <h1> MORE FORMS</h1>
    <form onSubmit={ createUser } className = "form">
        {
        hasBeenSubmitted ? 
        <h3>Thank you for submitting the form!</h3> :
        <h3>Welcome, please submit the form.</h3> 
    }
        <div className='formblock'>
            <label>First name: </label> 
            <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
            <div className='validationbox'>
                {firstname.length < 2 && firstname.length > 0 ? (<p>Must be at least 2 characters!</p>):null}
            </div>
        </div>
        <div className='formblock'>
            <label>last name: </label> 
            <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            <div className='validationbox'>
                {lastname.length < 2 && lastname.length > 0 ? (<p>Must be at least 2 characters!</p>):null}
            </div>
        </div>
        <div className='formblock'>
            <label>Email Address: </label> 
            <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            <div className='validationbox'>
                {email.length < 5 && email.length > 0 ? (<p>Must be at least 5 characters!</p>):null}
            </div>
        </div>
        <div className='formblock'>
            <label>Password: </label>
            <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            <div className='validationbox'>
                {password.length < 8 && password.length > 0 ?(<p>Must be at least 8 characters!</p>):null}
            </div>
        </div>
        <div className='formblock'>
            <label>Verify-Password: </label>
            <input type="password" onChange={ (e) => setVerifyPassword(e.target.value) } />
            <div className='validationbox'>
                {verifypassword !== password ? (<p>Passwords must match!</p>):null}
            </div>
        </div>
        <div className='formblock'>
        <input type="submit" value="Create User" className='button'/>
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