import { Specials } from "../views/specials";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			products: [
				{
					name: "Quesadillas",
					price: 12.95,
					size: "Plate",
					img: "https://images.pitboss-grills.com/catalog/recipes/1200px/IMG_0488.jpg",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
				},
				{
					name: "Ultimate Nachos",
					price: 15.99,
					size: "plate",
					img: "https://www.nowfindglutenfree.com/wp-content/uploads/sites/2/2016/02/nachos.gif",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
				},
				{
					name: "Bang Bang Shrimp",
					price: 12.95,
					size: "plate",
					img: "https://www.afamilyfeast.com/wp-content/uploads/2017/04/Bang-Bang-Shrimp3.jpg",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
				},
				{
					name: "Shrimp Avocado Bites",
					price: 12.95,
					size: "plate",
					img:
						"https://www.yummyhealthyeasy.com/wp-content/uploads/2018/06/Low-Carb-Avocado-Shrimp-Cucumber-Appetizer-5.jpg",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
				},
				{
					name: "Tomato Bisque",
					price: 5.95,
					size: "cup",
					img: "https://yupitsvegan.com/wp-content/uploads/2019/12/vegan-tomato-soup-3.jpg",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
				},
				{
					name: "Chicken Ceasar Salad",
					price: 11.95,
					size: "plate",
					img:
						"https://fccae8b066ab962232a8-1b1069f819384d721973c1b8d8e32756.ssl.cf1.rackcdn.com/GaryTardiff-41.jpg",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
				}
			],
			foods: {
				specials: [
					{
						name: "Shrimp Scampi",
						price: 17.95,
						size: "Plate",
						img:
							"https://cdn-prd.healthymealplans.com/recipe/e19c5315c0943362df71a3c84b466f59-Shrimp-Scampi-Pasta-Alt_16x9_1200_Healthy-Meal-Plans.jpg",
						description:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
					},

					{
						name: "Shrimp Scampi",
						price: 17.95,
						size: "Plate",
						img:
							"https://cdn-prd.healthymealplans.com/recipe/e19c5315c0943362df71a3c84b466f59-Shrimp-Scampi-Pasta-Alt_16x9_1200_Healthy-Meal-Plans.jpg",
						description:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
					},

					{
						name: "Shrimp Scampi",
						price: 17.95,
						size: "Plate",
						img:
							"https://cdn-prd.healthymealplans.com/recipe/e19c5315c0943362df71a3c84b466f59-Shrimp-Scampi-Pasta-Alt_16x9_1200_Healthy-Meal-Plans.jpg",
						description:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
					},

					{
						name: "Shrimp Scampi",
						price: 17.95,
						size: "Plate",
						img:
							"https://cdn-prd.healthymealplans.com/recipe/e19c5315c0943362df71a3c84b466f59-Shrimp-Scampi-Pasta-Alt_16x9_1200_Healthy-Meal-Plans.jpg",
						description:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
					}
				]
			},
			drinks: {
				specialty: [
					{
						name: "Mango Mojito",
						price: 8.95,
						size: "12 oz",
						img: "https://www.veganricha.com/wp-content/uploads/2016/06/mango-mojito-5081.jpg",
						description:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
					},
					{
						name: "Smoked Old Fashioned",
						price: 12.95,
						size: "10 oz",
						img: "https://www.acouplecooks.com/wp-content/uploads/2020/06/Smoked-Old-Fashioned-008.jpg",
						description:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
					},
					{
						name: "Blackberry Moscow Mule",
						price: 9.95,
						size: "12 oz",
						img:
							"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/moscow-mule-alcoholic-drink-moscow-mule-cocktail-royalty-free-image-922744264-1564688972.jpg?crop=0.668xw:1.00xh;0.0689xw,0&resize=640:*",
						description:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
					}
				],
				beer: [
					{
						name: "Stella Artois",
						price: 5.95,
						size: "16 oz",
						description: ""
					},
					{
						name: "Budweiser",
						price: 5.95,
						size: "16 oz",
						description: ""
					},
					{
						name: "Corona",
						price: 5.95,
						size: "16 oz",
						description: ""
					},
					{
						name: "Guinness",
						price: 5.95,
						size: "16 oz",
						description: ""
					},
					{
						name: "Peroni Nastro Azzurro",
						price: 5.95,
						size: "16 oz",
						description: ""
					},
					{
						name: "Heineken",
						price: 5.95,
						size: "16 oz",
						description: ""
					}
				],
				wine: [
					{
						name: "Sauvignon Blanc. White",
						price: 7.95,
						size: "8 oz Glass",
						img: "https://cdnimg.webstaurantstore.com/images/products/large/196274/730327.jpg",
						description: ""
					},
					{
						name: "Chardonnay. White",
						price: 7.95,
						size: "8 oz Glass",
						img: "https://cdnimg.webstaurantstore.com/images/products/large/196274/730327.jpg",
						description: ""
					},
					{
						name: "Merlot. Red",
						price: 8.95,
						size: "8 oz Glass",
						img: "https://cdnimg.webstaurantstore.com/images/products/large/196274/730327.jpg",
						description: ""
					},
					{
						name: "Pinot Noir. Red",
						price: 9.95,
						size: "8 oz Glass",
						img: "https://cdnimg.webstaurantstore.com/images/products/large/196274/730327.jpg",
						description: ""
					}
				]
			},
			//     account:[
			//         {
			//             user_id:"12345",
			//             name:"hello hello",
			//             points:"360 pts.",
			//             number_orders:"12"

			//         },
			//     ]

			// }
			cart: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getCartQty: () => {
				const store = getStore();
				let total = 0;

				for (let i = 0; i < store.cart.length; i++) {
					total += Number(store.cart[i].qty);
				}

				return total;
			},
			updateCart: newCart => {
				const store = getStore();
				setStore({
					...store,
					cart: newCart
				});
			},
			addToCart: item => {
				const store = getStore();
				// when we create this variable, we inherit the value from the store.cart,
				// but we use Set() to make it unique (no duplicate values)
				let cart = [...new Set(store.cart)];
				let index = cart.indexOf(item);

				if (index === -1) {
					item.qty = 1;
					cart.push(item);
				} else {
					cart[index].qty++;
				}

				setStore({
					...store,
					cart: cart
				});
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
