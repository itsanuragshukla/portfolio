import React from 'react'
import './ButtonHollow.css'

class ButtonHollow extends React.Component {
	constructor(props) {
		super()
	}
	render() {
		return (
			<button className="nobg" data-scrollToId={this.props.scrollToId} onClick={this.props.onClick} >{this.props.text}</button>
		)
	}
}
export default ButtonHollow