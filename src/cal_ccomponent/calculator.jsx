import { useState } from "react";
import "./calculator.css"

function Calculator (){
    const [expression,setExpression]=useState("");
    


    const handleClick = (value) => {
      if (value === "C") {
        setExpression("");
        
      } else if (value === "=") {
        try{
          const computed = evaluateExpression(expression);
         
          setExpression(computed)
        }catch(error){
          setExpression("Error");
          
        }
        
      } else {
        setExpression((prev) => prev + value);
      }
    };
  
    const evaluateExpression = (expr) =>{
  
      const tokens = [];
      let num ='';
      for (let i = 0; i < expr.length; i++) {
        const char = expr[i];
        if ('0123456789.'.includes(char)) {
          num += char;
        } else if ('+-*/'.includes(char)) {
          if (num) tokens.push(parseFloat(num));
          tokens.push(char);
          num = '';
        }
      }
      if (num) tokens.push(parseFloat(num));
  
      
      for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '*' || tokens[i] === '/') {
          const op = tokens[i];
          const left = tokens[i - 1];
          const right = tokens[i + 1];
          let res;
  
          if (op === '*') res = left * right;
          else {
            if (right === 0) throw new Error('Division by zero');
            res = left / right;
          }
  
          tokens.splice(i - 1, 3, res);
          i -= 1;
        }
      }
  
      
      let result = tokens[0];
      for (let i = 1; i < tokens.length; i += 2) {
        const op = tokens[i];
        const next = tokens[i + 1];
        if (op === '+') result += next;
        else result -= next;
      }
  
      return Number(result.toFixed(10)).toString();
    };
        
    
    

    return(
        <div id="calculator">
        <div>
            <div id="input">{expression}</div>
           
        </div>

            <div id="buttons">
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('+')}>+</button>
            
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('-')}>-</button>
            
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('*')}>* </button>

                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={() => handleClick("C")}>C</button>
                <button onClick={() => handleClick("=")}>=</button>
                <button onClick={() => handleClick('/')}>/</button>
            </div>
        </div>
    )
}
export default Calculator;