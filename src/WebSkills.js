import React from 'react'
import Skill from './Skill'
class WebSkills extends React.Component {
	constructor(props) {
		super()

	}
	render() {
		return (
			this.props.visible ? <div>
		<Skill skillName="HTML" progress="90" />
				<Skill skillName="CSS" progress="70" />
				<Skill skillName="PHP" progress="40" />
				<Skill skillName="ReactJS" progress="80" />
				<Skill skillName="JQuery" progress="60" />
				<Skill skillName="NodeJS" progress="60" />
				<Skill skillName="ExpressJS" progress="60" />
				<Skill skillName="MongoDB" progress="40" />
			</div>: ""
		)
	}
}
export default WebSkills