import React from 'react';

import Controls from '../controls/controls'
import Display from '../display/display'

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            generation: 0,
            // grid: [[1,0,1,1],[0,0,1,1],[1,0,0,1],[0,0,0,0]],
            // grid: [[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],
            grid: [[1,1,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],
            gridLine: [],
            gridSize: 4,
        }
    }

    startGame = () => {
        // console.log("this.state.generation", this.state.generation);
        // this.state.grid.forEach(e => {
        //     console.log("e", e);
        // });
        this.gridToLineFn(this.state.grid)
        // this.lineToGridFn(this.state.gridSize, this.state.gridLine)

        this.game(this.state.gridSize, this.state.grid)

        let newGeneration = this.state.generation + 1;
        this.setState({ generation: newGeneration });
    }

    stopGame = () => {
        
    }

    resetGame = () => {
        this.setState({ generation: 0 });
    }

    gridToLineFn = (grid) => {
        var line = [] 
        for(var i = 0; i < grid.length; i++){
            for(var j = 0; j < grid[i].length; j++){
                line.push(grid[i][j])
            }
        }
        console.log("grid line:", line);
        this.setState({ gridLine: line });
        // return line
    }

    lineToGridFn = (gridSize, gridLine) => {
        var outerGrid = [] 
        var innerGrid = [] 
 
        for (var i = 0; i < gridLine.length; i++){
            if (innerGrid.length === gridSize-1 ) {
                innerGrid.push(gridLine[i])
                outerGrid.push(innerGrid)
                innerGrid = []
            }
            else {
                innerGrid.push(gridLine[i])
            }
        }
        console.log("outerGrid:", outerGrid);
        this.setState({ grid: outerGrid });
        // return outerGrid
    }

    game = (gridSize, grid) => {
        // If the cell is alive and has 2 or 3 neighbors, then it remains alive. Else it dies.
        // If the cell is dead and has exactly 3 neighbors, then it comes to life. Else if remains dead.
        // neighbor ==  [-1,-1] [-1, 0] [-1, 1]
        //              [ 0,-1] [  ,  ] [ 0, 1]
        //              [ 1,-1] [ 1, 0] [ 1, 1]
        // gridSize = 4
        // Grid
        // [ 0, 1, 2, 3]
        // [ 4,*5, 6, 7]
        // [ 8, 9,10,11]
        // [12,13,14,15]
        // 
        // neighbor =   0, 1, 2
        //              4,  , 6
        //              8, 9,10
        // neighbor =   -gridSize -1, -gridSize, -gridSize +1
        //                        -1,                     ,+1
        //              +gridSize -1, +gridSize, +gridSize +1 
        var newGridLine = []
        this.state.gridLine.map((cell, index) => {
            var neighbors = this.neighbors(index, this.state.gridLine, this.state.gridSize)
            if (cell === 1){ // cell alive
                if (neighbors === 2 || neighbors === 3){ // cell has 2 or 3 neighbors
                    newGridLine.push(1)
                } else {
                    newGridLine.push(0)
                }

            } else { // cell dead
                if (neighbors === 3){ // cell has 3 neighbors
                    newGridLine.push(1)
                } else {
                    newGridLine.push(0)
                }
            }
        })

        console.log("newGridLine", newGridLine)
        this.lineToGridFn(gridSize, newGridLine)
    }

    neighbors = (index, gridLine, gridSize) => {
        var neighbors = 0

        if ((index % gridSize) !== 0 && (index - gridSize) >= 0 && gridLine[index - gridSize - 1] === 1)   {neighbors += 1; console.log("1, true", index)}
        if ((index - gridSize) >= 0 && gridLine[index - gridSize    ] === 1)   {neighbors += 1; console.log("2, true", index)}
        if (((index+1) % gridSize) !== 0 && (index - gridSize) >= 0 && gridLine[index - gridSize + 1] === 1)   {neighbors += 1; console.log("3, true", index)}
        if ((index % gridSize) !== 0 && gridLine[index - 1] === 1)              {neighbors += 1; console.log("4, true", index)}
        if (((index+1) % gridSize) !== 0 && gridLine[index + 1] === 1)              {neighbors += 1; console.log("5, true", index)}
        if ((index % gridSize) !== 0 && gridLine[index + gridSize - 1] === 1)   {neighbors += 1; console.log("6, true", index)}
        if (gridLine[index + gridSize    ] === 1)   {neighbors += 1; console.log("7, true", index)}
        if (((index+1) % gridSize) !== 0 && gridLine[index + gridSize + 1] === 1)   {neighbors += 1; console.log("8, true", index)}
        console.log(index, neighbors)
        return neighbors
    }

    render(){
        return (
            <div className="App">
                generation: {this.state.generation}
                <Display grid={this.state.grid}/>
                <Controls startGame={this.startGame} stopGame={this.stopGame} resetGame={this.resetGame}/>
            </div>
        );
    }
}

export default Game;
