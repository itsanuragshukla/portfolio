import React from 'react'
import './FollowIcons.css'

class FollowIcons extends React.Component {
    render () {
        return (
            <div className="followIcons">
			<div className="socialIcons linkdin"></div>
			<div className="socialIcons instagram"></div>
			<div className="socialIcons twitter"></div>
			<div className="socialIcons github"></div>
			<div className="socialIcons telegram"></div>
            </div>
        )
    }
}
class ProjectIcons extends React.Component {
    render() {
        return(
            <div className="followIcons">
            <div className="socialIcons github"></div>
            <div className="socialIcons link"></div>
            </div>
        )

    }
}

export default FollowIcons
    export {
        ProjectIcons
    }