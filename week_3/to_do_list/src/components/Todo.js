const Todo =(props) => {
    const todoClasses = ["bold","size"];
        if (props.todo.complete){
        todoClasses.push("line-through","italics");
        }
    return(
    <div>
    <input onChange={(event)=>{
    props.handleToggleComplete(props.i);
    }} checked ={props.todo.complete} type="checkbox"/>
    
    <span className="markas">Mark as completed!</span>

    <div className = {todoClasses.join(" ")}>{props.todo.text}</div>

    <button className="btn" onClick={(event) =>{
    props.handleDelete(props.i);
    }
    }>DELETE</button>
    </div>  
    )}

export default Todo;