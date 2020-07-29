import React from 'react';
import './App.css';
import Grid from './components/Grid';
import Buttons from './components/Buttons'
import Rules from './components/Rules'



class App extends React.Component {
	constructor() {
		super();
		this.speed = 100;
		this.rows = 35;
		this.cols = 45;

		this.state = {
			generation: 0,
			gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
		};
		
	}
	

	selectBox = (row, col) => {
		let gridCopy = arrayClone(this.state.gridFull);
		gridCopy[row][col] = !gridCopy[row][col];
		this.setState({
			gridFull: gridCopy
		});
	}

	seed = () => {
		let gridCopy = arrayClone(this.state.gridFull);
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				if (Math.floor(Math.random() * 4) === 1) {
					gridCopy[i][j] = true;
				}
			}
		}
		this.setState({
			gridFull: gridCopy
		});
	}

	dieHard = () => {
		let gridCopy = arrayClone(this.state.gridFull);
		
					gridCopy[17][16] = true;
					gridCopy[18][10] = true;
					gridCopy[18][11] = true;
					gridCopy[19][11] = true;
					gridCopy[19][15] = true;
					gridCopy[19][16] = true;
					gridCopy[19][17] = true;
		
		this.setState({
			gridFull: gridCopy
		});
	}

	gliderGun = () => {
		let gridCopy = arrayClone(this.state.gridFull);
		
					gridCopy[5][1] = true;
					gridCopy[5][2] = true;
					gridCopy[6][1] = true;
					gridCopy[6][1] = true;
					gridCopy[3][13] = true;
					gridCopy[3][14] = true;
					gridCopy[4][12] = true;
					gridCopy[4][16] = true;
					gridCopy[5][11] = true;
					gridCopy[5][17] = true;
					gridCopy[6][11] = true;
					gridCopy[6][15] = true;
					gridCopy[6][17] = true;
					gridCopy[6][18] = true;
					gridCopy[7][11] = true;
					gridCopy[7][17] = true;
					gridCopy[8][12] = true;
					gridCopy[8][16] = true;
					gridCopy[9][13] = true;
					gridCopy[9][14] = true;
					gridCopy[1][25] = true;
					gridCopy[2][23] = true;
					gridCopy[2][25] = true;
					gridCopy[3][21] = true;
					gridCopy[3][22] = true;
					gridCopy[4][21] = true;
					gridCopy[4][22] = true;
					gridCopy[5][21] = true;
					gridCopy[5][22] = true;
					gridCopy[6][23] = true;
					gridCopy[6][25] = true;
					gridCopy[7][25] = true;
					gridCopy[3][35] = true;
					gridCopy[3][36] = true;
					gridCopy[4][35] = true;
					gridCopy[4][36] = true;
		
		this.setState({
			gridFull: gridCopy
		});
	}

	pulsar = () => {
		let gridCopy = arrayClone(this.state.gridFull);
		
					gridCopy[2][4] = true;
					gridCopy[2][5] = true;
					gridCopy[2][6] = true;
					gridCopy[2][10] = true;
					gridCopy[2][11] = true;
					gridCopy[2][12] = true;
					gridCopy[4][2] = true;
					gridCopy[4][7] = true;
					gridCopy[4][9] = true;
					gridCopy[4][14] = true;
					gridCopy[5][2] = true;
					gridCopy[5][7] = true;
					gridCopy[5][9] = true;
					gridCopy[5][14] = true;
					gridCopy[6][2] = true;
					gridCopy[6][7] = true;
					gridCopy[6][9] = true;
					gridCopy[6][14] = true;
					gridCopy[7][4] = true;
					gridCopy[7][5] = true;
					gridCopy[7][6] = true;
					gridCopy[7][10] = true;
					gridCopy[7][11] = true;
					gridCopy[7][12] = true;
		
		this.setState({
			gridFull: gridCopy
		});
	}


	playButton = () => {
		clearInterval(this.intervalId);
		this.intervalId = setInterval(this.play, this.speed);
	}

	pauseButton = () => {
		clearInterval(this.intervalId);
	}

	slow = () => {
		this.speed = 1200;
		this.playButton();
	}

	medium = () => {
		this.speed = 700;
		this.playButton();
	}

	fast = () => {
		this.speed = 100;
		this.playButton();
	}

	clear = () => {
		var grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
		this.setState({
			gridFull: grid,
			generation: 0
		});
	}

	gridSize = (size) => {
		switch (size) {
			case "1":
				this.cols = 25;
				this.rows = 25;
			break;
			case "2":
				this.cols = 40;
				this.rows = 40;
			break;
			default:
				this.cols = 50;
				this.rows = 50;
		}
		this.clear();

	}

	nextStep = () => {
		let g = this.state.gridFull;
		let g2 = arrayClone(this.state.gridFull);

		for (let i = 0; i < this.rows; i++) {
		  for (let j = 0; j < this.cols; j++) {
		    let count = 0;
		    if (i > 0) if (g[i - 1][j]) count++;
		    if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
		    if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
		    if (j < this.cols - 1) if (g[i][j + 1]) count++;
		    if (j > 0) if (g[i][j - 1]) count++;
		    if (i < this.rows - 1) if (g[i + 1][j]) count++;
		    if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
		    if (i < this.rows - 1 && j < this.cols - 1) if (g[i + 1][j + 1]) count++;
		    if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
				if (!g[i][j] && count === 3) g2[i][j] = true;
				
				if (g[i][j] === false && g2[i][j] === false) this.pauseButton()
		  }
		}
		this.setState({
		  gridFull: g2,
		  generation: this.state.generation + 1
		});

	}

	play = () => {
		let g = this.state.gridFull;
		let g2 = arrayClone(this.state.gridFull);

		for (let i = 0; i < this.rows; i++) {
		  for (let j = 0; j < this.cols; j++) {
		    let count = 0;
		    if (i > 0) if (g[i - 1][j]) count++;
		    if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
		    if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
		    if (j < this.cols - 1) if (g[i][j + 1]) count++;
		    if (j > 0) if (g[i][j - 1]) count++;
		    if (i < this.rows - 1) if (g[i + 1][j]) count++;
		    if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
		    if (i < this.rows - 1 && j < this.cols - 1) if (g[i + 1][j + 1]) count++;
		    if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
				if (!g[i][j] && count === 3) g2[i][j] = true;
		  }
		}
		this.setState({
		  gridFull: g2,
		  generation: this.state.generation + 1
		});

	}

	componentDidMount() {
		this.seed();
		this.playButton();
	}

	render() {
		return (
			<div>
				<h1>Conway's Game of Life</h1>
				<Buttons
					playButton={this.playButton}
					pauseButton={this.pauseButton}
					slow={this.slow}
					medium={this.medium}
					fast={this.fast}
					clear={this.clear}
					seed={this.seed}
					dieHard={this.dieHard}
					gliderGun={this.gliderGun}
					pulsar={this.pulsar}
					gridSize={this.gridSize}
					nextStep={this.nextStep}
				/>
				<Grid
					gridFull={this.state.gridFull}
					rows={this.rows}
					cols={this.cols}
					selectBox={this.selectBox}
				/>
				<h2>Generations: {this.state.generation}</h2>

				<div style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
					<Rules />
				</div>

				
				<h4>About</h4>
				<p>The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine.</p>
			</div>
		);
	}
}

function arrayClone(arr) {
	return JSON.parse(JSON.stringify(arr));
}

export default App