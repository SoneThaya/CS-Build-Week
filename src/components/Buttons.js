import React from 'react'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';

class Buttons extends React.Component {

	handleSelect = (evt) => {
		this.props.gridSize(evt);
	}

	render() {
		return (
			<div className="center">
				
					<Button className="btn btn-primary" onClick={this.props.playButton}>
					Start
					</Button>
					
					<Button className="btn btn-default" onClick={this.props.pauseButton}>
					  Stop
					</Button>
					<Button className="btn btn-default" onClick={this.props.clear}>
					  Clear
					</Button>
					<Button className="btn btn-default" onClick={this.props.slow}>
					  Slow
					</Button>
					<Button className="btn btn-default" onClick={this.props.fast}>
					  Fast
					</Button>
					<Button className="btn btn-default" onClick={this.props.seed}>
					  Random
					</Button>
					<DropdownButton
						title="Grid Size"
						id="size-menu"
						onSelect={this.handleSelect}
					>
						<Dropdown.Item eventKey="1">20x20</Dropdown.Item>
						<Dropdown.Item eventKey="2">40x40</Dropdown.Item>
						<Dropdown.Item eventKey="3">50x50</Dropdown.Item>
					</DropdownButton>
			
			</div>
			)
	}
}

export default Buttons