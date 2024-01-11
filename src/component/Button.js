import React, { useEffect, useState } from 'react'

export default function Button( {setMultiples, setOperaton, multiples, operation, nums, setNums} ) {
const [multipleBool, setMultipleBool] = useState(false);

  //  Adds the number clicked to the correct array
  //  and limits the total number of elements in
  //  the array to 12 or 10 when inputting the
  //  second portion of the calculations 
  function handleNumberClick(e) {
    const prevMultiples = [...multiples];
    const prevNums = [...nums];

    if (multipleBool) {
      if (multiples.length === 12) return;
        setMultiples([...prevMultiples, e.target.value]);
        return;
    }
    if (nums.length === 12) return;
    setNums([...prevNums, e.target.value]);
  }

  //  Clears the calulator in steps depending on the 
  //  stage of calcualtions you're on.
  function handleClearClick() {
    if(multipleBool) {
        setMultiples([]);

        if (multiples.length === 0) {
            setOperaton('');
            setMultipleBool(false);  
            return;  
        }
        return;
    }
    setNums([]);
  }

  //  Changes the current calculations to its equivalent percentage 
  function handlePercentClick() {
    const numsPercentage = [...nums].join('') / 100;
    const multiplesPercentage = [...multiples].join('') / 100;

    if (multipleBool) {
      if (multiples.length === 0) return;
      setMultiples(multiplesPercentage.toString().split(''));
      return;
    }

    if (nums.length === 0) return;
    setNums(numsPercentage.toString().split(''));
  }
  
  //  Adds in a SINGLE decimal point whenever specified 
  function handleDecimalClick() {
    const newNums = [...nums];
    const newMultiples = [...multiples]

    if (multipleBool) {
      if (!/[.]/.test([...newMultiples].join(''))) {
        setMultiples([...newMultiples, '.']);
        return;
      }
    }

    if (!/[.]/g.test([...newNums].join(''))) {
      setNums([...newNums, '.']);  
    }

  }

  //  Changes the sign of the current calculation.
  function handleSignChangeClick() {
    const negNums = [...nums].join('') * -1;
    const negMultiples = [...multiples].join('') * -1;

    if (multipleBool) {
      if (multiples.length === 0) return;
      setMultiples(negMultiples.toString().split(''));
    }
  
    if (nums.length === 0) return;
    setNums(negNums.toString().split(''));
  }

  //  Set the opertaion mode to division.
  function handleDivideClick() {
    setOperaton('÷')
    setMultipleBool(true);
  }

  //  Set the opertaion mode to multiplication.
  function handleMultiplyClick() {
    setOperaton('x');
    setMultipleBool(true);
  }
  
  //  Set the opertaion mode to subtraction.
  function handleSubtractClick() {
    setOperaton('-');
    setMultipleBool(true);
  }

  //  Set the opertaion mode to addition.
  function handleAdditionClick() {
    setOperaton('+');   
    setMultipleBool(true);   
  }

  //  Checks which operation is choosen and then 
  //  provides the calculation when the button is pressed.
  function handleEqualsClick() {
    const newNums = [...nums].join('');
    const newMultiples = [...multiples].join('');

    const divided = newNums / newMultiples;
    const multiplied = newNums * newMultiples;
    const subtracted = newNums - newMultiples;
    const added = Number(newNums) + Number(newMultiples);

    if (operation === '÷') {     
      if (nums.length === 0 && multiples.length === 0) return;    
      setNums(divided.toString().split(''));      
      reset();      
    } else if (operation === 'x') {  
      if (nums.length === 0 && multiples.length === 0) return;
      setNums(multiplied.toString().split(''))      
      reset();;      
    } else if (operation === '-') {   
      if (nums.length === 0 && multiples.length === 0) return;
      setNums(subtracted.toString().split(''));      
      reset();                
    } else if(operation === '+') {
      if (nums.length === 0 && multiples.length === 0) return; 
      setNums(added.toString().split(''));      
      reset();      
    }  

  }

  //  A helper function to keep the handleEqualsClick() function
  //  cleaner.
  function reset() {
    setMultipleBool(false);
    setOperaton('');
    setMultiples([]);
  }

return (
    <>
    <div className='first-buttons'>
        <button className='button-clear' onClick={handleClearClick}>AC</button>      
        <button className='button-change' onClick={handleSignChangeClick}>+/-</button>
        <button className='button-percent' onClick={handlePercentClick}>%</button>
        <button className='button-divide' onClick={handleDivideClick}>÷</button>
    </div>
    <div className='second-buttons'>
        <button className='button-seven' value={7} onClick={e => handleNumberClick(e)}>7</button>
        <button className='button-eight' value={8} onClick={e => handleNumberClick(e)}>8</button>
        <button className='button-nine' value={9} onClick={e => handleNumberClick(e)}>9</button>
        <button className='button-multiply' onClick={handleMultiplyClick}>x</button>
    </div>
    <div className='third-buttons'>
        <button className='button-four' value={4} onClick={e => handleNumberClick(e)}>4</button>
        <button className='button-five' value={5} onClick={e => handleNumberClick(e)}>5</button>
        <button className='button-six' value={6} onClick={e => handleNumberClick(e)}>6</button>
        <button className='button-subtract' onClick={handleSubtractClick}>-</button>
    </div>
    <div className='fourth-buttons'>
        <button className='button-one' value={1} onClick={e => handleNumberClick(e)}>1</button>
        <button className='button-two' value={2} onClick={e => handleNumberClick(e)}>2</button>
        <button className='button-three' value={3} onClick={e => handleNumberClick(e)}>3</button>
        <button className='button-add' onClick={handleAdditionClick}>+</button>
    </div>
    <div className='fifth-buttons'>
        <button className='button-zero' value={0} onClick={e => handleNumberClick(e)}>0</button>
        <button className='button-decimal' onClick={handleDecimalClick}>.</button>
        <button className='button-equal' onClick={handleEqualsClick}>=</button>
    </div>

    </>
  )
}
