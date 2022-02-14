import './styles.css';
import React from 'react';
import { Card } from 'react-bootstrap';

const SaleCard = ({
	image,
	productTitle,
	buyerName,
	sellerName,
	productPrice,
	saleQuantity,
	totalSalePrice,
	productDescription,
}) => {
	return (
		<div className='sale-card'>
			<Card border='primary'>
				<Card.Img src={`http://localhost:8000/${image}`} />
				<Card.Body>
					<Card.Text>Product Title: {productTitle}</Card.Text>
					<Card.Text>Product Price: {productPrice}</Card.Text>
					<Card.Text>Sale Quantity: {saleQuantity}</Card.Text>
					<Card.Text>Total Sale Price: {totalSalePrice}</Card.Text>
					<Card.Text>Buyer Name: {buyerName}</Card.Text>
					<Card.Text>Seller Name: {sellerName}</Card.Text>
					<Card.Text>Product Description: {productDescription}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default SaleCard;
