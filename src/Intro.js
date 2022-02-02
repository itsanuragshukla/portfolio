import React from 'react'
import './Intro.css'
import PageHeading from './PageHeading'
import ButtonFilled from './ButtonFilled'
import ButtonHollow from './ButtonHollow'
import FollowIcons from './FollowIcons'

class Intro extends React.Component {
    constructor(props) {
        super()
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
				<ul id = "list" className="list">
				<li>Web Developer</li>
				<li>Programmer</li>
				<li>SoftWare Engineer</li>
                </ul>
            </div>
			<div id="btnDiv" className="btnDiv">
			<ButtonFilled text="Contact Me" scrollto="ContactMe" onClick={this.props.scrollToSection} />
			<ButtonHollow text="About me" scrollto="AboutMe" onClick={this.props.scrollToSection} />
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