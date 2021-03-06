import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

import "../../styles/food.scss";
import "../../styles/specials.scss";

export const Specials = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container menu">
			<h1 className="titles">Specials Menu</h1>
			<CardGroup>
				<Row>
					{store.foods.specials.map((item, index) => (
						<Col xs={12} sm={6} key={index} className="mb-4">
							<Card className="">
								<Card.Img variant="top" src={item.img} />

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
											<button onClick={e => actions.addToCart(item)}>Add to cart</button>{" "}
										</Col>
									</Row>
								</Card.Footer>
							</Card>
						</Col>
					))}
				</Row>
			</CardGroup>
			<Link to="/">
				<button>Go back</button>
			</Link>
		</div>
	);
};
