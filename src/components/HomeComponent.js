import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import {Loading} from './LoadingComponent.js';
import {baseUrl} from '../shared/baseUrl';

function RenderCard({item, isLoading, errmess}){

	if (isLoading) {

		return (
			<Loading />
		);
	}

	else if (errmess) {
		
		return (
			<h4> {errmess} </h4>
		);
	}

	else {

		return (
			<Card>
				<CardImg src={baseUrl + item.image} alt={item.name} />
				<CardBody>
					<h5><CardTitle> {item.name} </CardTitle></h5>
					{item.designation ? <h6><CardSubtitle>{item.designation}</CardSubtitle></h6>: null}
					<CardText> {item.description} </CardText> 
				</CardBody>
			</Card>
		);
	} 	
}

function Home (props) {
	return( 
		<div className='container'>
			<br />
			<div className='row align-items-start'>
				<div className='col-12 col-md m-1'>
					<RenderCard item={props.dish} isLoading={props.dishesLoading} errmess={props.dishesErrMess} />
				</div>
				<div className='col-12 col-md m-1'>
					<RenderCard item={props.promotion} isLoading={props.promosLoading} errmess={props.promosErrMess} />
				</div>
				<div className='col-12 col-md m-1'>
					<RenderCard item={props.leader} />
				</div>
			</div>
			<br />			
		</div>
	);
}

export default Home;