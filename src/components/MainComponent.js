import React, {Component} from 'react';
import Home from './HomeComponent.js';
import Menu from './MenuComponent.js';
import Contact from './ContactComponent.js';
import Dishdetails from './DishdetailComponent.js';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import About from './AboutComponent.js';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		dishes: state.dishes,
		comments: state.comments, 
		promotions: state.promotions,
		leaders: state.leaders
	};
}

class Main extends Component {

	render() {

		const HomePage = () => {
			return(
				<Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
					promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
					leader={this.props.leaders.filter((lead) => lead.featured)[0]}

				/>
			);
		}

		const DishWithId = ({match}) => {
			return(
				<Dishdetails dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
					comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
			);
		}

		return (	
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={HomePage} />
					<Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
					<Route exact path='/contactus' component={Contact} />
					<Route path='/menu/:dishId' component={DishWithId} />
					<Route path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
					<Redirect to='/home' />
				</Switch>
				{/*<Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />	*/}
				{/*<Dishdetails dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />*/}
				<Footer />
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps)(Main));

