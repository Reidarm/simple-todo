import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {v4 as uuidv4} from 'uuid';

import ListStorage from './components/listStorage';
import { addItem, deleteItem } from './storage/localStorage'; 
//const SimpleList = new ListStorage();
 
//addItem("hello", {key: "test", object: {title:"test", text: "todo"}})
//console.log(getItem("hello", "test"));
//deleteItem("hello", "test");
function App() {
  const [text, setText] = useState('');
  const [storage, setStorage] = useState('');

  return (
    <div className="App">
      <header className="App-header">

        <ListStorage value={storage} />        
        <form>
         <input type="text"
           value={text}
           onChange={(val) => {
             setText(val.target.value);
          }}/>
         
           <button 
             type="submit"
             onClick={(val) => {
             val.preventDefault();
             addItem("Todo", {completed: false, text: text})
             setText('');
  	     setStorage('');
           }}>Add Todo</button>
        </form>	
      </header>
    </div>
    );
}

export default App;
