import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderMenuItems({ dish, onClick }) {
	return (
		<Card>
			<Link to='/home'>
				<CardImg width="100%" object src={dish.image} alt={dish.name} />
				<CardImgOverlay>
					<CardTitle><h5> {dish.name} </h5></CardTitle>
					{/*<p> {dish.description} </p>*/}
				</CardImgOverlay>
			</Link>
		</Card> 
	);
}

const Menu = (props) => {

		const menu = props.dishes.map((dish) => {
			return (
				<div key={dish.id} className="col-12 col-md-5 mt-4">
					<RenderMenuItems dish={dish} />
				</div> 
			)
		});

		return (
			<div className='container'>
				<div className='row'>
					{menu}
				</div>
			</div> 
		);
}

export default Menu;

