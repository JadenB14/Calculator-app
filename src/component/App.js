import React, { useState} from 'react';
import Display from './Display';
import Button from './Button';
import '../styles/App.css';
import '../styles/Button.css'

function App() {
  const [nums, setNums] = useState([]);
  const [multiples, setMultiples] = useState([]);
  const [operation, setOperaton] = useState('');

  function ShowOperation() {
    if(operation !== '') {
      return (
      <div className='operator'>
        <p>{`${operation}`}</p>
      </div>
      );
    }
  }

  return (
    <>
      <div className='header'>
        <h1>My Calculator App</h1>
        <h3>By: Jaden Bolton</h3>
      </div>
      <div>
        <ShowOperation />
      </div>
      <div className='display'>
        <Display nums={nums} multiples={multiples} operation={operation}/>
      </div>
      <div className='buttons'>
        <Button nums={nums} setNums={setNums} setMultiples={setMultiples} setOperaton={setOperaton} multiples={multiples} operation={operation}/>
      </div>
    </>
  );
}

export default App;
