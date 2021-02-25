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
	const handleAccount = async () => {
		// email = request.json.get("email", None)
		// password = request.json.get("password", None)
		// first_name = request.json.get("first_name", None)
		// last_name = request.json.get("last_name", None)
		// city = request.json.get("city", None)
		// state = request.json.get("state", None)
		// zip_code = request.json.get("zip_code", None)
		// phone = request.json.get("phone", None)
		// rewards_pts = request.json.get("rewards_pts", None)
		let data = {
			first_name: firstName,
			last_name: lastName,
			rewards_pts: rewards,
			id: id
		};

		try {
			let account = await actions.getAccount(data);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className="account container">
			<h1 className="title2">Account Information</h1>
			<div className="container table">
				<Table responsive="sm" striped>
					{store.account.map((item, index) => {
						return (
							<>
								<tr key={index}>
									<th>User ID</th>
									<td>{item.id}</td>
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
						);
					})}
				</Table>
			</div>
			<Link to="/">
				<button>Go back</button>
			</Link>
		</div>
	);
};
