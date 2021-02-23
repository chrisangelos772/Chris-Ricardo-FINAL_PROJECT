import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";

export const LoginComponent = () => {
	const [loggedIn, setLoggedIn] = useState(true);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [showb, setShowb] = useState(false);
	const handleCloseb = () => setShowb(false);
	const handleShowb = () => setShowb(true);

	return (
		<>
			<div className="login ml-auto mr-3">
				{loggedIn ? (
					<Dropdown>
						<Dropdown.Toggle
							bsClass="custom-class"
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
								Logout
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
								<Form.Label>Name</Form.Label>
								<Form.Control type="name" placeholder="Name" />
							</Form.Group>
							<Form.Group controlId="formBasicLastName">
								<Form.Label>Last Name</Form.Label>
								<Form.Control type="last-name" placeholder="Last Name" />
							</Form.Group>
							<Form.Group controlId="formBasicPhone">
								<Form.Label>Phone Number</Form.Label>
								<Form.Control type="phone" placeholder="Phone Number" />
							</Form.Group>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" />
							</Form.Group>
							<Form.Group controlId="formBasicCheckbox">
								<Form.Check
									type="checkbox"
									label="I want to receive information and exclusive offers"
								/>
							</Form.Group>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
							<Button variant="primary" onClick={handleClose}>
								Save Changes
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
								<Form.Control type="email" placeholder="Enter email" />
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" />
							</Form.Group>
							<Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="Check me out" />
							</Form.Group>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleCloseb}>
								Close
							</Button>
							<Button variant="primary" onClick={handleCloseb}>
								Save Changes
							</Button>
						</Modal.Footer>
					</Form>
				</Modal>
			</div>
		</>
	);
};
