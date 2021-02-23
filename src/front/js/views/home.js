import React from "react";
import mainLogo from "../../img/main-logo.png";
import "../../styles/home.scss";
import "../../styles/buttons.scss";
import { Link } from "react-router-dom";
import { Footer } from "../component/footer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const Home = () => (
	<div className="text-center mt-5">
		<img className="main-logo" src={mainLogo} />
		{/* <div className="buttons"> */}
		<Row>
			<Col>
				<Link to="/food">
					<button className="but-home">Food Menu</button>
				</Link>
			</Col>
		</Row>
		<Row>
			<Col>
				<Link to="/drinks">
					<button className="but-home">Drinks Menu</button>
				</Link>
			</Col>
		</Row>
		<Row>
			<Col>
				<Link to="/specials">
					<button className="but-home">Specials Menu</button>
				</Link>
			</Col>
		</Row>
		<Row>
			<Col>
				<Link to="/reservation">
					<button className="but-home">Reservation</button>
				</Link>
			</Col>
		</Row>
		<Row>
			<Col>
				<Link to="/contactus">
					<button className="but-home">Contact Us</button>
				</Link>
			</Col>
		</Row>
	</div>
);
