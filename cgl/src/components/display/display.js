import React from 'react';

import Cell from './cell.js'

import './display.css'


function Display(props) {
  return (
    <div className="display">
        {props.grid.map(row => 
        <div className="row"> 
            {row.map(col => <Cell cell={col} /> )}
        </div> 
        )}
    </div>
  );
}

export default Display;
