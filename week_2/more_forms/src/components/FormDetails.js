

const FormDetails = (props) => {
    return(
    <div>
        <p>Firstname: {props.firstname}</p>
        <p>Lastname: {props.lastname}</p>
        <p>Email: {props.email}</p>
        <p>Password: {props.password}</p>
        <p>Verify-Password: {props.verifypassword}</p>
    </div>
    )
}
export default FormDetails