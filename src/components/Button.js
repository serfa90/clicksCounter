import React from "react";
import '../styles/Button.css'

function Button ({text, IsClickButton, clickHandle}){
	return(
		<button
		className={ IsClickButton ? 'click-button' : 'restart-button'}
		onClick={ clickHandle }>
			{ text }
		</button>
	)
}

export default Button