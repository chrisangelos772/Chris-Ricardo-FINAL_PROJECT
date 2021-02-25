import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import "../../styles/modals.scss";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const LoginComponent = () => {
	const { store, actions } = useContext(Context);
	const { loggedIn } = store;

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zip, setZip] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [showb, setShowb] = useState(false);
	const handleCloseb = () => setShowb(false);
	const handleShowb = () => setShowb(true);

	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");

	const handleSignUp = async () => {
		// email = request.json.get("email", None)
		// password = request.json.get("password", None)
		// first_name = request.json.get("first_name", None)
		// last_name = request.json.get("last_name", None)
		// city = request.json.get("city", None)
		// state = request.json.get("state", None)
		// zip_code = request.json.get("zip_code", None)
		// phone = request.json.get("phone", None)
		// rewards_pts = request.json.get("rewards_pts", None)
		let data = {
			email: email,
			first_name: firstName,
			last_name: lastName,
			city: city,
			state: state,
			zip_code: zip,
			phone: phone,
			password: password
		};

		try {
			let signup = await actions.signUp(data);

			if (signup) {
				clearState();

				setShow(false); // hide the signup
				setShowb(true); // show the login
			}
		} catch (e) {
			console.error(e);
		}
	};

	const handleLogin = async () => {
		let loginData = {
			email: loginEmail,
			password: loginPassword
		};
		try {
			let login = await actions.signIn(loginData);

			if (login) {
				clearState();
				setShowb(false); // hide the login
			}
		} catch (e) {
			console.error(e);
		}
	};

	const clearState = () => {
		// reset state variables
		setFirstName("");
		setLoginEmail("");
		setLoginPassword("");
	};

	return (
		<>
			<div className="login ml-auto mr-3">
				{loggedIn ? (
					<Dropdown>
						<Dropdown.Toggle
							bsclass="custom-class"
							className="dropdown"
							variant="danger"
							id="dropdown-basic">
							<FontAwesomeIcon icon={faUserCircle} />
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item as={Link} to="/account">
								Account
							</Dropdown.Item>
							<Dropdown.Item href="#" onClick={() => setLoggedIn(!loggedIn)}>
								<Link className="dropdown-item" to="/">
									Logout
								</Link>
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				) : (
					<div className="links">
						<Link to="#" className="header" onClick={handleShow}>
							Sign Up
						</Link>
						<Link to="#" className="header" onClick={handleShowb}>
							Sign In
						</Link>
					</div>
				)}
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Sign Up</Modal.Title>
					</Modal.Header>
					<Form onSubmit={e => e.preventDefault()}>
						<Modal.Body>
							<Form.Group controlId="formBasicName">
								<Form.Label>First Name</Form.Label>
								<Form.Control
									type="name"
									value={firstName}
									onChange={e => setFirstName(e.target.value)}
								/>
							</Form.Group>
							<Form.Group controlId="formBasicLastName">
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									type="last-name"
									value={lastName}
									onChange={e => setLastName(e.target.value)}
								/>
							</Form.Group>
							<Form.Group controlId="formBasicPhone">
								<Form.Label>Phone Number</Form.Label>
								<Form.Control type="phone" />
							</Form.Group>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" />
							</Form.Group>
							<Form.Group controlId="formBasicCity">
								<Form.Label>City</Form.Label>
								<Form.Control type="city" />
							</Form.Group>
							<Form.Group controlId="formBasicState">
								<Form.Label>State</Form.Label>
								<Form.Control type="state" />
							</Form.Group>
							<Form.Group controlId="formBasicZip">
								<Form.Label>Zip Code</Form.Label>
								<Form.Control type="zip code" />
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" />
							</Form.Group>
							<Form.Group controlId="formBasicCheckbox">
								<Form.Check
									type="checkbox"
									label="I want to receive information and exclusive offers"
								/>
							</Form.Group>
						</Modal.Body>
						<Modal.Footer>
							<Button className="button-modal" onClick={handleClose}>
								Close
							</Button>
							<Button className="button-modal" onClick={handleSignUp}>
								Sign up!
							</Button>
						</Modal.Footer>
					</Form>
				</Modal>
				<Modal show={showb} onHide={handleCloseb}>
					<Modal.Header closeButton>
						<Modal.Title>Sign In</Modal.Title>
					</Modal.Header>
					<Form onSubmit={e => e.preventDefault()}>
						<Modal.Body>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" />
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" />
							</Form.Group>
						</Modal.Body>
						<Modal.Footer>
							<Button className="button-modal" onClick={handleCloseb}>
								Close
							</Button>
							<Link to="/account">
								<Button className="button-modal" onClick={handleCloseb}>
									Enter
								</Button>
							</Link>
						</Modal.Footer>
					</Form>
				</Modal>
			</div>
		</>
	);
};
