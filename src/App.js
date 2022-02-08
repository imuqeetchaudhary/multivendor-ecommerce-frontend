import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import NavbarComponent from './components/NavbarComponent';
import HomeContainer from './containers/HomeContainer';
import RegisterContainer from './containers/RegisterContainer';
import LoginContainer from './containers/LoginContainer';
import CreateProductContainer from './containers/CreateProductContainer';
import UpdateProductContainer from './containers/UpdateProductContainer';

const queryClient = new QueryClient();

function App() {
	const [auth, setAuth] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('token');
		token && setAuth(true);
	}, []);

	return (
		<div className='App'>
			<QueryClientProvider client={queryClient}>
				<Router>
					<NavbarComponent auth={auth} />
					<ToastContainer />
					<Routes>
						<Route path='/' element={<HomeContainer />} />
						<Route
							path='/register'
							element={<RegisterContainer setAuth={setAuth} />}
						/>
						<Route path='/login' element={<LoginContainer setAuth={setAuth} />} />
						<Route path='/products/create' element={<CreateProductContainer />} />
						<Route path='/products/update' element={<UpdateProductContainer />} />
					</Routes>
				</Router>
				<ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
			</QueryClientProvider>
		</div>
	);
}

export default App;
