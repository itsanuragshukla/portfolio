import React from 'react'
import './GridElem.css'
const GridElem = ({text, link, img, blank, heading, scrollTo, onClick}) => {
	const handleClick=()=>{
		link && (blank==false?window.open=(link):window.open(link, '_blank'))
	}
	return (
		<>
		<div className={heading?"gridElem heading":"gridElem item"} data-scrollto={scrollTo}  onClick={onClick?onClick:handleClick}>
		<div className={img ? 'img' : "img hidden"}>
		<img src={img} alt={text}/>
		</div>
		{text}
		</div>
		</>
	)
}
export default GridElem
