import React from 'react'
import Box from './Box'

class Grid extends React.Component {
	render() {
		const width = (this.props.cols * 14);
		var rowsArr = [];

		var boxClass = "";
		// creates grid with rows and cols passed in, sets box id as [i][j]
		for (var i = 0; i < this.props.rows; i++) {
			for (var j = 0; j < this.props.cols; j++) {
				let boxId = i + "_" + j;

				// sets box class, if true its sets class as on, off if false
				boxClass = this.props.gridFull[i][j] ? "box on" : "box off";
				//creates grid by pushing into rowsArr
				rowsArr.push(
					<Box
						boxClass={boxClass}
						key={boxId}
						boxId={boxId}
						row={i}
						col={j}
						selectBox={this.props.selectBox}
					/>
				);
			}
		}

		return (
			<div className="grid" style={{ width: width }}>
				{/*renders rows array - grid */}
				{rowsArr}
			</div>
		);
	}
}


export default Grid
