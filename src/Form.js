import React from 'react'
import './Form.css'
class Form extends React.Component {
	constructor(props) {
		super()
		this.state = {}
	}

	render() {
		return (
			<div className="formMain">
			<form className="form">
			<fieldset>
			<legend>Hello World</legend>
			<input type="Text" name="name" placeholder="Enter your Name" />
			<input type="Text" name="name" placeholder="Enter your Name" />
			<input type="Text" name="name" placeholder="Enter your Name" />
			</fieldset>
			<button>Submit</button>

			</form>
			</div>
		)
	}
}
export default Form