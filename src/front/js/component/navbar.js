import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartIcon } from "./Carticon";
import { LoginComponent } from "./loggedIn";

import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<nav className="navbar">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img
							className="logo"
							src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094833/the-red-cafe.png"
						/>
					</span>
				</Link>
				<LoginComponent />
				{/* IT SHOULD BE LINKED TO THE CART VIEW */}
				<Link to="/Cart">
					<CartIcon value={store.cart.length} />
				</Link>
			</nav>
		</div>
	);
};
