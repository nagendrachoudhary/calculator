import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [State,setState]=useState(0)
  const [final,setfinal]=useState(0)
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });
  return (
    <div className="App">
     <div id='screen'>
     <div>{final}</div>
     <div>{State}</div>
     </div>
     <div id='button'>
     <button onClick={()=>{setfinal(0)}}>C</button>
     <button onClick={()=>{setfinal(-1*final)}}>+/-</button>
     <button onClick={()=>{setState(`${State}%`)}}>%</button>
     <button onClick={()=>{setState(`${State}/`)}}>/</button>
     <button onClick={()=>{setState(`${State}7`)}}>7</button>
     <button onClick={()=>{setState(`${State}8`)}}>8</button>
     <button onClick={()=>{setState(`${State}9`)}}>9</button>
     <button onClick={()=>{setState(`${State}*`)}}>*</button>
     <button onClick={()=>{setState(`${State}4`)}}>4</button>
     <button onClick={()=>{setState(`${State}5`)}}>5</button>
     <button onClick={()=>{setState(`${State}6`)}}>6</button>
     <button onClick={()=>{setState(`${State}-`)}}>-</button>
     <button onClick={()=>{setState(`${State}1`)}}>1</button>
     <button onClick={()=>{setState(`${State}2`)}}>2</button>
     <button onClick={()=>{setState(`${State}3`)}}>3</button>
     <button onClick={()=>{setState(`${State}+`)}}>+</button>
     </div>
     <div id='last'>
     <button style={{width:'200px' ,borderRadius:'50px'}}>0</button>
     <button onClick={()=>{setState(`${final}.`)}}>.</button>
     <button onClick={()=>{setfinal(State)}}>=</button>
     </div>
    </div>
  );
}

export default App;
