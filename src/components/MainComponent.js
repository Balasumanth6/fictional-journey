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
import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators.js'
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
		
	postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
	fetchDishes: () => dispatch(fetchDishes()),
	fetchComments: () => dispatch(fetchComments()),
	fetchPromos: () => dispatch(fetchPromos()),
	resetFeedbackForm: () => dispatch(actions.reset('feedback'))
})


class Main extends Component {

	componentDidMount() {
		this.props.fetchDishes();
		this.props.fetchComments();
		this.props.fetchPromos();
	}

	render() {

		const HomePage = () => {
			return(
				<Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
					dishesLoading = {this.props.dishes.isLoading}
					dishesErrMess = {this.props.dishes.errmess}
					promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
					promosLoading = {this.props.promotions.isLoading}
					promosErrMess = {this.props.promotions.errmess}
					leader={this.props.leaders.filter((lead) => lead.featured)[0]}

				/>
			);
		}

		const DishWithId = ({match}) => {
			return(
				<Dishdetails dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
					isLoading = {this.props.dishes.isLoading}
					errmess = {this.props.dishes.errmess}
					comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
					commentsErrMess = {this.props.comments.errmess}
					postComment={this.props.postComment} />
			);
		}

		return (	
			<div>
				<Header />
				<TransitionGroup>
				<CSSTransition key={this.props.location.key} classNames='page' timeout={300}>
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
				</CSSTransition>
				</TransitionGroup>
				<Footer />
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

