import React from 'react'
import './Project.css'
import {
    ProjectIcons
} from './FollowIcons'
class Project extends React.Component {
    constructor(props) {
        super()
        this.state = {}
    }

    render() {
        const styles = {
            background: 'url('+this.props.data.img+')',
            height: !this.props.data.img ? "0": "250px",
            backgroundSize: "cover",
            backgroundPosition: "center center",
        };
        return(
            <div className="projectWrapper">
            <div className="projectImg" style={styles}></div>
            <div className="projectInfo">
            <h1 className="projectTitle">{this.props.data.title}</h1>
            <p>
                {this.props.data.desc}
            </p>
            <div className="projectLinks">
            <ProjectIcons data={this.props.data} />
            </div>
            <div className="projectTools">
            <ul>
                {this.props.data.tools.map(tool => {
                    return (<li key={tool}>{tool}</li>)
                })}
                </ul>
            </div>
            </div>
            </div>
        )
    }
}

export default Project
