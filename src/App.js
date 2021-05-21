import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function Biografy(props){
return (
  <>
  <p>Name: {props.name}</p>
  <p>LastName: {props.lastName}</p>
  <p>Birthday: {props.birthday}</p>
  </>
);
}
function Books(props){
  return (
    <>
    <p>Books: </p>
    <ul>
        <li>{props.books[0]}</li>
        <li>{props.books[1]}</li>
        <li>{props.books[2]}</li>
    </ul>
    </>
  );
  }

  function Button(props){
      
    const [currentValue, setCurrentValue] = useState(props.startVal);
   
    function btClick() { 
      setCurrentValue(currentValue + 1);
    }
    return <button onClick={btClick}>{currentValue}</button>;
  }

  function ButtonPlus(props) {
 
    function btnClick(){
      props.onClickAct(props.btText)
    }

    return(
      <button className="Button" onClick={btnClick}>
        +{props.btText}
      </button>
    ); 
  }
  
  function DisplayBlock(props) {
    
    return( 
      <div className="Display">{props.displayText}</div>
      );
  }

  function ButtonMathPlus(props){

    function btnClick(){
      props.onClickAct(props.btText)
    }

    return(
      <button className="Button" onClick={btnClick}>
        +{props.btText}
      </button>
    );
  }

  function ButtonMathMinus(props){

    function btnClick(){
      props.onClickAct(props.btText)
    }

    return(
      <button className="Button" onClick={btnClick}>
        -{props.btText}
      </button>
    );
  }

function App() {
 
  const [currentValue, setCurrentValue] = useState(0);
  
  const stateFunc = incValue => {
    setCurrentValue(currentValue+incValue);
  };

  const stateMinusFunc = incValue => {
    setCurrentValue(currentValue-incValue);
  };

  return (
    <div className="App">
        <Biografy/>
        <Books/>
        <Button startVal={0} />
        <div>
          <ButtonPlus btText={1} onClickAct={stateFunc} />
          <DisplayBlock displayText={currentValue} />
        </div>
        <div>
          <ButtonMathPlus btText={10} onClickAct={stateFunc}/>
          <ButtonMathMinus btText={100} onClickAct={stateMinusFunc}/>
          <ButtonMathPlus btText={25} onClickAct={stateFunc}/>
          <DisplayBlock displayText={currentValue} />
        </div>
    </div>
  );
}



Biografy.defaultProps = { name: "William",
                          lastName: "Shakespeare",
                          birthday: new Date(1563,3,26).toLocaleDateString()};
Books.defaultProps=  { books: ["Hamlet", "Romeo and Juliet", "	Othello"]};
export default App;
