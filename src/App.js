import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [State,setState]=useState("")
  const [history,sethistory]=useState([])
  const [final,setfinal]=useState("")
  useEffect(() => {
    if(State.slice(-1)==1||State.slice(-1)==2||State.slice(-1)==3||State.slice(-1)==4||State.slice(-1)==5||State.slice(-1)==6||State.slice(-1)==7||State.slice(-1)==8||State.slice(-1)==0){
     if(State.length>0){
       setfinal(eval(State).toFixed(2)) 
      }
      else if(history.length>0){
        return
      }
      else{
        setfinal("0")
      }
    }
    else{
      setfinal("")
    }
  }, [State])
  
  const handelNum=(event)=>{
      let data=event.target.value
      if(data=='.'){
        let i=State.length-1;
        let point=0;
        while(i>=0&&State[i]!='+'&&State[i]!='-'&&State[i]!='*'&&State[i]!='/'&&State[i]!='%'){
                if(State[i]=='.'){
                  point++;
                }
                i--;
        }
        if(State.length==0)setState('0.')
        else if(State.slice(-1)=='.')return
        else if(point==1)return
        else setState(State+""+data)
      }
      else{
        setState(State+""+data)
      }

  }
  console.log(final)
  const handelOp=(event)=>{
    let data=event.target.value
    if(State.slice(-1)==1||State.slice(-1)==2||State.slice(-1)==3||State.slice(-1)==4||State.slice(-1)==5||State.slice(-1)==6||State.slice(-1)==7||State.slice(-1)==8||State.slice(-1)==0){
      setState(State+""+data)
    }
    else{
      return
    }
  }
  const backspace=()=>{
    setState(State.slice(0,-1))
  }
  const equal=()=>{
    let data=[...history]
    data.push(State)
    sethistory(data)
    setState("")
  }
  console.log(history)
  return (
    <div className="App">
     <div id='screen'>
      <div id='history'>
     {history.length>0&&history.map((el,i)=>{
       return <p>{el}</p>
      })}
      </div>
     <h1 id='result'>{final}</h1>
     <p id='order'>{State}</p>
     </div>
     <div>
     <div id='button'>
     <button onClick={()=>{backspace()}}>C</button>
     <button onClick={()=>{}}>+/-</button>
     <button value={'%'} onClick={(event)=>{handelOp(event)}}>%</button>
     <button value={'/'} onClick={(event)=>{handelOp(event)}}>/</button>
     <button value={'7'} onClick={(event)=>{handelNum(event)}}>7</button>
     <button value={'8'} onClick={(event)=>{handelNum(event)}}>8</button>
     <button value={'9'} onClick={(event)=>{handelNum(event)}}>9</button>
     <button value={'*'} onClick={(event)=>{handelOp(event)}}>*</button>
     <button value={'4'} onClick={(event)=>{handelNum(event)}}>4</button>
     <button value={'5'} onClick={(event)=>{handelNum(event)}}>5</button>
     <button value={'6'} onClick={(event)=>{handelNum(event)}}>6</button>
     <button value={'-'} onClick={(event)=>{handelOp(event)}}>-</button>
     <button value={'1'} onClick={(event)=>{handelNum(event)}}>1</button>
     <button value={'2'} onClick={(event)=>{handelNum(event)}}>2</button>
     <button value={'3'} onClick={(event)=>{handelNum(event)}}>3</button>
     <button value={'+'} onClick={(event)=>{handelOp(event)}}>+</button>
     </div>
     <div id='last'>
     <button style={{width:'200px' }} value={'0'} onClick={(event)=>{handelNum(event)}}>0</button>
     <button value={'.'} onClick={(event)=>{handelNum(event)}}>.</button>
     <button onClick={()=>{equal()}} >=</button>
     </div>

     </div>
    </div>
  );
}

export default App;
