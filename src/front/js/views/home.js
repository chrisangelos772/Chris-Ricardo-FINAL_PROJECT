import React from "react";
import mainLogo from "../../img/main-logo.png";
import "../../styles/home.scss";
import "../../styles/buttons.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<img className="main-logo" src={mainLogo} />
		<div className="buttons">
			<div className="buttons1">
				<Link to="/appetizer">
					<input className="mainbutton" type="checkbox" id="cb1" />
					<label className="mainlabel" htmlFor="cb1">
						FOOD MENU
					</label>
				</Link>
				<input className="mainbutton" type="checkbox" id="cb2" />
				<label className="mainlabel" htmlFor="cb2">
					DRINKS MENU
				</label>
				<input className="mainbutton" type="checkbox" id="cb3" />
				<label className="mainlabel" htmlFor="cb3">
					SPECIALS MENU
				</label>
			</div>
			<Link to="/reservation">
				<input className="mainbutton" type="checkbox" id="cb4" />
				<label className="mainlabel" htmlFor="cb4">
					RESERVATION
				</label>
			</Link>
			<Link to="/contactus">
				<input className="mainbutton" type="checkbox" id="cb5" />
				<label className="mainlabel" htmlFor="cb5">
					CONTACT US
				</label>
			</Link>
		</div>
	</div>
);
