import React from 'react'
import './Intro.css'
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
			<button className="greenOne">Contact Me</button>
			<button className="nobg" onClick={this.aboutMe}>About Me</button>
			</div>
			<div>
			<div className="followDiv">
			<div className="decoDiv"></div>
			<div className="decoDiv decoMid">
Follow Me
				</div>
			<div className="decoDiv"></div>
				</div>
			<div>
				</div>
			</div>
			</div>
		)
	}
}


export default Intro