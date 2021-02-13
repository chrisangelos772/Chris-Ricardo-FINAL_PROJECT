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
					img: "https://www.savoryspiceshop.com/images/blog/extremenachos/ultimate-nachos-1.jpg",
					description:
						"If you're a nacho fan, these are a MUST! WARNING!\nThis is a tower of nachos, no ONE man can eat. Best shared with a group of 3-4 people. Stacked with ground beef (chicken on request), black beans, purple onions, green peppers, red peppers, and yellow peppers, corn, smothered in melted Smoked Gouda and shredded cheddar cheese, black olives, jalapeno's, sour cream, Guac, and salsa. This truely is a MONSTER of an appetizer."
				},
				{
					name: "Bang Bang Shrimp",
					price: 12.95,
					size: "plate",
					img:
						"https://lh3.googleusercontent.com/proxy/YnK5WQQc6faBAl8F2NEj5S4fE7uq_G9uM6W_SX1tU3GunM6F10_fhto9Su_ai8p3ABgAZQTGC2WyRdphCKVR9rsypcC8pQAHMCEGpfw7NYBTSAaKfzRGfJSwaHzjO81NUvZI",
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
					price: 1.95,
					size: "cup",
					img: "#",
					description: "blah blah lorem foodum."
				},
				{
					name: "Tomato Bisque",
					price: 1.95,
					size: "cup",
					img: "#",
					description: "blah blah lorem foodum."
				}
			],
			drinks: {
				specialty: [
					{
						name: "Mango Mojito",
						price: 8.95,
						size: "12 oz",
						img:
							"https://i2.wp.com/www.giftofhospitality.com/wp-content/uploads/2019/07/mango-mojito-8.jpg?resize=683%2C1024&ssl=1",
						description:
							"Deliciously refreshing, our Mango Mojito's are made with only the freshest of mangos, hand juiced and muddled, goes well on a hot summer day."
					},
					{
						name: "Beer",
						price: 5.95,
						size: "16 oz",
						img:
							"https://images.crateandbarrel.com/is/image/Crate/DirectionPilsner17ozSHS16/$web_pdp_main_carousel_med$/190411135002/direction-pilsner-beer-glass.jpg",
						description:
							"We have a variety of beers on tap. Coors, Michelob Ultra, Miller High Life, Shock Top, and more. Ask your bartenter for a full list "
					},
					{
						name: "Beer",
						price: 5.95,
						size: "16 oz",
						img:
							"https://images.crateandbarrel.com/is/image/Crate/DirectionPilsner17ozSHS16/$web_pdp_main_carousel_med$/190411135002/direction-pilsner-beer-glass.jpg",
						description:
							"We have a variety of beers on tap. Coors, Michelob Ultra, Miller High Life, Shock Top, and more. Ask your bartenter for a full list "
					}
				],
				beer: [
					{
						name: "Heinikin",
						price: 5.95,
						size: "16 oz",
						description: ""
					},
					{
						name: "Heinikin",
						price: 5.95,
						size: "16 oz",
						description: ""
					},
					{
						name: "Heinikin",
						price: 5.95,
						size: "16 oz",
						description: ""
					},
					{
						name: "Heinikin",
						price: 5.95,
						size: "16 oz",
						description: ""
					},
					{
						name: "Heinikin",
						price: 5.95,
						size: "16 oz",
						description: ""
					},
					{
						name: "Heinikin",
						price: 5.95,
						size: "16 oz",
						description: ""
					},
					{
						name: "Heinikin",
						price: 5.95,
						size: "16 oz",
						description: ""
					}
				],
				wine: [
					{
						name: "Wine",
						price: 8.95,
						size: "8 oz Glass",
						img: "https://cdnimg.webstaurantstore.com/images/products/large/196274/730327.jpg",
						description:
							"Large variety of red, white and pink wines. Ask your server/bartender for a full list."
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
