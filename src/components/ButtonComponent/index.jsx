import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonComponent = ({ children, handleClick, variant }) => {
	return (
		<Button variant={variant} type='submit' onClick={handleClick}>
			{children.label}
		</Button>
	);
};

export default ButtonComponent;
