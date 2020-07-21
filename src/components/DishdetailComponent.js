import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Dishdetails extends Component {

	renderDish(dish){
		return (
			<Card>
				<CardImg width="100%" object src={dish.image} alt={dish.name} />
				<CardBody>
					<CardTitle><h4> {dish.name} </h4></CardTitle>
					<CardText> {dish.description} </CardText>
				</CardBody>
			</Card>
		);
	}

	renderComments(comments) {
		if (comments != null) {
			const commentbox = comments.map((cmnt) => {			
				return (				
					<p key={cmnt.id}>
						<span> {cmnt.comment} </span>
						<br /> 
						<span> -- {cmnt.author} , &nbsp;			
								{new Intl.DateTimeFormat("en-US",{
									month: "short",
									day: "2-digit",
									year: 'numeric'
								}).format(new Date (cmnt.date))} 
						</span>
					</p> 
				);
			});
			return commentbox;
		}

		else {
			return (
				<div> </div>
			)
		}
	}

	render(){
		if (this.props.dish != null) {
			return(
				<div className='container'>
					<div className='row'>
						<Breadcrumb>
							<BreadcrumbItem><Link to='/home'> Home </Link></BreadcrumbItem>
							<BreadcrumbItem><Link to='/menu'> Menu </Link></BreadcrumbItem>
							<BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
						</Breadcrumb>
						<div className='col-12'>
							<h3> {this.props.dish.name} </h3>
							<hr />
						</div>
					</div>
					<div className='row'>
						<div className='col-12 col-md-5 mt-4'>{this.renderDish(this.props.dish)}</div>
						<div className='col-12 col-md-5 mt-4 m-1'>
							<h4> Comments </h4>
							{this.renderComments(this.props.comments)}
						</div>
					</div>
				</div>
			);
		}

		else {
			return(
				<div></div>
			);
		}		

	}
}

export default Dishdetails;