import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Food } from "./views/food";
import { Drinks } from "./views/drinks";
import { ProductDetails } from "./views/ProductDetails";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Reservation } from "./views/reservation";
import { ContactUs } from "./views/contactus";
import { Cart } from "./views/cart";
import { Specials } from "./views/specials";
import { Account } from "./views/account";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/food">
							<Food />
						</Route>
						<Route exact path="/drinks">
							<Drinks />
						</Route>
						<Route exact path="/product/:productID">
							<ProductDetails />
						</Route>
						<Route exact path="/specials">
							<Specials />
						</Route>
						<Route exact path="/reservation">
							<Reservation />
						</Route>
						<Route exact path="/contactus">
							<ContactUs />
						</Route>
						<Route exact path="/cart">
							<Cart />
						</Route>
						<Route exact path="/account">
							<Account />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
