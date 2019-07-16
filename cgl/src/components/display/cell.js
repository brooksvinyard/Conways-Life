import React from 'react';


const Cell = props => {
    // console.log("props.cell", props.cell)
  return (
    <div className="cell">
        {/* {console.log("props.key", props.key)} */}
        {props.cell === 0
            ? <div className="dead">0</div> 
            : <div className="alive">1</div> 
        }
    </div>
  );
}

export default Cell;
