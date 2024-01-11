import React, { useState} from 'react';
import Display from './Display';
import Button from './Button';
import './App.css';
import './Button.css'

function App() {
  const [total, setTotal] = useState(0);
  const [multiples, setMultiples] = useState([]);
  const [operation, setOperaton] = useState('');

  return (
    <>
      <div className='display'>
        <Display  total={total} multiples={multiples} operation={operation}/>
      </div>
      <div className='buttons'>
        <Button setTotal={setTotal} setMultiples={setMultiples} setOperaton={setOperaton} multiples={multiples} operation={operation}/>
      </div>
    </>
  );
}

export default App;
