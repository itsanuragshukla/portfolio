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
		const dummyText = "Top Cat! The most effectual Top Cat! Who’s intellectual close friends get to call him T.C., providing it’s with dignity. Top Cat! The indisputable leader of the gang. He’s the boss, he’s a pip, he’s the championship. He’s the most tip top, Top Cat.";
		const dummyText2 = "This is my boss, Jonathan Hart, a self-made millionaire, he’s quite a guy. This is Mrs H., she’s gorgeous, she’s one lady who knows how to take care of herself. By the way, my name is Max. I take care of both of them, which ain’t easy, ’cause when they met it was MURDER!";
		return (
			<div id='AboutMe' className="AboutMe">
				<div className="HeadingAboutMe">
					<PageHeading text="About Me" />
			</div>
				<div className="MainAboutMe">
					<div className="imgAboutMe">
				</div>
					<div className="textAboutMe">
					{dummyText}<br/>{dummyText2}
				</div>
			</div>
			<div className="btnDivAboutMe">
			<ButtonFilled text="Contact Me" scrollto="ContactMe" onClick={this.props.scrollToSection} />
			<ButtonHollow text="About me" scrollto="AboutMe" onClick={this.props.scrollToSection} />
			</div>
			</div>
		)
	}
}
export default AboutMe