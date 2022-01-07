import React from 'react'
import './ButtonFilled.css'

class ButtonFilled extends React.Component {
	constructor(props) {
		super()
	}
	render() {
		return (
			<button className="greenOne" onClick={this.props.onClick}>{this.props.text}</button>
		)
	}
}
export default ButtonFilled