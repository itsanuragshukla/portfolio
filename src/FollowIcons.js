import React from 'react'
import './FollowIcons.css'

class FollowIcons extends React.Component {
  constructor(props){
    super();
    this.state={
      linkdin:"https://www.linkedin.com/in/therealanuragshukla/",
      instagram:"https://instagram.com/therealanuragshukla",
      twitter:"https://www.twitter.com/itsanuragshukla/",
      github:"https://github.com/theanuragshukla/",
      telegram:"https://t.me/therealanuragshukla",
    }
    this.redirect=this.redirect.bind(this);
  }
  redirect = (url) => {
    window.open(url,"_blank");
  }
    render () {
        return (
            <div className="followIcons">
			<div onClick={()=>{this.redirect(this.state.linkdin)}} className="socialIcons linkdin"></div>
			<div onClick={()=>{this.redirect(this.state.instagram)}} className="socialIcons instagram"></div>
			<div onClick={()=>{this.redirect(this.state.twitter)}} className="socialIcons twitter"></div>
			<div onClick={()=>{this.redirect(this.state.github)}} className="socialIcons github"></div>
			<div onClick={()=>{this.redirect(this.state.telegram)}} className="socialIcons telegram"></div>
            </div>
        )
    }
}
class ProjectIcons extends React.Component {
  constructor(props){
    super();
        this.redirect=this.redirect.bind(this);

  }
    redirect = (url) => {
    window.open(url,"_blank");
  }
    render() {
        return(
            <div className="followIcons">
            <div onClick={()=>{this.redirect(this.props.data.github)}} className="socialIcons github"></div>
            <div onClick={()=>{this.redirect(this.props.data.url)}} className="socialIcons link"></div>
            </div>
        )

    }
}

export default FollowIcons
    export {
        ProjectIcons
    }