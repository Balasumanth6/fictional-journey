import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Nav, NavItem, Button,
		 Modal, ModalHeader, ModalBody, Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent.js';
import {baseUrl} from '../shared/baseUrl'; 

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);

function RenderDish({dish}){

	return (
		<Card>
			<CardImg width="100%" object src={baseUrl + dish.image} alt={dish.name} />
			<CardBody>
				<CardTitle><h4> {dish.name} </h4></CardTitle>
				<CardText> {dish.description} </CardText>
			</CardBody>
		</Card>
	);
}

function RenderComments({comments, postComment, dishId}) {

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

		return(
			<React.Fragment>
				<div> {commentbox} </div>
				<CommentForm dishId={dishId} postComment={postComment} />
			</React.Fragment>
		);
	}

	else {
		return (
			<div> </div>
		)
	}
}

class CommentForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false
		};

		this.toggleModal = this.toggleModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);	
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}

	handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
	}

	render () {

		return (
			<React.Fragment>

			<Nav className='ml-auto' navbar>
				<NavItem>
					<Button outline onClick={this.toggleModal}>
						<span className='fa fa-pencil fa-lg'></span> Submit Comment
					</Button>
				</NavItem>
			</Nav>

			<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
				<ModalHeader toggle={this.toggleModal}> Add Comment </ModalHeader>
					<ModalBody>

						<LocalForm onSubmit={(values) => this.handleSubmit(values)}>

							<Row className='form-group'>
								<Label htmlFor='rating' xs={12}> Rating </Label>
	                            <Col xs={12}>
	                                <Control.select model='.rating' name='rating' 
	                                         className='form-control'
	                                         validators={{
	                                         	required
	                                         }} >
	                                    <option> 	 </option>
	                                    <option> 1 </option>
	                                    <option> 2 </option>
	                                    <option> 3 </option>
	                                    <option> 4 </option>
	                                    <option> 5 </option>
	                                </Control.select>
	                                <Errors className='text-danger'
	                                	model='.rating'
	                                	show='touched'
	                                	messages = {{
	                                		required: 'Required '
	                                	}} />
	                            </Col>
	                        </Row>

							 <Row className='form-group'>
	                            <Label htmlFor='author' xs={12}> Your Name </Label>
	                            <Col xs={12}>
	                                <Control.text model='.author' id='author' 
	                                    className='form-control'
	                                    name='author' 
	                                    placeholder='Type Here'
	                                    validators={{
	                                        required, 
	                                        minLength: minLength(3), 
	                                        maxLength: maxLength(15)
	                                    }} /> 
	                                <Errors className='text-danger' 
	                                    model='.author' 
	                                    show='touched' 
	                                    messages={{
	                                        required: 'Required ', 
	                                        minLength: 'Must be greater than 2 charaters',
	                                        maxLength: 'Must be 15 charaters or less'
	                                    }} />
	                            </Col>  
	                        </Row>	

	                        <Row className='form-group'>
	                        	<Label htmlFor='comment' xs={12}> Comment </Label>
	                        	<Col xs={12}>
	                        		<Control.textarea model='.comment' id='comment'
	                        			className='form-control'
	                        			name='comment' rows='6'/>
	                        	</Col>
	                        </Row>

	                        <Row className='form-group'>
	                            <Col>
	                                <Button type='submit' color='primary'> Submit </Button>
	                            </Col>
	                        </Row>

						</LocalForm>
					</ModalBody>
				</Modal>
			</React.Fragment>
		);
	}
}

function Dishdetails (props) {

	if(props.isLoading) {

		return (
			<div className='container'>
				<div className='row'>
					<Loading />
				</div>
			</div>
		);
	}

	else if (props.errmess) {

		return (
			<div className='container'>
				<div className='row'>
					<h4> {props.errmess} </h4>
				</div>
			</div>
		);
	}

	else if (props.dish != null) {

		return (
			<div className='container'>
				<div className='row'>
					<Breadcrumb>
						<BreadcrumbItem><Link to='/home'> Home </Link></BreadcrumbItem>
						<BreadcrumbItem><Link to='/menu'> Menu </Link></BreadcrumbItem>
						<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
					</Breadcrumb>
					<div className='col-12'>
						<h3> {props.dish.name} </h3>
						<hr />
					</div>
				</div>
				<div className='row'>
					<div className='col-12 col-md-5 mt-4'>
						<RenderDish dish={props.dish} />
					</div>
					<div className='col-12 col-md-5 mt-4 m-1'>
						<h4> Comments </h4>
						<RenderComments comments={props.comments}
							postComment={props.postComment}
							dishId={props.dish.id} />
					</div>
				</div>
				<br />
				<br />
			</div>
		);
	}

	else {
		return(
			<div></div>
		);
	}		

	
}

export default Dishdetails;