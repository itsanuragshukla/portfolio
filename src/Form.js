import React from 'react'
import './Form.css'
class Form extends React.Component {
	constructor(props) {
		super()
		this.state = {
		  name:"",
		  email:"",
		  message:"",
		}
		this.handleChange=this.handleChange.bind(this)
	}

 handleChange(e) {
  this.setState({
      [e.target.name]: (e.target.value),
    
  }
    )
    console.log(this.state)
}

	render() {
		return (
			<div className="formMain">
			<form className="form">
			<input className="input" onChange={this.handleChange} type="Text" name="name" placeholder="Name" />
			<input className="input" onChange={this.handleChange} type="email" name="email" placeholder="Email" />
			<input type="Text" onChange={this.handleChange} className=' input message' name="message" placeholder="Message" />
			<button className="submitBtn">Submit</button>
			</form>
			</div>
		)
	}
}
export default Form