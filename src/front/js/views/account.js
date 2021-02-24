import React, { useState, useEffect, useContext } from "react";
import mainLogo from "../../img/main-logo.png";
import "../../styles/home.scss";
import "../../styles/buttons.scss";
import "../../styles/account.scss";
import { Link } from "react-router-dom";
import "../../styles/reservation.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import Table from "react-bootstrap/Table";
import { Context } from "../store/appContext";
import "../../styles/animations.scss";

export const Account = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="account container">
			<h1 className="title2">Account Information</h1>
			<div className="container table">
				<Table responsive="sm" striped>
					{store.account.map((item, index) => (
						<>
							<tr key={index}>
								<th>User ID</th>
								<td>{item.user_id}</td>
								<th>Name</th>
								<td>{item.name}</td>
							</tr>
							<tr key={index}>
								<th>Reward Points</th>
								<td>{item.points}</td>
								<th>Number of Orders</th>
								<td>{item.orders}</td>
							</tr>
						</>
					))}
				</Table>
			</div>
			<Link to="/">
				<button>Go back</button>
			</Link>
		</div>
	);
};
