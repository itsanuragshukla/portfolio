import React from 'react'
function scrollToSection(e) {
	window.scrollTo(0, document.getElementById(e.target.getAttribute("data-scrollto")).offsetTop);
}
export default scrollToSection;