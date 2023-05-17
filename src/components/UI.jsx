import React, { useEffect, useState } from 'react';
import Square from './Square';
import RandomNumbers from './RandomNumbers';
import {isOrderMaintained, generateRandomNumbers} from '../utils/utils';

const UI = () => {
    const [randomNumbers, setRandomNumbers] = useState([3,2,4,1,5]);
    const [clickedNumbers, setClickedNumbers] = useState([]);
    const [err, setErr] = useState(false);
    const [isClicked,setIsClicked] = useState(null);

    const clickedNumbersCallback = (num) => {
        setClickedNumbers([...clickedNumbers, num]);
        setIsClicked(num);
    }

    const reset = () => {
        setClickedNumbers([]);
        setErr(false);
        setIsClicked(null);
    }

    useEffect(() => {
        console.log('number got clicked...', clickedNumbers);
        if(!isOrderMaintained(clickedNumbers)) {
            setErr(true);
            setIsClicked(null);
        }
    }, [clickedNumbers]);
  return ( 
    <div>
        <RandomNumbers randomNumbers={randomNumbers} />
        {err && alert('Sequence break !!!')}
        {
            [1, 2, 3, 4, 5].map((num, idx) => (
                <Square number={num} clickedNumbersCb={clickedNumbersCallback} isClicked={isClicked}/>
            ))
        }
        <div className='btn-container'>
            <button onClick={reset}>Reset</button>
            <button onClick={() => setRandomNumbers([...generateRandomNumbers()])}>Next</button>
        </div>
    </div>
  )
}

export default UI
