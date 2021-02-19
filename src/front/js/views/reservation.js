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
	<div className="res">
		<h1 className="title1">RESERVATION</h1>
		<p className="text">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
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
				<Button variant="danger">Submit</Button>
				<Button variant="danger" as={Link} to="/">
					Go Back
				</Button>
				{/* <input className="mainlabel col-4" type="" id="r1" value="Submit" />
				<input className="mainlabel col-4" type="" id="r2" value="Go Back" /> */}
			</div>
		</Form>
	</div>
);
