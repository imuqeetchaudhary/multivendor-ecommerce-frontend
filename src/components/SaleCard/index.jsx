import './styles.css';
import React from 'react';
import { Card } from 'react-bootstrap';
import ButtonComponent from '../ButtonComponent';
import { Link } from 'react-router-dom';

const SaleCard = ({
	saleId,
	image,
	productTitle,
	buyerName,
	sellerName,
	saleQuantity,
	totalSalePrice,
	getSingleSale,
}) => {
	return (
		<div className='sale-card'>
			<Card border='primary'>
				<Card.Img src={`http://localhost:8000/${image}`} />
				<Card.Body>
					<Card.Text>Product Title: {productTitle}</Card.Text>
					<Card.Text>Buyer Name: {buyerName}</Card.Text>
					<Card.Text>Seller Name: {sellerName}</Card.Text>
					<Card.Text>Sale Quantity: {saleQuantity}</Card.Text>
					<Card.Text>Total Sale Price: {totalSalePrice}</Card.Text>
					<Card.Text>
						<Link to='/sale/:saleId'>
							<ButtonComponent
								children={{ label: 'View Sale' }}
								handleClick={e => getSingleSale(e, saleId)}
							/>
						</Link>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default SaleCard;
