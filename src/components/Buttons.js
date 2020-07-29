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
					<Button className="btn btn-default" onClick={this.props.nextStep}>
						Next
					</Button>
					<Button className="btn btn-default" onClick={this.props.clear}>
						Clear
					</Button>
				
					<DropdownButton
						title="Speed"
						id="size-menu"
						onSelect={this.handleSelect}
					>
						<Button className="btn btn-default" onClick={this.props.slow}>
							Slow
						</Button>
						<Button className="btn btn-default" onClick={this.props.medium}>
							Medium
						</Button>
					
						<Button className="btn btn-default" onClick={this.props.fast}>
							Fast
						</Button>
					</DropdownButton>
					
					<DropdownButton
						title="Presets"
						id="size-menu"
						onSelect={this.handleSelect}
					>
						<Button className="btn btn-default" onClick={this.props.seed}>
							Random
						</Button>
						<Button className="btn btn-default" onClick={this.props.dieHard}>
							Diehard
						</Button>
						<Button className="btn btn-default" onClick={this.props.gliderGun}>
							Glider Gun
						</Button>
						<Button className="btn btn-default" onClick={this.props.pulsar}>
						Pulsar
						</Button>
					</DropdownButton>

					<DropdownButton
						title="Grid Size"
						id="size-menu"
						onSelect={this.handleSelect}
					>
						<Dropdown.Item eventKey="1">25x25</Dropdown.Item>
						<Dropdown.Item eventKey="2">40x40</Dropdown.Item>
						<Dropdown.Item eventKey="3">50x50</Dropdown.Item>
					</DropdownButton>
			
			</div>
			)
	}
}

export default Buttons