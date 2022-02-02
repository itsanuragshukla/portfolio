import React from 'react'
import './ContactMe.css'
import Form from './Form'
import PageHeading from './PageHeading'
import ContactDetails from './ContactDetails'
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
			<Form />
			<ContactDetails/>
            </div>
            </div>
        )
    }
}
export default ContactMe