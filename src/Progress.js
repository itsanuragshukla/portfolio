import React from 'react'
import './Progress.css'

class Progress extends React.Component {
	constructor(props) {
		super()
		this.state = {}
	}
	render() {
		return (
			<div className="progressDiv">
			<progress type="range" max="100" value={this.props.progress} className="progressBar">
				</progress>
				</div>
		)
	}
}
export default Progress