import React, { useState, useEffect, useContext } from "react";
import mainLogo from "../../img/main-logo.png";
import "../../styles/home.scss";
import "../../styles/buttons.scss";
import "../../styles/account.scss";
import { Link, useParams } from "react-router-dom";
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
	const account = store.account;

	return (
		<div className="account container">
			<h1 className="title2">Account Information</h1>
			<div className="container table">
				<Table responsive="sm" striped>
					<tbody>
						<tr>
							<th>User ID</th>
							<td>{account.id}</td>
							<th>Name</th>
							<td>
								{account.first_name} {account.last_name}
							</td>
						</tr>
						<tr>
							<th>Reward Points</th>
							<td>{account.rewards_pts}</td>
							<th>Number of Orders</th>
							<td>{account.orders.length}</td>
						</tr>
					</tbody>
				</Table>
			</div>
			<Link to="/">
				<button>Go back</button>
			</Link>
		</div>
	);
};
