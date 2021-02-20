import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

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
		// create a new array in tempCart that inherits its value from store.cart (... = spread operator)
		let tempCart = [...store.cart];

		for (let i = 0; i < tempCart.length; i++) {
			tempCart[i].total = Math.trunc(Number(tempCart[i].qty * tempCart[i].price) * 100) / 100;
		}

		setCart(tempCart);

		calculateTotal();
	};

	const calculateTotal = () => {
		let runningTotal = 0;
		// loop the cart and add totals of each item to the running total
		for (let i = 0; i < cart.length; i++) {
			runningTotal += cart[i].total;
		}
		// take the running total and set as the subtotal
		setSubtotal(Math.trunc(Number(runningTotal) * 100) / 100);
		// set the result of the subtotal multiplied by the tax and added to subtotal as the total
		setTotal(Math.trunc(Number(runningTotal * 0.07 + runningTotal) * 100) / 100);
	};

	const handleDelete = index => {
		let tempCart = [...cart];
		tempCart.splice(index, 1);
		setCart(tempCart);
		actions.updateCart(tempCart);
	};

	const handleQtyChange = (newQty, index) => {
		let tempCart = [...cart];
		if (typeof tempCart[index] !== "undefined" && typeof tempCart[index].qty !== "undefined") {
			tempCart[index].qty = newQty;
			setCart(tempCart);
			actions.updateCart(tempCart);
		}
	};

	const createOrder = (data, actions) => {
		return actions.order.create({
			purchase_units: [
				{
					amount: {
						value: total
					}
				}
			]
		});
	};

	const onApprove = (data, actions) => {
		return actions.order.capture();
	};

	return (
		<div className="container">
			<Row>
				<Col>Name</Col>
				<Col>Qty</Col>
				<Col>Price Per</Col>
				<Col>Total</Col>
				<Col>Action</Col>
			</Row>
			<ListGroup>
				{cart.map((item, index) => (
					<ListGroup.Item key={index}>
						<Row>
							<Col>{item.name}</Col>
							<Col>
								<input
									type="number"
									name="quantity"
									min="1"
									step="1"
									value={cart[index].qty}
									onChange={e => handleQtyChange(e.target.value, index)}
								/>
							</Col>
							<Col>${item.price}</Col>
							<Col>${item.total}</Col>
							<Col>
								<Link to={`#`}>
									<i className="fas fa-trash-alt" onClick={e => handleDelete(index)} />
								</Link>
							</Col>
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
				<ListGroup.Item>
					<Row>
						<Col>{}</Col>
						<Col>{}</Col>
						<Col />
						<Col>
							<PayPalButton
								createOrder={(data, actions) => createOrder(data, actions)}
								onApprove={(data, actions) => onApprove(data, actions)}
							/>
						</Col>
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
