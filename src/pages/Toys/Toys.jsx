import React, { useEffect, useState } from 'react';
import AllToys from '../AllToys/AllToys';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const Toys = () => {
	const [toys, setToys] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/toys')
			.then((res) => res.json())
			.then((data) => {
				setToys(data);
			});
	}, []);

	return (
		<div>
			<div className="mb-20">
				<tbody className="flex justify-between py-7 px-5 bg-gray-200">
					<th>Seller</th>
					<th>Toy Name</th>
					<th>Sub Category</th>
					<th>Price</th>
					<th>Available Quantity</th>
					<th>View Details</th>
				</tbody>

				{toys.map((toy) => (
					<AllToys key={toy._id} toy={toy}></AllToys>
				))}
			</div>
		</div>
	);
};

export default Toys;
