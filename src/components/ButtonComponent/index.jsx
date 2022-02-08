import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonComponent = ({ children, handleClick, varient }) => {
	return (
		<Button variant={varient} type='submit' onClick={handleClick}>
			{children.label}
		</Button>
	);
};

export default ButtonComponent;
