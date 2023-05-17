import React  from 'react'

const Square = ({side, number, clickedNumbersCb, isClicked}) => {
    
    const onClickHandler = (e, num) => {
        e.preventDefault(); // to prevent event bubbling
        clickedNumbersCb(num);    
    }
  return (
    <div className={`placement square-${number} ${isClicked===number? 'clickedcolor' : 'notClicked'}`} onClick={(e) => onClickHandler(e, number)}>
      {number}
    </div>
  )
};

export default Square;