import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

export const Drinks = () => {
	const { store, actions } = useContext(Context);

	const createListItems = (item, index) => (
		<ListGroup.Item>
			<Row>
				<Col xs={12} sm={10} key={index} className="mb-4">
					<Row>
						<Col>{item.name}</Col>
					</Row>
					<Row>
						<Col>{item.description}</Col>
					</Row>
				</Col>
				<Col xs={12} sm={2} key={index} className="mb-4">
					<Row className="mb-4">
						<Col>
							<medium className="text-muted">${item.price}</medium>
						</Col>
					</Row>
					<Row>
						<Col>
							<button className="btn btn-danger" onClick={e => actions.addToCart(item)}>
								Add to cart
							</button>{" "}
						</Col>
					</Row>
				</Col>
			</Row>
		</ListGroup.Item>
	);

	return (
		<div className="container">
			<h2>Specialty Drinks Menu</h2>
			<CardGroup>
				<Row>
					{store.drinks.specialty.map((item, index) => (
						<Col xs={12} sm={6} md={4} key={index} className="mb-4">
							<Card className="h-100">
								<Link to={`/product/${index}`}>
									<Card.Img variant="top" src={item.img} />
								</Link>
								<Card.Body className="h-100">
									<Card.Title>{item.name}</Card.Title>
									<Card.Text className="description">{item.description}</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Row>
										<Col>
											<medium className="text-muted">${item.price}</medium>
										</Col>
										<Col>
											<button className="btn btn-danger" onClick={e => actions.addToCart(item)}>
												Add to cart
											</button>{" "}
											{/* <Link to="#">
												<FontAwesomeIcon
													icon={faCartPlus}
													onClick={e => actions.addToCart(item)}
												/>
											</Link> */}
										</Col>
									</Row>
								</Card.Footer>
							</Card>
						</Col>
					))}
				</Row>
			</CardGroup>
			<br />
			<br />
			<br />
			<h2>Beer Menu</h2>
			<ListGroup>{store.drinks.beer.map((item, index) => createListItems(item, index))}</ListGroup>
			<br />
			<br />
			<br />
			<h2>Wine Menu</h2>
			<ListGroup>{store.drinks.wine.map((item, index) => createListItems(item, index))}</ListGroup>
			<Button variant="danger" as={Link} to="/">
				Go Back
			</Button>
		</div>
	);
};
