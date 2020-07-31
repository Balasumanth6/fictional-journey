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
import { addComment, fetchDishes } from '../redux/ActionCreators.js'
import { actions } from 'react-redux-form';

const mapStateToProps = function (state) {

	return (
		{
			dishes: state.dishes,
			comments: state.comments, 
			promotions: state.promotions,
			leaders: state.leaders
		}
	);
}

const mapDispatchToProps = (dispatch) => ({
		
	addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
	fetchDishes: () => dispatch(fetchDishes()),
	resetFeedbackForm: () => dispatch(actions.reset('feedback'))
})


class Main extends Component {

	componentDidMount() {
		this.props.fetchDishes();
	}

	render() {

		const HomePage = () => {
			return(
				<Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
					dishesLoading = {this.props.dishes.isLoading}
					dishesErrMess = {this.props.dishes.errmess}
					promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
					leader={this.props.leaders.filter((lead) => lead.featured)[0]}

				/>
			);
		}

		const DishWithId = ({match}) => {
			return(
				<Dishdetails dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
					isLoading = {this.props.dishes.isLoading}
					errmess = {this.props.dishes.errmess}
					comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
					addComment={this.props.addComment} />
			);
		}

		return (	
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={HomePage} />
					<Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
					<Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

