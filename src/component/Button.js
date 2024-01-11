import React, { useEffect, useState } from 'react'

export default function Button( {setTotal, setMultiples, setOperaton, multiples, operation} ) {
const [nums, setNums] = useState([]);
const [multipleBool, setMultipleBool] = useState(false);



  useEffect(() => {
    setTotal([...nums].join(''));
  }, [nums]);


  function handleNumberClick(e) {
    if (multipleBool) {
        const prevMultiples = [...multiples];
        setMultiples([...prevMultiples, e.target.value]);
        return;
    }
    const prevNums = [...nums];
    setNums([...prevNums, e.target.value]);
  }

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

  function handlePercentClick() {
    const percentage = [...nums].join('') / 100;
    setNums(percentage.toString().split(''));
  }
  
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

  function handleSignChangeClick() {
    const negNums = [...nums].join('') * -1;
    const negMultiples = [...multiples].join('') * -1;
    if (multipleBool) {
      setMultiples(negMultiples.toString().split(''));
    }
  
    setNums(negNums.toString().split(''));
  }

  function handleDivideClick() {
    setOperaton('/')
    setMultipleBool(true);
  }

  function handleMultiplyClick() {
    setOperaton('x');
    setMultipleBool(true);
  }
  
  function handleSubtractClick() {
    setOperaton('-');
    setMultipleBool(true);
  }

  function handleAdditionClick() {
    setOperaton('+');
    setMultipleBool(true);
  }

  function handleEqualsClick() {
    const newNums = [...nums].join('');
    const newMultiples = [...multiples].join('');

    const divided = newNums / newMultiples;
    const multiplied = newNums * newMultiples;
    const subtracted = newNums - newMultiples;
    const added = Number(newNums) + Number(newMultiples);
  
        if (operation === '/') {
            setMultipleBool(false);
            setOperaton('');
            setMultiples([]);
            setNums(divided.toString().split(''))
        } else if (operation === 'x') {
            setMultipleBool(false);
            setOperaton('');
            setMultiples([]);
            setNums(multiplied.toString().split(''));
        } else if (operation === '-') {
            setMultipleBool(false);
            setOperaton('');
            setMultiples([]);
            setNums(subtracted.toString().split(''));
        }  else if(operation === '+') {
            setMultipleBool(false);
            setOperaton('');
            setMultiples([]);
            setNums(added.toString().split(''));
        }
  }

return (
    <>
    <div className='first-buttons'>
        <button className='button-change' onClick={handleSignChangeClick}>+/-</button>
        <button className='button-clear' onClick={handleClearClick}>AC</button>
        <button className='button-percent' onClick={handlePercentClick}>%</button>
        <button className='button-divide' onClick={handleDivideClick}>/</button>
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
