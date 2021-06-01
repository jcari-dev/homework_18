import React,{useState} from 'react'
import Receipts from './components/Receipts/Receipts'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import receiptData from './receiptData';
import './App.css';

function App() {
  const [receipt, setReceipt] = useState(receiptData)
  return (
    <div className="App">
      <Header className="Header"/>
      <Form/>
      <Receipts/>
    </div>
  );
}

export default App;
