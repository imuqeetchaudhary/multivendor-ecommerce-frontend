import './styles.css';
import React from 'react';
import { Card } from 'react-bootstrap';
import ButtonComponent from '../ButtonComponent';
import { Link } from 'react-router-dom';
import { useTotalQuantityOfProductSoldQuery } from '../../hooks/sale';

const ProductCard = ({
	image,
	title,
	detail,
	price,
	no,
	children,
	handleCartChange,
	handleDeleteProduct,
	handleCreateNewSale,
	handleIncrementCartProductQuantityChange,
	handleDecrementCartProductQuantityChange,
}) => {
	const productId = children.id;
	const { data } = useTotalQuantityOfProductSoldQuery(productId);

	return (
		<div className='single-card'>
			<Card border='primary'>
				<Card.Img src={`http://localhost:8000/${image}`} />
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{detail}</Card.Text>
					<Card.Text>$ {price}</Card.Text>
					{!children.cart && (
						<Card.Text>
							This product is sold out {data?.data.totalNumberOfQuantitySold || 0}
							times
						</Card.Text>
					)}
					{children.cart && (
						<Card.Text>
							<ButtonComponent
								variant={'outline-danger'}
								handleClick={e =>
									handleDecrementCartProductQuantityChange(e, children.id)
								}
								children={{ label: '-' }}
							/>

							{`         ${children.quantity} ${no}         `}
							<ButtonComponent
								variant={'outline-success'}
								handleClick={e =>
									handleIncrementCartProductQuantityChange(e, children.id)
								}
								children={{ label: '+' }}
							/>
						</Card.Text>
					)}
					{localStorage.getItem('token') ? (
						<>
							{children.route === '/products' && (
								<>
									<Card.Text>
										<Link to='/products/update'>
											<ButtonComponent children={{ label: 'Edit Product' }} />
										</Link>
									</Card.Text>
									{'	'}
									<ButtonComponent
										handleClick={e => handleDeleteProduct(e, children.id)}
										children={{ label: 'Delete Product' }}
									/>
								</>
							)}
							{'	'}
							{children.cart && (
								<ButtonComponent
									handleClick={e => handleCreateNewSale(e, children.id)}
									children={{ label: children.saleButton }}
								/>
							)}
							<ButtonComponent
								handleClick={e => handleCartChange(e, children.id)}
								children={{ label: children.button }}
							/>
						</>
					) : (
						<ButtonComponent
							children={{ label: 'Login first to add items to cart' }}
						/>
					)}
				</Card.Body>
			</Card>
		</div>
	);
};

export default ProductCard;
