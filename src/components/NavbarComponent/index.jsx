import './styles.css';
import React from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComp = ({ auth }) => {
	return (
		<>
			<Navbar fixed='top' bg='dark' variant='dark' expand={false}>
				<Container fluid='md'>
					<Navbar.Brand className='nav-brand'>
						<Link to='/'>A to Z Dressing 👕🩳🧣</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='offcanvasNavbar' />
					<Navbar.Offcanvas
						id='offcanvasNavbar'
						aria-labelledby='offcanvasNavbarLabel'
						placement='end'
						className='nav-offcanvas'
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title>Navbar Links</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className='nav-links'>
								{!auth ? (
									<>
										<Link to='/register'>Register</Link>
										<Link to='/login'>Login</Link>
										<Link to='/'>Home</Link>
										<Link to='/products'>Products</Link>
									</>
								) : localStorage.getItem('isAdmin') ? (
									<>
										<Link to='/'>Home</Link>
										<Link to='/products'>Products</Link>
										<Link to='/products/create'>Create Product</Link>
										<Link to='/cart'>Cart</Link>
										<Link to='/sales/mine'>My Sales</Link>
										<Link to='/sales/all'>All Sales</Link>
										<Link to='/products/sale-graph'>Sales Graph</Link>
										<Link to='/products/purchase-graph'>Purchases Graph</Link>
										<Link to='/purchases/mine'>My Purchases</Link>
										<Link
											to='/login'
											onClick={() => {
												localStorage.removeItem('token');
												localStorage.removeItem('isAdmin');
												window.location.href = 'http://localhost:3000/login';
											}}
										>
											Logout
										</Link>
									</>
								) : (
									<>
										<Link to='/'>Home</Link>
										<Link to='/products'>Products</Link>
										<Link to='/products/create'>Create Product</Link>
										<Link to='/cart'>Cart</Link>
										<Link to='/sales/mine'>My Sales</Link>
										<Link to='/purchases/mine'>My Purchases</Link>
										<Link
											to='/login'
											onClick={() => {
												localStorage.removeItem('token');
												localStorage.removeItem('isAdmin');
												window.location.href = 'http://localhost:3000/login';
											}}
										>
											Logout
										</Link>
									</>
								)}
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
};

export default NavbarComp;
