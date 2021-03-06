import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, 
	 	Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import image from '../logo.png';

class Header extends Component {

	constructor(props){
		super(props);

		this.state = {
			isNavOpen: false,
			isModalOpen: false
		};

		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}

	handleLogin(event) {
		this.toggleModal();
		alert('username: ' + this.username.value + ' Password: ' + this.password.value + ' Remember: ' + this.remember.checked);
		event.preventDefault();	
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

	render() {
		return (
			<React.Fragment>
				<Navbar dark expand='md'>	
					<div className="container">
						<NavbarToggler onClick={this.toggleNav} />
						<NavbarBrand className='mr-auto ml-3 ml-md-0'>
							<Link to='/home'> <img src={image} height='30' width='41' alt='Ristorante ConFusion'/></Link>
						</NavbarBrand>
						<Collapse isOpen={this.state.isNavOpen} navbar>

							<Nav navbar>
								<NavItem>
									<NavLink className='nav-link' to='/home'>
										<span className='fa fa-home fa-lg'></span> Home
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className='nav-link' to='/aboutus'>
										<span className='fa fa-info fa-lg'></span> AboutUs
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className='nav-link' to='/menu'>
										<span className='fa fa-list fa-lg'></span> Menu
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className='nav-link' to='/contactus'>
										<span className='fa fa-address-ca
										rd fa'></span> Contact Us
									</NavLink>
								</NavItem>
							</Nav>

							<Nav className='ml-auto' navbar>
								<NavItem>
									<Button outline onClick={this.toggleModal}>
										<span className='fa fa-sign-in'></span> Login
									</Button>
								</NavItem>
							</Nav>
							
						</Collapse>
					</div>
				</Navbar>

				<Jumbotron>
					<div className='container'>
						<div className='row row-header'>
							<div className='col-12 col-sm-6'>
								<h1> Ristorante ConFusion </h1>
								<p> We take inspiration from the worlds best cusines, and create unique food experiences. </p>
							</div>
						</div>
					</div>
				</Jumbotron>

				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}> Login </ModalHeader>
					<ModalBody>
						<Form onSubmit={this.handleLogin}> 
							<FormGroup>
								<Label hmtlFor='username'> Username </Label>
								<Input type='text' id='username' name='username' 
									innerRef={(input) => this.username = input}/>
							</FormGroup>
							<FormGroup>
								<Label hmtlFor='password'> Password </Label>
								<Input type='password' id='password' name='password' 
									innerRef={(input) => this.password = input} />
							</FormGroup>
							<FormGroup check>
								<Label check>
									<Input type='checkbox' name='remember' 
										innerRef={(input) => this.remember = input} />
									Remember Me
								</Label>
							</FormGroup>
							<Button type='submit' value='submit' color='primary'> Login </Button>
						</Form>
					</ModalBody>
				</Modal>
			</React.Fragment>
		);
	}
}

export default Header;