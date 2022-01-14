import React from 'react'
import './ButtonHollow.css'

class ButtonHollow extends React.Component {
	constructor(props) {
		super()
	}
	render() {
		return (
			<button className={this.props.fillBg ? "greenOne":"nobg"} data-label={this.props.label} data-scrollto={this.props.scrollto} onClick={this.props.onClick}>{this.props.text}</button>
		)
	}
}
export default ButtonHollow