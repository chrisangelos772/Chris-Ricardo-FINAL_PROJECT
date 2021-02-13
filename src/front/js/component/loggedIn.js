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

	return (
		<>
			<div className="login ml-auto mr-3">
				{loggedIn ? (
					<Dropdown>
						<Dropdown.Toggle variant="danger" id="dropdown-basic">
							<FontAwesomeIcon icon={faUserCircle} />
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item as={Link} to="/account">
								Account
							</Dropdown.Item>
							<Dropdown.Item href="#" onClick={() => setLoggedIn(!loggedIn)}>
								logout
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				) : (
					<Link to="#" onClick={handleShow}>
						login
					</Link>
				)}
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Create an account</Modal.Title>
					</Modal.Header>
					<Form onSubmit={e => e.preventDefault()}>
						<Modal.Body>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
								<Form.Text className="text-muted">
									We&apos;ll never share your email with anyone else.
								</Form.Text>
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
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
							<Button variant="primary" onClick={handleClose}>
								Save Changes
							</Button>
						</Modal.Footer>
					</Form>
				</Modal>
			</div>
		</>
	);
};
