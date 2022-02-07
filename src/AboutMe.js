import React from 'react'
import './AboutMe.css'
import PageHeading from './PageHeading'
import ButtonFilled from './ButtonFilled'
import ButtonHollow from './ButtonHollow'

class AboutMe extends React.Component {
	constructor(props) {
		super()
		this.state = {}
	}
	render() {
		const dummyText = "Hello! I'm Anurag Shukla, a passionate Software Developer. I develop Web and Android Applications. My core language is java and javascript. I like to develop softwares and tools by combining multiple tools available in programming world.";
		const dummyText2 = "Currently, I'm pursuing by bachelors in Computer Science and Engineering from MMMUT, Gorakhpur, India. I'm still in the learning phase and trying to discover and learn new things. ";
		return (
			<div id='AboutMe' className="AboutMe">
				<div className="HeadingAboutMe">
					<PageHeading text="About Me" />
			</div>
				<div className="MainAboutMe">
					<div id="imgAboutMe" className="imgAboutMe">
				</div>
					<div className="textAboutMe">
					{dummyText}<br />{dummyText2}
				</div>
			</div>
			<div id="btnDivAboutMe" className="btnDivAboutMe">
			<ButtonFilled text="Contact Me" scrollto="ContactMe" onClick={this.props.scrollToSection} />
			<ButtonHollow text="My Skills" scrollto="MySkills" onClick={this.props.scrollToSection} />
			</div>
			</div>
		)
	}
}
export default AboutMe