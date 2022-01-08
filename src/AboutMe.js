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
		return (
			<div id='AboutMe' className="AboutMe">
				<div className="HeadingAboutMe">
					<PageHeading text="About Me" />
			</div>
				<div className="MainAboutMe">
					<div className="imgAboutMe">
				
				</div>
					<div className="textAboutMe">
					<p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> Corporis maxime, odit quaerat laboriosam reiciendis saepe rem beatae commodi facilis quisquam laudantium, doloribus in! Mollitia corporis distinctio id repellendus similique autem enim maxime dignissimos, ducimus veritatis minima quas, magnam qui.<br /> Incidunt animi debitis corrupti dolorem sed inventore odit est reiciendis. Possimus eligendi asperiores unde iusto commodi tempore porro maxime deserunt laborum numquam quibusdam minus facere quas temporibus molestiae impedit architecto, totam, rem ipsa, aspernatur? Unde repellendus, a.<br /> Nihil voluptatum fugiat, eius ullam excepturi incidunt ipsum perspiciatis quae, sapiente dolorum ea architecto saepe repudiandae consectetur laudantium, rerum dicta. Iure ipsum, veritatis similique!
					</p>
							<div className="btnDiv">
			<ButtonFilled text="Contact Me" scrollto="ContactMe" onClick={this.props.scrollToSection} />
			<ButtonHollow text="About me" scrollto="AboutMe" onClick={this.props.scrollToSection} />
					</div>
				</div>
			</div>
			</div>
		)
	}
}
export default AboutMe