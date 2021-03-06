import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Loading} from './LoadingComponent.js'; 
import {baseUrl} from '../shared/baseUrl.js';

function RenderMenuItems({ dish, onClick }) {
	return (
		<Card>
			<Link to={`/menu/${dish.id}`}>
				<CardImg width="100%" object src={baseUrl + dish.image} alt={dish.name} />
				<CardImgOverlay>
					<CardTitle><h5> {dish.name} </h5></CardTitle>
				</CardImgOverlay>
			</Link>
		</Card> 
	);
}

const Menu = (props) => {

		const menu = props.dishes.dishes.map((dish) => {
			return (
				<div key={dish.id} className="col-12 col-md-5 mt-4">
					<RenderMenuItems dish={dish} />
				</div> 
			)
		});

		if (props.dishes.isLoading) {
			return (
				<div className='container'>
					<div className='row'>
						<Loading />
					</div>
				</div>
			);
		}

		else if (props.dishes.errmess) {

			return (
				<div className='container'>
					<div className='row'>
						<h4> {props.dishes.errmess} </h4>
					</div>
				</div>
			);
		}

		else {

			return (
				<div className='container'>
					<div className='row'>
						<Breadcrumb>
							<BreadcrumbItem><Link to='/home'> Home </Link></BreadcrumbItem>
							<BreadcrumbItem active>Menu</BreadcrumbItem>
						</Breadcrumb>
						<div className='col-12'>
							<h3> Menu </h3>
							<hr />
						</div>
					</div>
					<div className='row'>
						{menu}
					</div>
					<br />
					<br />
				</div>
			);
		}
}

export default Menu;

