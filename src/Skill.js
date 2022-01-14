import React from 'react'
import './Skill.css'
import Progress from './Progress'

class Skill extends React.Component {
	constructor(props) {
		super()
		this.state = {
			//	progress: this.props.progress,
		}
	}
	render() {
		return (
			<div className="SkillMain">
			<div className="skillInfo">
				<h2>{this.props.skillName} </h2>
				<h2> {this.props.progress}%</h2>
			</div>
	<Progress progress={this.props.progress} />
			</div>
		)
	}
}

export default Skill