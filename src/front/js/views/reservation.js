import React from "react";
import mainLogo from "../../img/main-logo.png";
import "../../styles/home.scss";
import "../../styles/buttons.scss";
import { Link } from "react-router-dom";
import "../../styles/reservation.scss";

export const Reservation = () => (
	<div className="container res">
		<h1 className="title1">RESERVATION</h1>
		<p className="text">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
		</p>

		<form action="/action_page.php" className="reservation-form">
			<div className="res-form">
				<label className="res-label" htmlFor="fname">
					First name
				</label>
				<input className="res-input" type="text" id="fname" name="fname" />
				<label className="res-label" htmlFor="lname">
					Last name
				</label>
				<input className="res-input" type="text" id="lname" name="lname" />
				<label className="res-label" htmlFor="text">
					Number of Guests
				</label>
				<input className="res-input" type="number" min="0" step="1" />
				<label className="res-label" htmlFor="tel">
					Phone Number
				</label>
				<input className="res-input" type="tel" id="tel" name="tel" />
				<label className="res-label" htmlFor="email">
					Email
				</label>
				<input className="res-input" type="email" id="email" name="email" />
			</div>
			<div className="res-buttons row">
				<input className="mainlabel col-4" type="submit" id="r1" value="Submit" />
				<Link to="/" input className="mainlabel col-4" type="link" id="r2" value="Go Back">
					Go Back
				</Link>
			</div>
		</form>
	</div>
);
