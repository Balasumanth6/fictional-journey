import React, {Component} from 'react';
import Home from './HomeComponent.js';
import Menu from './MenuComponent.js';
import Dishdetails from './DishdetailComponent.js';
import {DISHES} from '../shared/dishes.js';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

	constructor(props) {
		super(props);

		this.state = {
			dishes: DISHES,
		};
	}

	onDishSelect(dishId) {
		this.setState({selectedDish: dishId});
	}

	render() {

		const HomePage = () => {
			return(
				<Home />
			);
		};

		return (			
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={HomePage} />
					<Route exact path ='/menu' component={() => <Menu dishes={this.state.dishes} />} />
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