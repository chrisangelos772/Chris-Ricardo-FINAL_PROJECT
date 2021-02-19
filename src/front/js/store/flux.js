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
						"Chicken, Beef or Vegan Quesadilla's. With your choice of pepperjack, monterey, cheddar or smoked gouda cheese, green peppers and red peppers, and black beans.            served with sour cream, salsa and guacamole, you cannot go wrong with these!"
				},
				{
					name: "Ultimate Nachos",
					price: 15.99,
					size: "plate",
					img: "https://www.nowfindglutenfree.com/wp-content/uploads/sites/2/2016/02/nachos.gif",
					description:
						"If you're a nacho fan, these are a MUST! WARNING!\nThis is a tower of nachos, no ONE man can eat. Best shared with a group of 3-4 people. Stacked with ground beef (chicken on request), black beans, purple onions, green peppers, red peppers, and yellow peppers, corn, smothered in melted Smoked Gouda and shredded cheddar cheese, black olives, jalapeno's, sour cream, Guac, and salsa. This truely is a MONSTER of an appetizer."
				},
				{
					name: "Bang Bang Shrimp",
					price: 12.95,
					size: "plate",
					img: "https://www.afamilyfeast.com/wp-content/uploads/2017/04/Bang-Bang-Shrimp3.jpg",
					description:
						"Sweet and spicy fried shrimp tossed in our homemade bang bang sauce! Served over a bed of lettuce. These baby's have a kick, be prepared."
				},
				{
					name: "Blackened Shrimp Avacado Cucumber bites",
					price: 12.95,
					size: "plate",
					img:
						"https://www.yummyhealthyeasy.com/wp-content/uploads/2018/06/Low-Carb-Avocado-Shrimp-Cucumber-Appetizer-5.jpg",
					description:
						"Lightly blackened shrimp placed on top of our homemade Guacamole on top of a freshly sliced cucumber. Combining the spice of the grilled shrimp with the clean flavor of the guacamole and cucumber, you get a sublime flavor that tantalizes your taste buds."
				},
				{
					name: "Tomato Bisque",
					price: 5.95,
					size: "cup",
					img: "https://yupitsvegan.com/wp-content/uploads/2019/12/vegan-tomato-soup-3.jpg",
					description:
						"Fresh, homemade tomato bisque soup topped with basil leaves and paired with a grilled cheese. This soup will leave you warm and satisfied."
				},
				{
					name: "Chicken Ceasar Salad",
					price: 11.95,
					size: "plate",
					img:
						"https://fccae8b066ab962232a8-1b1069f819384d721973c1b8d8e32756.ssl.cf1.rackcdn.com/GaryTardiff-41.jpg",
					description: "blah blah lorem foodum."
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
							"Shrimp sautéed in a garlic butter sauce, tossed with asparagus, tomatoes, and angel hair pasta.this dinner will have you feeling as if you're in the Cinque Terre, Italy. Best paired with a White Wine."
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
							"Deliciously refreshing, our Mango Mojito's are made with only the freshest of mangos, hand juiced and muddled, goes well on a hot summer day."
					},
					{
						name: "Smoked Old Fashioned",
						price: 12.95,
						size: "10 oz",
						img: "https://www.acouplecooks.com/wp-content/uploads/2020/06/Smoked-Old-Fashioned-008.jpg",
						description:
							"Made with Bourbon or rye whiskey, Sugar cube, Water, Angostura bitters, Orange peel and cocktail cherry garnish with a smokey effect for appeal as well as added flavor, our old fashioned is one for the books."
					},
					{
						name: "Blackberry Moscow Mule",
						price: 9.95,
						size: "12 oz",
						img:
							"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/moscow-mule-alcoholic-drink-moscow-mule-cocktail-royalty-free-image-922744264-1564688972.jpg?crop=0.668xw:1.00xh;0.0689xw,0&resize=640:*",
						description:
							"MAde with fresh Blackberries, Mint, Lime Juice, Vodka, all shaken together, poured into a copper cup over ice and added ginger beer at the end, this moscow mule will have you wanting more!"
					}
				],
				beer: [
					{
						name: "STELLA ARTOIS",
						price: 5.95,
						size: "16 oz",
						description: ""
					},
					{
						name: "BUDWEISER",
						price: 5.95,
						size: "16 oz",
						description: ""
					},
					{
						name: "CORONA",
						price: 5.95,
						size: "16 oz",
						description: ""
					},
					{
						name: "GUINNESS",
						price: 5.95,
						size: "16 oz",
						description: ""
					},
					{
						name: "PERONI NASTRO AZZURRO",
						price: 5.95,
						size: "16 oz",
						description: ""
					},
					{
						name: "HEINEKEN",
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
			addToCart: item => {
				const store = getStore();
				const cart = store.cart.push(item);
				setStore(store);
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
