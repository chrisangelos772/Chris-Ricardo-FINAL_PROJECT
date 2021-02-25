import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import "../../styles/modals.scss";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import regeneratorRuntime from "regenerator-runtime";

export const LoginComponent = () => {
	const { store, actions } = useContext(Context);
	const { loggedIn } = store;
	let history = useHistory();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
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
		let data = {
			email: email,
			first_name: firstName,
			last_name: lastName,
			address: address,
			city: city,
			state: state,
			zip_code: zip,
			phone: phone,
			password: password
		};

		let signup = await actions.signUp(data);

		if (typeof signup === "boolean") {
			clearState();

			setShow(false); // hide the signup
			setShowb(true); // show the login
		} else {
			console.error(signup);
		}
	};

	const handleLogin = async () => {
		let loginData = {
			email: loginEmail,
			password: loginPassword
		};

		let login = await actions.signIn(loginData);
		console.log(login, typeof login);
		if (typeof login === "boolean") {
			clearState();
			setShowb(false); // hide the login
			history.push("/account");
		} else {
			console.error(login);
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
									type="text"
									value={firstName}
									onChange={e => setFirstName(e.target.value)}
								/>
							</Form.Group>
							<Form.Group controlId="formBasicLastName">
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									type="text"
									value={lastName}
									onChange={e => setLastName(e.target.value)}
								/>
							</Form.Group>
							<Form.Group controlId="formBasicPhone">
								<Form.Label>Phone Number</Form.Label>
								<Form.Control type="phone" value={phone} onChange={e => setPhone(e.target.value)} />
							</Form.Group>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
							</Form.Group>
							<Form.Group controlId="formBasicAddress">
								<Form.Label>Address</Form.Label>
								<Form.Control type="text" value={address} onChange={e => setAddress(e.target.value)} />
							</Form.Group>
							<Form.Group controlId="formBasicCity">
								<Form.Label>City</Form.Label>
								<Form.Control type="text" value={city} onChange={e => setCity(e.target.value)} />
							</Form.Group>
							<Form.Group controlId="formBasicState">
								<Form.Label>State</Form.Label>
								<Form.Control type="text" value={state} onChange={e => setState(e.target.value)} />
							</Form.Group>
							<Form.Group controlId="formBasicZip">
								<Form.Label>Zip Code</Form.Label>
								<Form.Control type="text" value={zip} onChange={e => setZip(e.target.value)} />
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									value={password}
									onChange={e => setPassword(e.target.value)}
								/>
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
								Cancel
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
								<Form.Control
									type="email"
									value={loginEmail}
									onChange={e => setLoginEmail(e.target.value)}
								/>
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									value={loginPassword}
									onChange={e => setLoginPassword(e.target.value)}
								/>
							</Form.Group>
						</Modal.Body>
						<Modal.Footer>
							<Button className="button-modal" onClick={handleCloseb}>
								Cancel
							</Button>

							<Button className="button-modal" onClick={handleLogin}>
								Login
							</Button>
						</Modal.Footer>
					</Form>
				</Modal>
			</div>
		</>
	);
};
