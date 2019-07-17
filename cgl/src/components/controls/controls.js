import React from 'react';


function Controls(props) {
  return (
    <div className="controls">
        <button onClick={props.startGame} >Start</button>
        <button onClick={props.stopGame} >Stop</button>
        <button onClick={props.resetGame}>Reset</button>
    </div>
  );
}

export default Controls;
