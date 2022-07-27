import React from 'react'

const Progress_bar = ({bgcolor,progress,height,color}) => {
	
	const Parentdiv = {
		height: height,
		width: '100%',
		backgroundColor: 'whitesmoke',
		borderRadius: 5,
		
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: color,
	      borderRadius:5,
            
		textAlign: 'right'
	}
	
	const progresstext = {
		padding: 10,
		color: 'black',
		fontWeight: 900
	}
		
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
		<span style={progresstext}></span>
	</div>
	</div>
	)
}

export default Progress_bar;
