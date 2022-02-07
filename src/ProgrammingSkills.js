import React from 'react'
import Skill from './Skill'
class ProgrammingSkills extends React.Component {
	constructor(props) {
		super()

	}
	render() {
		return (
			this.props.visible ? <div>
				<Skill skillName="JAVA" progress="60" />
				<Skill skillName="Python" progress="50" />
				<Skill skillName="C" progress="45" />
				<Skill skillName="C++" progress="40" />
				<Skill skillName="JavaScript" progress="75" />
			</div>: ""
		)
	}
}
export default ProgrammingSkills