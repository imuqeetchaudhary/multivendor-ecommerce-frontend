import './styles.css';
import React from 'react';

const InputComponent = ({
	label,
	type,
	className,
	value,
	handleChange,
	required,
}) => {
	return (
		<div>
			<label>{label}</label>
			<br />
			<input
				type={type}
				value={value}
				className={className}
				onChange={handleChange}
				required={required}
			/>
		</div>
	);
};

export default InputComponent;
