import React from 'react'
import Skill from './Skill'
class OtherSkills extends React.Component {
	constructor(props) {
		super()

	}
	render() {
		return (
			this.props.visible ? <div>
			<Skill skillName="SHell" progress="60" />
				<Skill skillName="MySQL" progress="50" />
				<Skill skillName="Git" progress="70" />
				<Skill skillName="REGEX" progress="5" />
				<Skill skillName="G-Script" progress="70" />

			</div>: ""
		)
	}
}
export default OtherSkills