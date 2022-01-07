import React from 'react'
import './Intro.css'
import PageHeading from './PageHeading'
import ButtonFilled from './ButtonFilled'
import ButtonHollow from './ButtonHollow'
import FollowIcons from './FollowIcons'

class Intro extends React.Component {
	constructor(props) {
		super()
		this.aboutMe = this.aboutMe.bind(this);
	}
	aboutMe() {
		window.scrollTo(0, document.getElementById('page2').offsetTop)
	}
	render() {
		return (
			<div className="introDiv">
			<div>
			<div className="helloDiv">
Hello! I am
			</div>
				<h1 className="name">Anurag Shukla</h1>
			</div>
				<div>
				<h3 className="job">Full Stack Developer</h3>
				<ul className="list">
				<li>Web Developer</li>
				<li>Programmer</li>
				<li>SoftWare Engineer</li>
				</ul>
			</div>
			<div className="btnDiv">
			<ButtonFilled text="Contact Me" />
			<ButtonHollow text="About me" onClick={this.aboutMe} />
			</div>
			<div>
			<PageHeading text="Follow Me" />
			<FollowIcons />
			</div>
			</div>
		)
	}
}


export default Intro