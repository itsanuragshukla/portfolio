import React from 'react'
import './Projects.css'
import PageHeading from './PageHeading'
import Project from './Project'
class Projects extends React.Component {
    constructor(props) {
        super()
        this.state = {
            projects: []
        }
    }
	componentDidMount=()=>{
		fetch("https://raw.githubusercontent.com/theanuragshukla/extras/main/portfolio/projects.json")
		.then(res=>res.json())
		.then(res=>this.setState(prev=>{return prev.projects=res}))
	}
    render() {
        return(<div id="Projects" className="projects">
        <PageHeading text="Projects" />
        <div className="projectsMain">
        {
            this.state.projects.map(project => {
                return(<Project key={project.id} data={project} />)
            })
            }
        </div>
        </div>
        )
    }
}

export default Projects
