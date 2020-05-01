import React from 'react';

const format = (time) => {
  const m = Math.floor(time/60000);
  const s = Math.floor(time/1000);
  const ms = time%1000;
  return `${m>=10 ? m : '0'+m}:${s>=10 ? s : '0'+s}:${ms>=100 ? ms : (ms >= 10 ? '0'+ms : '00'+ms)}`;
}
const Timer = (props) =>  {
  return (
    <div> {format(props.time)} </div>
  );
}

export default Timer;