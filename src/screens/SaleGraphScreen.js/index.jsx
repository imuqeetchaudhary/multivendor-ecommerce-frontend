import './styles.css';
import 'chart.js/auto';
import React from 'react';
import { Bar } from 'react-chartjs-2';

const SaleGraphScreen = ({ users, handleSelectChange, productsGraph }) => {
	return (
		<div className='sale-graph-screen'>
			<select className='select-seller' onChange={handleSelectChange}>
				Select a Seller
				{users?.map(user => (
					<option key={user.userId} value={user.userId}>
						{user.name}
					</option>
				))}
			</select>
			{productsGraph?.length > 0 ? (
				<Bar
					data={{
						labels: productsGraph?.map(product => product.title),
						datasets: [
							{
								label: 'Number of times this product sold is',
								data: productsGraph?.map(product => product.saleQuantity),
								backgroundColor: [
									'rgba(255, 99, 132, 0.2)',
									'rgba(255, 159, 64, 0.2)',
									'rgba(255, 205, 86, 0.2)',
									'rgba(75, 192, 192, 0.2)',
									'rgba(54, 162, 235, 0.2)',
									'rgba(153, 102, 255, 0.2)',
									'rgba(201, 203, 207, 0.2)',
								],
								borderColor: [
									'rgb(255, 99, 132)',
									'rgb(255, 159, 64)',
									'rgb(255, 205, 86)',
									'rgb(75, 192, 192)',
									'rgb(54, 162, 235)',
									'rgb(153, 102, 255)',
									'rgb(201, 203, 207)',
								],
								borderWidth: 1,
							},
						],
					}}
					height={200}
					width={600}
					options={{
						maintainAspectRatio: true,
					}}
				/>
			) : (
				<h2 className='heading'>This user don't have any product</h2>
			)}
		</div>
	);
};

export default SaleGraphScreen;
