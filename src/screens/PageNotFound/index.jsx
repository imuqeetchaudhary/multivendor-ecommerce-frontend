import './styles.css';
import React from 'react';
import img from '../../assets/images/not-found-page.jpg';

const PageNotFound = () => {
	return (
		<div>
			<img className='not-found' alt='page-not-found' src={img} />
		</div>
	);
};

export default PageNotFound;
