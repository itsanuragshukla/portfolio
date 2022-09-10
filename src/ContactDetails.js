import React from 'react';
import './ContactDetails.css';
import PageHeading from './PageHeading'
import FollowIcons from './FollowIcons'
import Grid from './Grid'
import GridElem from './GridElem'
import {scrollToSection} from './utils';
class ContactDetails extends React.Component {
  
  constructor(props){
    super()
    this.redirect=this.redirect.bind(this);
  }
  redirect = (url) => {
    window.open(url,"_blank");
  }
    render() {
        return(<div className="contactDetails">
        <PageHeading text="Socials" />
        <br/>
        <FollowIcons />
			<Grid>
			<GridElem text="Email" link="mailto:www.anuragshukla@gmail.com" />
			<GridElem text="LinkedIn" link="https://www.LinkedIn.com/in/therealanuragshukla" />
			<GridElem text="Back to Top" scrollTo="Root" onClick={scrollToSection}/>
			</Grid>
        
		</div>
        );
    }
}

export default ContactDetails;
