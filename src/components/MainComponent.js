import React, {Component} from 'react';
import Home from './HomeComponent.js';
import Menu from './MenuComponent.js';
import Contact from './ContactComponent.js';
import Dishdetails from './DishdetailComponent.js';
import {DISHES} from '../shared/dishes.js';
import {COMMENTS} from '../shared/comments.js';
import {LEADERS} from '../shared/leaders.js';
import {PROMOTIONS} from '../shared/promotions.js';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

	constructor(props) {
		super(props);

		this.state = {
			dishes: DISHES,
			comments: COMMENTS,
			promotions: PROMOTIONS,
			leaders: LEADERS
		};
	}

	onDishSelect(dishId) {
		this.setState({selectedDish: dishId});
	}

	render() {

		const HomePage = () => {
			return(
				<Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
					promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
					leader={this.state.leaders.filter((lead) => lead.featured)[0]}

				/>
			);
		}

		const DishWithId = ({match}) => {
			return(
				<Dishdetails dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
					comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
			);
		}

		return (			
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={HomePage} />
					<Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
					<Route exact path='/contactus' component={Contact} />
					<Route path='/menu/:dishId' component={DishWithId} />
					<Redirect to='/home' />
				</Switch>
				{/*<Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />	*/}
				{/*<Dishdetails dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />*/}
				<Footer />
			</div>
		);
	}
}

export default Main;