import React from 'react'
import './AboutMe.css'
import PageHeading from './PageHeading'
class AboutMe extends React.Component {
	constructor(props) {
		super()
		this.state = {}
	}
	render() {
		return (
			<div id='AboutMe' className="AboutMe">
			<div className="HeadingAboutMe">
			<PageHeading text="About Me" />
			</div>
			<div className="MainAboutMe">
			<div className="imgAboutMe"></div>
			</div>
			</div>
		)
	}
}
export default AboutMe