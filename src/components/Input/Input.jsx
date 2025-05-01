// Input.js
import "./Input.css";

function Input(props) {
    return ( 
        <div id="Input">
            <input 
                type={props.tp} 
                placeholder={props.ph}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
}

export default Input;
