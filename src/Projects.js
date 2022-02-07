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
                img: "https://filmboard.mtu.edu/static/bucket/923aeb4a2b10f3e3cd793b3bde595df83c818cd5a4ea5d71486438f4b063c63ffa48fd6bc166ede140cd3d1f0a5e5c5db7388b63d1af96c9c69ebdce2c833acf.png",
                url: "https://itsanuragshukla.github.io/tmdb",
                github: "https://github.com/itsanuragshukla/tmdb"
            },
            {
                id:"2",
                title: "Music Player",
                desc: "A music player which is also a music library. It fetches the songs from GDrive using some cool GS tricks. Its my first ever project where I combined all my knowledge. ",
                tools: ["HTML","CSS","JavaScript","Jquery","GoogleAppsScript"],
                img: "https://source.unsplash.com/random/?music",
                url: "https://themusicplayer.herokuapp.com/",
                github: "https://github.com/itsanuragshukla/music"
            },
            {
                id:"3",
                title: "Tic-Tac-Toe",
                desc: "A simple Tic-Tac-Toe tac toe game, where opponent bot plays like a 2-years old",
                tools: ["HTML","CSS","JavaScript"],
                img:"https://images.unsplash.com/photo-1602632003094-0494b73b7c4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                url: "https://itsanuragshukla.github.io/ttt",
                github: "https://github.com/itsanuragshukla/ttt"
            },
            {
                id:"4",
                title: "15 Puzzle",
                desc: "A simple puzzle game, I developed to kill my boredom.",
                tools: ["HTML","CSS","JavaScript"],
                img: "https://source.unsplash.com/random/?puzzle",
                url: "https://itsanuragshukla.github.io/15puzzle",
                github: "https://github.com/itsanuragshukla/15puzzle"
            },
            {
                id:"5",
                title: "Profile Card",
                desc: "A profile card design to showcase your identity and all social handles at a single place, with a built-in contact form,through which anyone can communicate with you",
                tools: ["HTML","CSS","JavaScript"],
                img: "https://source.unsplash.com/random/?identity+card",
                url: "https://itsanuragshukla.github.io/profilecard",
                github: "https://github.com/itsanuragshukla/profileCard"
            },
            {
                id:"6",
                title: "ChatNow - PHP chat app",
                desc: "A chat application(web) , I created to learn PHP and file handling using PHP. This is a serverless realtime Chatting System, which uses text files to store and process chats. All the chat-data is encrypted using cryptoJS.",
                tools: ["HTML","CSS","PHP","JavaScript","CryptoJS"],
                img: "https://source.unsplash.com/random/?online+chat",
                url: "https://chatnowjs.herokuapp.com",
                github: "https://github.com/itsanuragshukla/chatnow"
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