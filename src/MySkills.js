import React from 'react'
import './MySkills.css'
import PageHeading from './PageHeading'
import ButtonHollow from './ButtonHollow'
import ButtonFilled from './ButtonFilled'
import Skill from './Skill'
import {scrollToSection} from './utils'

class MySkills extends React.Component {
	constructor(props) {
		super()
		this.state = {
			programming: true,
			web: false,
			other: false,
			toShow:"programming",
			skills:{
				"length":0,
			}		
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
					newStates[key] = prevState[key]===true ? false: prevState[key]
				}
			}
			newStates.toShow=section
			return newStates

		})}
	componentDidMount=async ()=>{
	await fetch("https://raw.githubusercontent.com/theanuragshukla/extras/main/portfolio/skills.json")
		.then(res=>res.json())
			.then(res=>this.setState(prev=>{
				const newState = prev
				newState.skills=res
				return newState
			}))
	
	}

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
<div>
			{
				this.state.skills.length > 0 ? this.state.skills[this.state.toShow].map(skill=>{

					return <Skill key= {skill.title} skillName={skill.title} progress={skill.value}/>
				})
				: ""
	}			</div>
			</div>
				<div className="btnDivAboutMe">
			<ButtonFilled text="Contact Me" scrollto="ContactMe" onClick={scrollToSection} />
			<ButtonHollow text="About me" scrollto="AboutMe" onClick={scrollToSection} />
				</div>
			</div>
			</div>
		)
	}
}
export default MySkills
