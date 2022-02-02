import React from 'react'
import './Form.css'
import ButtonHollow from './ButtonHollow'
class Form extends React.Component {
    constructor(props) {
        super()
        this.state = {
            name: "",
            email: "",
            message: "",
        }
        this.handleChange = this.handleChange.bind(this)
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
			<div contenteditable='true' onChange={this.handleChange} className=' input message' />
			<ButtonHollow text="Submit" />
            </form>
            </div>
        )
    }
}
export default Form