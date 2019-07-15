import React from 'react';


function Controls(props) {
  return (
    <div className="controls">
        <button onClick={props.startGame} >Start</button>
        <button>Stop</button>
        <button onClick={props.resetGame}>Reset</button>
    </div>
  );
}

export default Controls;
