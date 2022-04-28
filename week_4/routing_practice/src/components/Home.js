import { Link } from "react-router-dom";

const Home =(props) => {
    return(
    <div>
        <h1>Welcome Home</h1>
        <p>From here you can type in parameters in the address bar example:
        </p>
        <p>/word or number?/color?/backgroundcolor?</p>
        <p>/Homeboys/red/black</p>
        <p>/69/pink/black</p>
        <p>just start from root / and delete /home.</p>
    </div>
    )
}

export default Home;