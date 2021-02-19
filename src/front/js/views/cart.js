import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export const Cart = () => {
	const { store, actions } = useContext(Context);
	const [cart, setCart] = useState([]);
	const [subtotal, setSubtotal] = useState(0);
	const [total, setTotal] = useState(0);

	useEffect(
		() => {
			uniqueCart();
		},
		[cart]
	);

	const uniqueCart = () => {
		let tempCart = [...new Set(store.cart)];

		// loop tempcart and start qty at 0
		for (let i = 0; i < tempCart.length; i++) {
			tempCart[i].qty = 0;
		}

		// loop store and add qty to tempCart
		store.cart.map(item => {
			let current = tempCart.indexOf(item);
			tempCart[current].qty++;
		});

		for (let i = 0; i < tempCart.length; i++) {
			tempCart[i].total = Math.trunc(Number(tempCart[i].qty * tempCart[i].price) * 100) / 100;
		}

		setCart(tempCart);

		calculateTotal();
	};
	const calculateTotal = () => {
		let runningTotal = 0;
		for (let i = 0; i < cart.length; i++) {
			runningTotal += cart[i].total;
		}
		setSubtotal(Math.trunc(Number(runningTotal) * 100) / 100);
		setTotal(Math.trunc(Number(runningTotal * 0.07 + runningTotal) * 100) / 100);
	};

	return (
		<div className="container">
			<Row>
				<Col>Name</Col>
				<Col>Qty</Col>
				<Col>Price Per</Col>
				<Col>Total</Col>
			</Row>
			<ListGroup>
				{cart.map((item, index) => (
					<ListGroup.Item key={index}>
						<Row>
							<Col>{item.name}</Col>
							<Col>{item.qty}</Col>
							<Col>${item.price}</Col>
							<Col>${item.total}</Col>
						</Row>
					</ListGroup.Item>
				))}
			</ListGroup>
			<br />
			<ListGroup>
				<ListGroup.Item>
					<Row>
						<Col>{}</Col>
						<Col>{}</Col>
						<Col>Sub total</Col>
						<Col>${subtotal}</Col>
					</Row>
				</ListGroup.Item>
				<ListGroup.Item>
					<Row>
						<Col>{}</Col>
						<Col>{}</Col>
						<Col>Tax</Col>
						<Col>7%</Col>
					</Row>
				</ListGroup.Item>
				<ListGroup.Item>
					<Row>
						<Col>{}</Col>
						<Col>{}</Col>
						<Col>Total Price</Col>
						<Col>${total}</Col>
					</Row>
				</ListGroup.Item>
			</ListGroup>
			<br />
			<br />
			<Button variant="danger" as={Link} to="/">
				Go Back
			</Button>
		</div>
	);
};
