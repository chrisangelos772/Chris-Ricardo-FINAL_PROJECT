import React from "react";
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

export const Account = () => (
	<div className="account">
		<h1 className="title2">Account Information</h1>
		<div className="container table">
			<Table responsive="sm" striped>
				<tr>
					<th>User Id</th>
					<td>12345</td>
					<th>Name</th>
					<td>hello hello</td>
				</tr>

				<tr>
					<th>Reward Points</th>
					<td>360 pts.</td>
					<th>Number of Orders</th>
					<td>12</td>
				</tr>
			</Table>
		</div>
	</div>
);
