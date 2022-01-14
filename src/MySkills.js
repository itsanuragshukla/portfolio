import React from 'react'
import './MySkills.css'
import PageHeading from './PageHeading'
import ProgrammingSkills from './ProgrammingSkills'
import ButtonHollow from './ButtonHollow'
import ButtonFilled from './ButtonFilled'
import WebSkills from './WebSkills'
import OtherSkills from './OtherSkills'

class MySkills extends React.Component {
	constructor(props) {
		super()
		this.state = {
			programming: true,
			web: false,
			other: false,
		}
		this.toggleSection = this.toggleSection.bind(this)
	}
	toggleSection(e) {
		const section = e.target.getAttribute('data-label');
		this.setState(prevState => {
			const newStates = {}
			for (const key of Object.keys(prevState)) {
				if (key == section) {
					newStates[key] = true;
				} else {
					newStates[key] = false
				}
			}
			return newStates

		})}


	render() {
		return (
			<div id='MySkills' className="MySkills">
			<div className="HeadingMySkills">
				<PageHeading text="My Skills" />
			</div>
			<div className=" btnDivMySkills">
				<ButtonHollow fillBg={this.state.programming} text="Programming" label="programming" onClick={this.toggleSection} />
				<ButtonHollow fillBg={this.state.web} text="WEB" label="web" onClick={this.toggleSection} />
				<ButtonHollow fillBg={this.state.other} text="Other" label="other" onClick={this.toggleSection} />
			</div>
			<div className="MainMySkills">
				<div className="skillList">
					<ProgrammingSkills visible={this.state.programming} />
					<WebSkills visible={this.state.web} />
					<OtherSkills visible={this.state.other} />
				</div>
				<div className="btnDivAboutMe">
			<ButtonFilled text="Contact Me" scrollto="ContactMe" onClick={this.props.scrollToSection} />
			<ButtonHollow text="About me" scrollto="AboutMe" onClick={this.props.scrollToSection} />
				</div>
			</div>
			</div>
		)
	}
}
export default MySkills