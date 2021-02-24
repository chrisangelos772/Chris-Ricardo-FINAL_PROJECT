import React from "react";
import mainLogo from "../../img/main-logo.png";
import "../../styles/home.scss";
import "../../styles/buttons.scss";
import { Link } from "react-router-dom";
import "../../styles/contactus.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";

export const ContactUs = () => (
	<div className="container menu">
		<h1 className="title1">CONTACT US</h1>
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
			</Form.Row>
			<Form.Row>
				<Col>
					<Form.Control className="text-res" placeholder="Phone" />
				</Col>
				<Col>
					<Form.Control className="text-res" placeholder="E-mail" />
				</Col>
			</Form.Row>
			<Form.Group controlId="exampleForm.ControlTextarea1">
				<Form.Control as="textarea" rows={3} placeholder="Your Message" className="text-res" />
			</Form.Group>

			<div className="res-buttons row">
				<button>Submit</button>
				<Link to="/">
					<button>Go back</button>
				</Link>
			</div>
		</Form>
	</div>
);
