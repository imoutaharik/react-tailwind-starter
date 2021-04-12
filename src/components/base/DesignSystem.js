import React from 'react';
import BtnBase from "./Button";
import Container from "./Container";

const DesignSystem = () => {
	return(
		<div>
			<Container>
				<h1>Buttons</h1>
				<BtnBase text='Primary' stylingClass='primary'/>
				<BtnBase text='Secondary' stylingClass='secondary'/>
				<BtnBase text='Disabled' disabled={true}/>
			</Container>
		</div>
	)
};

export default DesignSystem;
