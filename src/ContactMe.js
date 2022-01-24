import React from 'react'
import './ContactMe.css'
import Form from './Form'
import PageHeading from './PageHeading'
class ContactMe extends React.Component {
	constructor(props) {
		super()
		this.state = {}
	}
	render() {
		return (
			<div id='ContactMe' className="ContactMe">
			<div className="HeadingContactMe">
			<PageHeading text="Contact Me" />
			</div>
			<div className="MainContactMe">
		{//	<Form />
		}
		
			</div>
			</div>
		)
	}
}
export default ContactMe
