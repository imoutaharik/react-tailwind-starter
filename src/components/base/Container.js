import React from 'react';

const Container = (props) => {
	return(
		<div className='p-8 m-8'>
			{props.children}
		</div>
	)
}

export default Container
