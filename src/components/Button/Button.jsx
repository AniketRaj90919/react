import "./Button.css"
function Button (props){
    return(
        <button id="Button" type="submit">
        <p>{props.text}</p>
        </button>
    )
}

export default Button;