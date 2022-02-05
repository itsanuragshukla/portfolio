import React from 'react'
import './Projects.css'
import PageHeading from './PageHeading'
import Project from './Project'
class Projects extends React.Component {
    constructor(props) {
        super()
        this.state = {
            projects: [{
                id:"1",
                title: "The Movie DataBase",
                desc: "This is a movie database designed and developed using reactJS in its core. This App uses TMDB API to fetch and display the data.",
                tools: ["react","react-router","styled-component"],
                img: "https://source.unsplash.com/random/?text",
                url: "https://itsanuragshukla.github.io/tmdb",
                github: "https://github.com/itsanuragshukla/tmdb"
            },
            {
                id:"2",
                title: "The Movie DataBase",
                desc: "This is a movie database designed and developed using reactJS in its core. This App uses TMDB API to fetch and display the data.",
                tools: ["react","react-router","styled-component"],
                img: "https://source.unsplash.com/random/?text",
                url: "https://itsanuragshukla.github.io/tmdb",
                github: "https://github.com/itsanuragshukla/tmdb"
            },
            {
                id:"3",
                title: "The Movie DataBase",
                desc: "This is a movie database designed and developed using reactJS in its core. This App uses TMDB API to fetch and display the data.",
                tools: ["react","react-router","styled-component"],
                img: "https://source.unsplash.com/random/?text",
                url: "https://itsanuragshukla.github.io/tmdb",
                github: "https://github.com/itsanuragshukla/tmdb"
            },
            {
                id:"4",
                title: "The Movie DataBase",
                desc: "This is a movie database designed and developed using reactJS in its core. This App uses TMDB API to fetch and display the data.",
                tools: ["react","react-router","styled-component"],
                img: "https://source.unsplash.com/random/?text",
                url: "https://itsanuragshukla.github.io/tmdb",
                github: "https://github.com/itsanuragshukla/tmdb"
            },
            {
                id:"5",
                title: "The Movie DataBase",
                desc: "This is a movie database designed and developed using reactJS in its core. This App uses TMDB API to fetch and display the data.",
                tools: ["react","react-router","styled-component"],
                img: "https://source.unsplash.com/random/?text",
                url: "https://itsanuragshukla.github.io/tmdb",
                github: "https://github.com/itsanuragshukla/tmdb"
            },
            {
                id:"6",
                title: "The Movie DataBase",
                desc: "This is a movie database designed and developed using reactJS in its core. This App uses TMDB API to fetch and display the data.",
                tools: ["react","react-router","styled-component"],
                img: "https://source.unsplash.com/random/?text",
                url: "https://itsanuragshukla.github.io/tmdb",
                github: "https://github.com/itsanuragshukla/tmdb"
            },]
        }
    }
    render() {
        return(<div className="projects">
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