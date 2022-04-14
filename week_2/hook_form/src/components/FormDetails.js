

const FormDetails = (props) => {
    return(
    <div>
        <p>Firstname: {props.firstname}</p>
        <p>Lastname: {props.lastname}</p>
        <p>email: {props.email}</p>
        <p>password: {props.password}</p>
        <p>verify-password: {props.verifypassword}</p>
    </div>
    )
}
export default FormDetails