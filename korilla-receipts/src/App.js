import React,{useState, useRef} from 'react'
import Receipts from './components/Receipts/Receipts'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import receiptData from './receiptData';
import './App.css';

function App(props) {
  const [receipt, setReceipt] = useState(receiptData)

  let searchHanlder = () =>{
    
  }

  let change = (input) =>{
    if(input !== ""){
      console.log(receiptData)
      receiptData.forEach(element => {
        
        console.log(typeof Object.entries(element.person))
        Object.values(element).filter(word => {word == input,  setReceipt(word)})
      })
      
    }
  }
  
  return (
    <div className="App">
      <Header className="Header"/>
      <Form test={e => change(e)}/>
      <Receipts searchReceipt={searchHanlder}/>
    </div>
  );
}

export default App;
