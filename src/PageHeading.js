import React from 'react'
import './PageHeading.css'

class PageHeading extends React.Component{
	constructor(props){
		super()
	}
	render(){
		return (
			<div className="followDiv">
			<div className="decoDiv decoLeft"></div>
			<div className="decoDiv decoMid">
			{this.props.text}
				</div>
			<div className="decoDiv decoRight"></div>
				</div>
			)
	}
}
export default PageHeading