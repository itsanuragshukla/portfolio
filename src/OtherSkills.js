import React from 'react'
import Skill from './Skill'
class OtherSkills extends React.Component {
	constructor(props) {
		super()

	}
	render() {
		return (
			this.props.visible ? <div>
			<Skill skillName="Shell" progress="60" />
				<Skill skillName="Linux-CLI" progress="40" />
				<Skill skillName="MySQL" progress="20" />
				<Skill skillName="Git" progress="70" />
				<Skill skillName="REGEX" progress="5" />

			</div>: ""
		)
	}
}
export default OtherSkills