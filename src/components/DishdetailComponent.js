import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

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
		)
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
						<div className='col-12 col-md-5 mt-4'>
							{this.renderDish(this.props.dish)}
						</div>
						<div className='col-12 col-md-5 mt-4 m-1'>
							<h4> Comments </h4>
							{this.renderComments(this.props.dish.comments)}
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