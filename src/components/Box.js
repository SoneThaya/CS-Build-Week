import React from 'react'

// class Box extends React.Component {
// 	selectBox = () => {
// 		this.props.selectBox(this.props.row, this.props.col);
// 	}

// 	render() {
// 		return (
// 			<div
// 				className={this.props.boxClass}
// 				id={this.props.id}
// 				onClick={this.selectBox}
// 			/>
// 		);
// 	}
// }


const Box = ({ selectBox, row, col, boxClass }) => {
	const selectThis = () => {
		selectBox(row, col)
	}

	return (
		<div
				className={boxClass}
				onClick={selectThis}
			/>
	)
}

export default Box
