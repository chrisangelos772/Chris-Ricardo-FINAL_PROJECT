import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

import "../../styles/food.scss";

export const Food = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1 className="titles">Food Menu</h1>
			<CardGroup>
				<Row>
					{store.products.map((item, index) => (
						<Col xs={12} sm={6} key={index} className="mb-4">
							<Card className="h-100">
								<Link to={`/product/${index}`}>
									<Card.Img variant="top" src={item.img} />
								</Link>
								<Card.Body>
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
										</Col>
									</Row>
								</Card.Footer>
							</Card>
						</Col>
					))}
				</Row>
				<br />
				<br />
			</CardGroup>
			<Button variant="danger" as={Link} to="/">
				Go Back
			</Button>
		</div>
	);
};
