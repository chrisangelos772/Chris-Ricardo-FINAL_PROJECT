import React from "react";
import mainLogo from "../../img/main-logo.png";
import "../../styles/home.scss";
import "../../styles/buttons.scss";
import { Link } from "react-router-dom";
import "../../styles/reservation.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";

export const Reservation = () => (
	<div className="container">
		<h1 className="title1">RESERVATION</h1>
		<p className="text">
			Fill out the form below to place a reservation. We will send you a confirmation email. <br /> (Must already
			have an account in order to place a reservation)
		</p>
		<Form>
			<Form.Row>
				<Col>
					<Form.Control className="text-res" placeholder="First name" />
				</Col>
				<Col>
					<Form.Control className="text-res" placeholder="Last name" />
				</Col>
				<Col>
					<Form.Control className="text-res" placeholder="Number of Guests" />
				</Col>
			</Form.Row>
			<Form.Row>
				<Col>
					<Form.Control className="text-res phone" placeholder="Phone" />
				</Col>
				<Col>
					<Form.Control className="text-res mail" placeholder="E-mail" />
				</Col>
			</Form.Row>
			<div className="res-buttons row">
				<button>Submit</button>
				<Link to="/">
					<button>Go back</button>
				</Link>
			</div>
		</Form>
	</div>
);
