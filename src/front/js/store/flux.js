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
			drinks: [
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
					name: "Wine",
					price: 8.95,
					size: "8 oz Glass",
					img: "https://cdnimg.webstaurantstore.com/images/products/large/196274/730327.jpg",
					description:
						"Large variety of red, white and pink wines. Ask your server/bartender for a full list."
				}
			],
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
