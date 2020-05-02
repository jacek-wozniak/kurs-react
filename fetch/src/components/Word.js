import React from 'react';

const Word = (props) => (
  <li>
    <p>Po polsku: <strong>{props.pl}</strong></p>
    <p>Po angielsku: <strong>{props.en}</strong></p>
  </li>
)

export default Word;