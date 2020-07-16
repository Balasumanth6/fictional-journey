import React, { Component } from 'react';
import Dishdetails from './DishdetailComponent.js';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {

	constructor(props) {
		super(props);

		this.state = {
			selectedDish: null
		}
	}

	onDishSelect(dish) {
		this.setState({selectedDish: dish});
	}

	render() {

		const menu = this.props.dishes.map((dish) => {
			return (
				<div key={dish.id} className="col-12 col-md-5 mt-4">
					<Card onClick={() => this.onDishSelect(dish)}>
						<CardImg width="100%" object src={dish.image} alt={dish.name} />
						<CardImgOverlay>
							<CardTitle><h5> {dish.name} </h5></CardTitle>
							{/*<p> {dish.description} </p>*/}
 						</CardImgOverlay>
					</Card>        
				</div> 
			);
		});

		return (
			<div className='container'>
				<div className='row'>
					{menu}
				</div>
				<Dishdetails dish={this.state.selectedDish} />
			</div> 
		);
	}
}

export default Menu;

