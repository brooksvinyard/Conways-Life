import React from 'react';

import Controls from '../controls/controls'
import Display from '../display/display'

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            generation: 0,
            grid: [[1,0,1,1],[0,0,1,1],[1,0,0,1],[0,0,0,0]],
            gridSize: 15,
        }
    }

    startGame = () => {
        console.log("this.state.generation", this.state.generation);
        let newGeneration = this.state.generation + 1;
        this.setState({ generation: newGeneration });
    }

    stopGame = () => {
        
    }

    resetGame = () => {
        this.setState({ generation: 0 });
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
