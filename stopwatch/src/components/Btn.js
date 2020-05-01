import React from 'react';

const Btn = (props) => {
  return (
    <button onClick={props.click}>{props.text}</button>
  )
}

export default Btn;