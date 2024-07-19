import type { BlogDataTypes } from '../../types/blog/blogDataTypes';

export const blogsData:BlogDataTypes[] = [
    {
        id:'1',
        category:'Vegetables',
        owner:'Admin',
        commentsCount:'63',
        title:"Vegan Fajitas",
        src:'https://www.acouplecooks.com/wp-content/uploads/2020/07/Vegan-Fajitas-004.jpg',
        date: '2024-04-01',
        tag:['Vitamins','Healthy','Low fat','Vegetarian'],
        post:[
            { type: "paragraph", text: "These are the very best vegan fajitas: a plant based dinner that everyone loves! Roast the veggies on a sheet pan for quick and easy prep." },
            { type: "paragraph", text: "There’s no such thing as too many easy dinner ideas. So let us present our new favorite: these incredible vegan fajitas! Everyone loves this meal, even meat eaters. It’s a great way to make a fun healthy dinner where no one notices there’s no meat! Roast up lots of veggies on a sheet pan with spices, and serve with refried beans and “guac-ish”. The recipe comes right from Talia Pollack’s Party in Your Plants cookbook: and it’s truly a plant party. Here’s what to do, and more about this delicious plant based book!" },
            { type: "header", text: "Ingredients in vegan fajitas: sheet pan veggies" },
            { type: "paragraph", text: "What we love about this delicious vegetarian and vegan fajitas recipe is that it’s basically sheet pan fajitas! Throw a mix of veggies onto a sheet pan, mix with fajita spices, and bake! It’s so simple and it’s easy to customize. You can use any veggies you like, and even try it with our fajita seasoning (throw the veg in a bowl with olive oil and eye-ball it). This combo of fajita veggies is fantastic though: it’s got just the right elements to make a tasty healthy dinner. Here’s what you’ll need:" },
            { type: "list", textList:[
              { text: 'Onion: use white, yellow or red!' },
              { text: 'Bell peppers: any color! We like a mix of green, orange and red' },
              { text: 'Cauliflower' },
              { text: 'Portobello mushroom' },
              { text: 'Olive oil' },
              { text: 'Chili powder' },
              { text: 'Cumin' },
              { text: 'Smoked paprika: if you can find it, this gives a nice subtle smokiness (you can use it in lots of recipes)' },
              { text: 'Garlic powder' },
              { text: 'Onion powder' }
            ] },
            { type: "image", images: [
                { src: "https://www.acouplecooks.com/wp-content/uploads/2020/07/Vegan-Fajitas-011.jpg", alt: "How to make vegan fajitas" },
            ] },
            { type: "header", text: "Guac-ish: a fast guacamole!" },
            { type: "paragraph", text: "One of our favorite parts of this vegan fajitas recipe is a concept Talia uses called “guac-ish.” She’s a witty writer and podcast personality, and guac-ish is a great example of the way she infuses fun into everything she touches. It’s simply a fast guacamole recipe that takes just 5 minutes: and I think this will be our new go to! Here’s how to make guac-ish, the fastest guacamole recipe you’ll make:" },
            { type: "list", textList:[
              { text: 'Pit 2 avocados (here’s how to do it safely). Scoop out the flesh into a bowl.' },
              { text: 'Mash them with a fork.' },
              { text: 'Add the juice of 1 lime and chopped cilantro to taste. Yes, that’s really all you need to do! It makes the perfect topping for vegan fajitas and tacos. Consider us sold!' }
            ] },
            { type: "image", images: [
                { src: "https://www.acouplecooks.com/wp-content/uploads/2019/11/Homemade-Refried-Beans-003-735x919.jpg", alt: "Vegan refried beans" },
            ] },
            { type: "header", text: "Round it out with refried beans (or other protein)" },
            { type: "paragraph", text: "When you’re making vegan fajitas, you have to think about plant-based protein. How are you going to add protein sources to make it a filling meal? This recipe uses refried beans as the basis for the fajitas: and this worked for our family! It was just enough protein to keep us full. The recipe in the book also lists a tofu and tempeh recipe you can use in addition to the beans: so feel free to add that if you think your family will need it." },
            { type: "list", textList:[
              { text: 'Canned refried beans is best for quick weeknights! Simply warm them on the stove. Sometimes we also add a few pinches of cumin or chili powder to amp the spices: just add to taste!' },
              { text: 'Homemade refried beans are great if you have time to whip them up: and you might be able to fit it in while the veggies roast. Try our homemade refried beans or refried black beans.' }
            ] },
            { type: "image", images: [
                { src: " https://www.acouplecooks.com/wp-content/uploads/2020/07/Vegan-Fajitas-006-768x960.jpg", alt: "Vegetarian fajitas" },
            ] },
           
            { type: "header", text: "How to warm tortillas" },
            { type: "paragraph", text: "You can make all the components for these vegan fajitas, but they won’t be next-level unless you warm your tortillas. Yes, there’s nothing worse than a stiff, cold tortilla with fajitas! You can warm tortillas in the oven or on the stovetop. Here’s how to warm tortillas:" },
            { type: "list", textList:[
              { text: 'On the stove: Char the tortillas by placing them on an open gas flame on medium for a few seconds per side, flipping with tongs, until they are slightly blackened and warm. This is our preferred method!' },
              { text: 'In the oven: Preheat an oven to 350 degrees Fahrenheit. Wrap a few tortillas (in packets of no more than 5) in aluminum foil and place it in the oven for about 15 to 20 minutes. You can place the tortillas directly on the grate or on a baking sheet.' }
            ] }
          ]
    },
    {
        id:'2',
        category:'Diabetic',
        owner:'Admin',
        commentsCount:'64',
        title:"Eggplant Lasagna: A Hearty Delight",
        date: '2024-04-15',
        src:'https://www.acouplecooks.com/wp-content/uploads/2023/09/Eggplant-Lasagna-012.jpg',
        tag:['Healthy','Low fat','Vegetarian','Kid foods','Vitamins'],
        post:[
            { type: "paragraph", text: "This eggplant lasagna recipe layers eggplant, homemade marinara, and a flavorful three-cheese filling! It’s a hearty dinner that pleases everyone." },
            { type: "paragraph", text: "Got eggplant and want to turn it into a meal? Try this Eggplant Lasagna, a tasty dinner recipe that swaps out the traditional noodles for roasted eggplant! This gooey pan holds layers of eggplant, homemade marinara, and a flavorful three-cheese filling. Lemon zest and nutmeg takes it to restaurant-style flavor. It’s a hearty gluten-free and meatless dinner idea that everyone will love! This one’s now in our regular rotation to stay." },
            { type: "header", text: "Ingredients for eggplant lasagna" },
            { type: "paragraph", text: "Eggplant lasagna is a gluten-free version of lasagna that swaps the noodles for roasted eggplant. It’s similar to a classic Eggplant Parmesan, but skips the breading on the eggplant. You’ll slice the eggplant into planks, then use that for layering with the marinara and three-cheese filling. Here are the ingredients you’ll need:" },
            { type: "list", textList:[
              { text: 'Eggplant' },
              { text: 'Olive oil' },
              { text: 'Garlic' },
              { text: 'Butter' },
              { text: 'Crushed tomatoes and tomato sauce' },
              { text: 'Fresh thyme' },
              { text: 'Dried basil, dried tarragon, ground nutmeg, and kosher salt' },
              { text: 'Cornstarch' },
              { text: 'Lemon zest' },
              { text: 'Ricotta, Parmesan and mozzarella cheese' }
            ] },
            { type: "image", images: [{ src: "https://www.acouplecooks.com/wp-content/uploads/2023/09/Eggplant-Lasagna-003.jpg", alt: "Eggplant Lasagna" },
                { src: "https://www.acouplecooks.com/wp-content/uploads/2023/09/Eggplant-Lasagna-008.jpg", alt: "Eggplant Lasagna Recipe" }
            ] },
            { type: "header", text: "The tricks to eggplant lasagna" },
            { type: "paragraph", text: "The biggest issue with lasagna recipes without noodles like eggplant lasagna is that eggplant is 90% water. Raw eggplant would make the dish into a watery mess! So there are a few tricks to making eggplant lasagna with the perfect consistency:" },
            { type: "list", textList:[
              { text: 'Roast the eggplant. This cooks out a significant amount of the water, making for the perfect tender consistency. You’ll roast at 425°F for about 25 minutes total.' },
              { text: 'Thicken the tomato sauce with cornstarch. This is another preventative measure! Adding a little cornstarch makes an even thicker tomato sauce with less water.' },
              { text: 'Let the lasagna cool for 15 minutes to set. Right out of the oven, there may be a little moisture. Let the lasagna sit and cool, which lets it absorb any remaining moisture.' }
            ] },
            { type: "image", images: [{ src: "https://www.acouplecooks.com/wp-content/uploads/2023/09/Eggplant-Lasagna-001.jpg", alt: "Eggplant Lasagna Recipe" }] },
            { type: "header", text: "A few flavor secrets" },
            { type: "paragraph", text: "This eggplant lasagna tastes restaurant-quality with just a few special items to make the ingredients sing! We recommend making the recipe with each of these ingredients:" },
            { type: "list", textList:[
              { text: 'Ricotta, Parmesan, and mozzarella cheese: Using three types of cheese brings a nuance in flavor. Use whole milk mozzarella if you can find it: it melts better than part-skim cheese.' },
              { text: 'Homemade tarragon tomato sauce: You could use store-bought marinara sauce in a pinch, but this tomato sauce is incredible! Substitute oregano if you don’t have dried tarragon.' },
              { text: 'Lemon zest and fresh thyme: These bring a zing and freshness that’s absolutely essential to the flavors.' }
            ] },
            { type: "header", text: "Make ahead & leftover storage for eggplant lasagna" },
            { type: "paragraph", text: "This eggplant lasagna recipe takes about 45 minutes to prepare, 30 minutes to bake, and 15 minutes to rest. So, it’s not a recipe for a quick weeknight meal! However, there are a few things you can do to prep this recipe in advance." },
            { type: "list", textList:[
              { text: 'Roast the eggplant in advance. One of the biggest time savers is roasting the eggplant ahead of time. Roast the slices, then refrigerate them until you’re ready to assemble and bake. They will accumulate moisture in the fridge, so pat them dry before assembling.' },
              { text: 'Make the tomato sauce in advance. It’s easy to let the tomato sauce simmer while you preheat the oven. But you can make it in advance too! Just refrigerate until serving: the flavor gets better over time.' },
              { text: 'Or, make the entire pan in advance! Leftovers store well; they can be refrigerated for up to 3 days and reheated in a 375°F oven.' }
            ] },
          ]
    },
    {
        id:'3',
        category:'Meat&Fish',
        owner:'Admin',
        commentsCount:'63',
        title:"Honey Glazed Salmon",
        date: '2024-05-03',
        src:'https://www.acouplecooks.com/wp-content/uploads/2023/10/Honey-Glazed-Salmon-001.jpg',
        tag:['Healthy','Low fat','Vegetarian','Kid foods','Vitamins','Meat','Dinner'],
        post:[
            { type: "paragraph", text: "Impress everyone with this honey glazed salmon recipe! The easy flavorful sauce features honey, soy, miso and garlic." },
            { type: "paragraph", text: "Here’s a dinner idea that gives you maximum return on investment: this Honey Glazed Salmon recipe! In under 30 minutes, you’ve got tender, flaky salmon fillets that are bursting with flavor from a sticky glaze of honey, soy sauce, miso and garlic. That’s what we mean by return on investment: there’s little time needed to make this incredible dish that will have everyone licking their plates clean!" },
            { type: "header", text: "Ingredients in honey glazed salmon" },
            { type: "paragraph", text: "This honey glaze for salmon can be made in just 5 minutes, making it the ideal quick sauce for weeknight meals. Mix up the 6-ingredient sauce in a bowl, then brush half of it onto the salmon. Broil it up, then pour the remaining glaze on before serving. It makes the best sticky sauce that coats everything in savory sweet flavor. Here’s what you’ll need for this recipe:" },
            { type: "list", textList:[
              { text: 'Salmon fillets, wild caught if possible' },
              { text: 'Olive oil' },
              { text: 'Yellow or white miso' },
              { text: 'Honey' },
              { text: 'Soy sauce' },
              { text: 'Rice wine vinegar' },
              { text: 'Garlic powder' },
              { text: 'Ground ginger' },
              { text: 'Olive oil, for brushing' }
            ]},
            { type: "image", images: [{ src: "https://www.acouplecooks.com/wp-content/uploads/2022/11/Honey-Garlic-Sauce-007.jpg", alt: "Honey Glazed Salmon" }] },
            { type: "header", text: "Types of miso" },
            { type: "paragraph", text: "Miso is a Japanese fermented soybean paste that’s full of nutrients and savory flavor. It’s known for its intense savory flavor, otherwise known as umami: the fifth flavor. You can find miso in the international foods aisle near the Japanese ingredients. There are many different types of miso, and they all taste different. We recommend using white or yellow miso for this miso butter recipe: sometimes they’re labeled as “light miso”." },
            { type: "list", textList:[
              { text: 'White miso (Shiro miso): This variety has a mild, more delicate flavor and less salt than darker miso.' },
              { text: 'Yellow miso: This type is fermented a little longer than white miso and has a mild, lightly sweet flavor.' },
              { text: 'Red or dark miso: This variety is fermented longer than white or yellow miso. It has a very strong flavor and can overwhelm the flavors in a dish, so we don’t recommend using it here.' }
            ]},
            { type: "image", images: [{ src: "https://www.acouplecooks.com/wp-content/uploads/2023/10/Honey-Glazed-Salmon-003.jpg", alt: "Honey Glazed Salmon" },
                { src: "https://www.acouplecooks.com/wp-content/uploads/2023/10/Honey-Glazed-Salmon-005.jpg", alt: "Honey Glazed Salmon" }
            ] },
            { type: "header", text: "Tips for buying salmon" },
            { type: "paragraph", text: "The most important thing when it comes to making this honey glazed salmon recipe is the quality of the fish. Lower quality salmon can taste very fishy and have a mushy texture. It can also have a lot of white stuff (called albumin) when it’s cooked: while it’s not harmful, it doesn’t look appetizing! Here’s what to know when shopping for salmon:" },
            { type: "list", textList:[
              { text: '1 to 1 1/2-inch thick fillets are good for this recipe and look impressive; you might find it labeled center cut at the store.' },
              { text: 'Look for wild caught salmon. Fish that is wild caught in your country is usually a sustainable choice. (There are also quality options in well-regulated farms; see Seafood Watch Consumer Guide.)' },
              { text: 'Buy fresh salmon. Salmon that’s fresh from the fish counter usually has the best flavor. Frozen can work too, but try to find highest-quality frozen salmon. Avoid those big economy-sized bags, which we’ve found it typically thinner and can taste fishy.' }
            ]},
            { type: "header", text: "How to cook honey glazed salmon" },
            { type: "paragraph", text: "This honey glazed salmon recipe is broiled salmon, an efficient method that skips the oven preheating time and cooks the fish in just 10 minutes! You can also make this recipe oven baked or grilled (see below), but our favorite way is broiled because it’s so quick and it gets nicely crisp and browned on top. Oven baking can work, but the salmon comes out more moist and soft. Here are a few tips for this recipe:" },
            { type: "list", textList:[
              { text: 'Allow the salmon to come to room temperature before cooking (brine it if possible!). This can take 15 to 20 minutes, but it’s important. If the salmon is too cold when heat is applied, the outside can cook much faster than the inside. We recommend brining the salmon, which is letting it sit in salt water while it comes to room temperature. This helps to season the fish and also avoids the white stuff (albumin) when the fish is cooked.' },
              { text: 'Remember the thickness determines the cook time. 1-inch salmon takes 8 to 11 minutes to broil. Very thin salmon can broil in just 5 minutes, so adjust the cook time accordingly.' },
              { text: 'Keep an eye on the broiler! Salmon can go from pink to brown very quickly in the broiler: so don’t stray too far away, especially at the end of the cook time.' },
              { text: 'The salmon is done with the internal temperature is 125 to 130°F when measured in the thickest part. The fish will continue to cook after you remove it from the heat. To ensure full safety, the FDA recommended temperature for seafood is 145°F, or well done.' }
            ]},
          ]
    },
    {
        id:'4',
        category:'Beverages',
        owner:'Admin',
        commentsCount:'63',
        title:"Mai Tai: The Classic Cocktail Recipe",
        src:'https://www.acouplecooks.com/wp-content/uploads/2022/10/Mai-Tai-Recipe-009.jpg',
        date: '2024-04-04',
        tag:['Fruit','Dinner','Breakfast','Healthy'],
        post:[
            { type: "paragraph", text: "Here’s how to make the original Mai Tai recipe! Gather the ingredients for this tropical rum drink that’s as complex as it is fruity." },
            { type: "paragraph", text: "The Mai Tai might sound like a simple fruity resort drink, but it’s anything but! No, this drink is a classic cocktail from the 1940’s that’s been (cough) ruined by saccharine sweet versions. How to make a real Mai Tai? The rum cocktail is breathtakingly complex, featuring aged rum, orange liqueur, and almond syrup for nutty and vanilla notes against sharp citrus. Float a little dark rum on top, and you get to the core of a Mai Tai: it’s sophisticated, nuanced, and might we say…extraordinarily special." },
            { type: "header", text: "What’s a Mai Tai?" },
            { type: "paragraph", text: "The most widely accepted origin story of the Mai Tai is that the cocktail was invented in 1944 at Trader Vic’s restaurant in Oakland, California. It became very popular in the 1950’s and 60’s, especially at tiki restaurants. (And since Tiki culture is built on appropriation, we won’t exalt the virtues of that phenomenon.) Full disclosure: we weren’t fans of this drink until we tasted the classic version! The Mai Tai cocktail in its original form just makes sense. It’s tropical, nutty, boozy and zingy: and it’s nothing like the adult fruit juice you might be expecting. (I ordered a Mai tai at a bar recently and it tasted like a Hawaiian punch juice box.)" },
            { type: "image", images: [{ src: "https://www.acouplecooks.com/wp-content/uploads/2022/10/Mai-Tai-Recipe-005.jpg", alt: "Mai Tai" }] },
            { type: "header", text: "Mai Tai ingredients" },
            { type: "paragraph", text: "What’s in the original Mai Tai? Despite what you might think, there’s no pineapple juice! There’s actually no fruit juice, other than lime juice. The classic Mai Tai cocktail is on the list of International Bartender Association’s IBA official cocktails, meaning that it has an “official” definition. The ingredients in a Mai Tai drink are:" },
            { type: "list", textList:[
              { text: 'Aged rum (also called golden, amber or anejo)' },
              { text: 'Orange liqueur: either curaçao, Cointreau or Grand Marnier' },
              { text: 'Lime juice' },
              { text: 'Orgeat syrup' },
              { text: 'Simple syrup (optional)' },
              { text: 'Dark rum' }
            ]},
            { type: "paragraph", text: "The classic Mai Tai ingredients also often include simple syrup. Using a hint of simple syrup accentuates the flavor for a fruity, sweet tart Mai Tai. Omit the simple syrup and it makes a more boozy, spirit-forward drink. I prefer adding simple syrup for the flavor of that classic tropical drink, but Alex prefers the boozier version. Try it both ways and find your favorite!" },
            { type: "image", images: [{ src: "https://www.acouplecooks.com/wp-content/uploads/2023/10/Mai-Tai-Ingredients-1024x2048.jpeg", alt: "Mai Tai" }] },
            { type: "header", text: "What is orgeat syrup?" },
            { type: "paragraph", text: "You may have noticed cocktails at bars that include the ingredient orgeat syrup. What is it, and is it absolutely necessary for a Mai Tai?" },
            { type: "list", textList:[
              { text: 'Orgeat syrup is a non-alcoholic almond syrup used for sweetening cocktails. It has a distinctive nutty flavor with a hint of citrus that’s hard to replicate.' },
              { text: 'How do you pronounce orgeat? Say Or-ZHAAT, where the “ZH” is like the J in the name Jacque.' },
              { text: 'What is a substitute for orgeat syrup? There is no substitute for the unique nutty citrus flavor. A Mai Tai without orgeat syrup just doesn’t work. It’s a tasty drink: just not a real Mai Tai.' },
              { text: 'How much does orgeat syrup cost? You can grab a bottle for about $10. It’s easy to find online: here’s the orgeat syrup we have. Use up leftovers with a Japanese Cocktail, Trinidad Sour, or Mojito Mocktail.' }
            ]},
            { type: "image", images: [{ src: "https://www.acouplecooks.com/wp-content/uploads/2020/10/Rum-002.jpg", alt: "Mai Tai" },
                                    { src: "https://www.acouplecooks.com/wp-content/uploads/2022/10/Mai-Tai-Recipe-006.jpg", alt: "Mai Tai" },
                                    { src: "https://www.acouplecooks.com/wp-content/uploads/2022/10/Mai-Tai-Recipe-012.jpg", alt: "Mai Tai" }] },
            { type: "header", text: "Orange liqueur: Grand Marnier vs Curaçao" },
            { type: "paragraph", text: "A Mai Tai recipe traditionally uses orange curaçao, but it can be hard to find. Here are a few notes on what else to use as a substitute for the orange liqueur:" },
            { type: "list", textList:[
              { text: 'Grand Marnier is your best bet. Grand Marnier is the highest end orange liqueur, and brings nuanced, sophisticated flavor. We had a bottle (since we like Grand Marnier cocktails), so we used it here.' },
              { text: 'Cointreau also works. Got a bottle for making margaritas or other Cointreau drinks? You can use it here too. The flavor is a little less nuanced, but it still works!' }
            ]},
          ]
    },
    {
        id:'5',
        category:'Snacks',
        owner:'Admin',
        commentsCount:'61',
        title:"Easy Yogurt Bark: The Perfect Frozen Snack",
        src:'https://www.acouplecooks.com/wp-content/uploads/2022/05/Yogurt-Bark-003.jpg',
        date: '2024-05-01',
        tag:['Healthy','Low fat','Vitamins','Kid foods',
            'Vegetarian',
            'Snacks',
            'Launch',
            'Dinner',
            'Fruit'
        ],
        post:[
            { type: "paragraph", text: "Yogurt bark is a fun and easy frozen snack! Load up frozen yogurt with granola, fruit and toppings of your choice." },
            { type: "paragraph", text: "Here’s a fun and easy snack no one can turn down: Yogurt Bark! This play on chocolate bark uses frozen yogurt as the base. Mix Greek yogurt with a little honey and vanilla, then sprinkle with toppings of your choice: fruit, granola, chocolate chips, and nuts. Freeze it up and break it into pieces, and each bite is creamy and refreshing: perfect for kids and adults. Our son Larson adores this treat and honestly: I can’t resist it myself!" },
            { type: "header", text: "How to make yogurt bark: a few tips" },
            { type: "paragraph", text: "What is frozen yogurt bark? It’s essentially chocolate bark that uses frozen yogurt as a base for “healthy” toppings like fruit, granola, and nuts. Mixing Greek yogurt with honey and vanilla gives it a subtly sweet flavor. Freeze it with toppings, and they give a pop of sweet, fruity brilliance that makes this treat hard to resist. Here’s the basic concept and a few tips:" },
            { type: "list", textList:[
              { text: 'Use a jelly roll pan (half sheet pan), size 10″ x 15″. This way you can spread the yogurt to fit the entire sheet pan. If you don’t have one, just use a baking sheet and spread to your desired thickness.' },
              { text: 'Mix Greek yogurt, honey and vanilla. If all you have is vanilla yogurt, you can use that too: just omit the sweetener and vanilla. You can also use plain yogurt.' },
              { text: 'Line the baking sheet with parchment paper or foil! This is key: otherwise the bark will freeze to the pan. Spread the yogurt onto the parchment paper in an even layer.' },
              { text: 'Top and freeze for 3 hours. This gets it good and frozen before digging in.' },
              { text: 'Break into pieces and serve! It does become melty after a few minutes, so eat it quickly.' }
            ]},
            { type: "image", images: [{ src: "https://www.acouplecooks.com/wp-content/uploads/2022/05/Yogurt-Bark-054.jpg", alt: "Easy Yogurt Bark" }] },
            { type: "header", text: "Frozen yogurt bark toppings" },
            { type: "paragraph", text: "Frozen yogurt bark is fun because it works with just about any toppings you can imagine! Here’s what we chose (and why), and a few other ideas:" },
            { type: "list", textList:[
              { text: 'Sliced strawberries: You only need a few: slice them very thinly so they are easy to eat when frozen.' },
              { text: 'Granola: We used a purchased chocolate granola: use whatever you have on hand' },
              { text: 'Chopped pistachios: The fine dust of pistachios looks like all natural glitter!' },
              { text: 'Chocolate chips: Add a pop of richness with some mini chocolate chips' },
              { text: 'Crushed almonds or peanuts: Also add a nice flavor' },
              { text: 'Peanut butter: Drizzle a bit of peanut butter over the top for a creative twist' },
              { text: 'Other fruit: Blueberries are rather icy when frozen, so we tend to avoid them. Sliced bananas are great' },
              { text: 'Sprinkles: Why not?' }
            ]},
            { type: "image", images: [{ src: "https://www.acouplecooks.com/wp-content/uploads/2022/05/Yogurt-Bark-059.jpg", alt: "Easy Yogurt Bark" }] },
            { type: "header", text: "Storage info" },
            { type: "paragraph", text: "Once the yogurt bark is frozen for 3 hours, you can cut or break it into pieces. Then store it in a sealed container for up to 2 weeks. After that, it becomes pretty icy and looks a little worn. Keep in mind it does melt immediately upon taking out of the freezer, so you’ll want to eat it fairly quickly (or encourage kids to do so)." }
          ]
    },
    {
        id:'6',
        category:'Fruit',
        owner:'Admin',
        commentsCount:'64',
        title: "Easy Fruit Dip: The Perfect Healthy Snack",
        src:'https://www.acouplecooks.com/wp-content/uploads/2022/06/Fruit-Dip-009.jpg',
        date: '2024-04-06',
        tag: ['Healthy','Low fat','Vitamins','Kid foods', 'Vegetarian', 'Snacks', 'Launch', 'Dinner', 'Breakfast', 'Fruit'],
        post:[
            { type: "paragraph", text: "Here’s a go-to recipe will immediately go in your back pocket for entertaining and healthy snacks: this easy Fruit Dip! Get this: it’s 3 ingredients, takes 2 minutes, and tastes like a dream. That’s right: no need to buy store-bought dip, which is often overly sweet or artificial tasting. This one tastes beautifully natural, simply sweet, and a base of Greek yogurt keeps it healthy and natural. When we say we make this one all the time: we make it all the time. It’s a family favorite around here and we hope you’ll feel the same!" },
            { type: "header", text: "Ingredients in this fruit dip recipe" },
            { type: "paragraph", text: "There are several types of creamy fruit dip out there: a popular version is made with marshmallow creme and cream cheese. But we’ve found our favorite type is even simpler and fresher, with a base of creamy Greek yogurt. It’s just as creamy, easier to make, and has a light and fresh flavor. Here’s what you’ll need for this fruit dip recipe:" },
            { type: "list", textList:[
              { text: 'Greek yogurt' },
              { text: 'Maple syrup or honey (or liquid sweetener of your choice)' },
              { text: 'Vanilla extract' }
            ]},
            { type: "paragraph", text: "All you have to do? Mix the ingredients together. Yes, it’s that simple. It comes out sweet and tangy, with a pure, vanilla-scented flavor: perfect for dipping anything you choose! Head to the recipe below for quantities." },
            { type: "image", images: [{ src: "https://www.acouplecooks.com/wp-content/uploads/2022/06/Fruit-Dip-007.jpg", alt: "Bowl of creamy fruit dip" }] },
            { type: "header", text: "What to serve with fruit dip" },
            { type: "paragraph", text: "Of course, you’ve got your own ideas on what fruits to serve with this dip. But here are a few of the fruits and other foods we’ve found work the best. You can even make fruit skewers for a fun presentation! Here are the best things to serve with fruit dip:" },
            { type: "list", textList:[
              { text: 'Strawberries' },
              { text: 'Apple slices' },
              { text: 'Pineapple chunks' },
              { text: 'Watermelon chunks' },
              { text: 'Grapes' },
              { text: 'Blueberries (a bit small, but they work!)' },
              { text: 'Blackberries' },
              { text: 'Cantaloupe or honeydew melon' },
              { text: 'Kiwi' },
              { text: 'Banana slices' },
              { text: 'Fruit skewers' },
              { text: 'Angel food cake or pound cake cubes' },
              { text: 'Pretzels' }
            ]},
            { type: "image", images: [{ src: "https://www.acouplecooks.com/wp-content/uploads/2022/06/Fruit-Skewers-004.jpg", alt: "Tray of assorted fruits for dipping" }] },
            { type: "header", text: "Flavor variations" },
            { type: "paragraph", text: "This fruit dip recipe is our favorite: basic, straightforward, sweet and pure, with a hint of vanilla. But there are a few other ways you can mix up the flavor in this dip! Here are a few ways to vary the flavor:" },
            { type: "list", textList:[
              { text: 'Cinnamon: Add ¼ to ½ teaspoon cinnamon for a spiced dip.' },
              { text: 'Cocoa powder: Add 3 tablespoons cocoa powder.' },
              { text: 'Peanut butter: Stir in ¼ cup creamy peanut butter (see Peanut Butter Dip).' },
              { text: 'Pumpkin: For a fall variation, add ⅓ cup canned pumpkin, ½ teaspoon cinnamon, ¼ teaspoon ginger and ⅛ teaspoon nutmeg (see Pumpkin Dip).' }
            ]},
            { type: "image", images: [{ src: "https://www.acouplecooks.com/wp-content/uploads/2022/06/Fruit-Dip-004.jpg", alt: "Fruit dip with various flavorings" }] },
            { type: "header", text: "When to serve it" },
            { type: "paragraph", text: "There’s nothing like a good dip: either for entertaining and parties or for lunches! This fruit dip recipe is perfect as a summer appetizer, party food, healthy lunch idea or healthy snack. It even doubles as a light dessert! We love serving it after a summer meal: it’s extremely refreshing and everyone loves it: especially the kiddos! It’s a great opportunity to serve it with fruit skewers." },
          
          ]
    },
    {
        id:'7',
        category:'Bread&Bakery',
        owner:'Admin',
        commentsCount:'53',
        title:"Banana Bread French Toast",
        src:'https://www.acouplecooks.com/wp-content/uploads/2023/10/Banana-Bread-French-Toast-008.jpg',
        date: '2024-05-02',
        tag: ['Healthy', 'Low fat', 'Vitamins', 'Kid foods', 'Vegetarian', 'Bread', 'Snacks', 'Tiffin', 'Launch', 'Dinner', 'Breakfast', 'Fruit'],
        post:[
            { type: "paragraph", text: "Here’s a fun way to transform banana bread into a decadent breakfast treat: Banana Bread French Toast! This is the ultimate breakfast or brunch for banana lovers: the moist, dense texture of the quick bread is ideal for frying until golden brown and cinnamon spiced. Topped with bananas, chopped pecans, and a drizzle of maple syrup, it’s a luxurious way to start the day that’s honestly more like dessert. Needless to say, all of our family are big, big fans of this one!" },
            { type: "header", text: "Ingredients for banana bread French toast" },
            { type: "paragraph", text: "Banana bread French toast starts with a good bread, of course! Our favorite is our best banana bread recipe, but you can use any recipe you like. Cut the bread into slices, then dredge it into our classic French toast custard mixture of eggs, milk, cinnamon, and nutmeg. The main difference is that the custard has none of the customary sugar, since this quick bread is very sweet. Here’s what you’ll need for this recipe:" },
            { type: "list", textList:[
              { text: 'Banana bread' },
              { text: 'Eggs' },
              { text: 'Milk' },
              { text: 'Vanilla' },
              { text: 'Cinnamon and nutmeg' },
              { text: 'Kosher salt' },
              { text: 'Butter, for cooking' }
            ]},
            { type: "image", images: [{ src: "https://www.acouplecooks.com/wp-content/uploads/2023/10/Banana-Bread-French-Toast-002.jpg", alt: "Ingredients for banana bread French toast" }] },
            { type: "header", text: "A note on serving size" },
            { type: "paragraph", text: "Banana bread is very filling: one slice is much denser and more filling than a typical slice of bread. For that reason, plan to eat only one slice of banana bread French toast per person. This recipe is rich and decadent, so you’ll want to account for that in your serving!" },
            { type: "header", text: "Tips for making banana bread French toast" },
            { type: "paragraph", text: "If you’ve got banana bread, this French toast recipe is a breeze! All you’ve got to do is whisk the custard, dip the bread, and fry it up. Here’s how to make French toast:" },
            { type: "list", textList:[
              { text: 'Slice: Slice the banana bread into 3/4-inch slices. (This is the perfect width; too thin and it falls apart but too thick and it’s too filling.)' },
              { text: 'Whisk: In a wide shallow bowl or container, whisk together eggs, milk, vanilla, cinnamon, nutmeg and kosher salt.' },
              { text: 'Dip: Preheat a griddle over medium heat and melt 1 tablespoon butter. Soak each side of 4 slices of bread in the egg mixture for about 30 seconds.' },
              { text: 'Fry: Place the bread on the hot skillet and cook 2 to 3 minutes per side, until browned' }
            ]},
            { type: "image", images: [{ src: "https://www.acouplecooks.com/wp-content/uploads/2023/10/Banana-Bread-French-Toast-007.jpg", alt: "Frying banana bread French toast" }] },
            { type: "header", text: "Topping ideas" },
            { type: "paragraph", text: "Banana bread French toast is rich in itself, so it doesn’t need a lot of toppings to make it taste incredible! We like it best with the following:" },
            { type: "list", textList:[
              { text: 'Pure maple syrup' },
              { text: 'Sliced bananas' },
              { text: 'Chopped pecans or walnuts, toasted if desired' }
            ]},
            { type: "paragraph", text: "If you like, you can add other toppings, but keep in mind it’s very sweet. You could try Greek yogurt sweetened with a little maple syrup to cut the sweetness with the acidity in the yogurt, or some sliced strawberries or raspberries. Or, go with a small dollop of whipped cream for an even more decadent treat." },
            { type: "header", text: "Diet variations" },
            { type: "paragraph", text: "Working with a special diet? Here are a few ways to modify this recipe to fit different dietary needs:" },
            { type: "list", textList:[
              { text: 'Dairy-free: This recipe works with banana bread baked with neutral oil and using non-dairy milk. We recommend oat milk, but almond, soy, or coconut milk will work as well.' },
              { text: 'Gluten-free: Go to this gluten-free banana bread recipe.' },
              { text: 'Vegan: Use this vegan banana bread and the custard mixture from our vegan French toast recipe.' }
            ]},
            { type: "image", images: [{ src: "https://www.acouplecooks.com/wp-content/uploads/2023/10/Banana-Bread-French-Toast-015.jpg", alt: "Banana bread French toast with toppings" }] }
          ]
    },
    {
        id:'8',
        category:"Oil",
        owner:'Admin',
        commentsCount:'1',
        title:"Basil Oil",
        src:"https://www.acouplecooks.com/wp-content/uploads/2016/07/Basil-Oil-004.jpg",
        date: '2024-04-08',
        tag: ['Healthy', 'Low fat', 'Vitamins', 'Kid foods', 'Vegetarian', 'Bread', 'Meat', 'Snacks', 'Tiffin', 'Launch', 'Dinner', 'Breakfast', 'Fruit'],
        post:[
            { type: "paragraph", text: "This bright green basil oil is quick and easy to make, perfect for drizzling over fresh vegetables, eggs, or pizza. It’s a fun alternative to pesto and takes any recipe over the top!" },
            { type: "header", text: "Why we love this recipe" },
            { type: "paragraph", text: "Happy summer! We’re up to our ears in basil and wanted to share a fun, easy recipe for using up some of that basil. Pesto is an obvious choice for a bounty of basil, but what about bright fluorescent green basil oil? It’s simple to put together, easier and cheaper than pesto, and extremely tasty. Alex and I love the bright green color and how it adds an herbaceous pop to whatever you use it on. Drizzle over tomatoes, pizza, caprese salad, and more!" },
            { type: "image", images: [{ src: "https://www.acouplecooks.com/wp-content/uploads/2016/07/Basil-Oil-001.jpg", alt: "Bright green basil oil drizzled over tomatoes" }] },
            { type: "header", text: "Process for making basil oil" },
            { type: "paragraph", text: "The basic concept for making basil oil is to blanch the basil by boiling it for only 1 minute, then plunging it into ice water to stop the cooking. This locks in that brilliant green color. After squeezing out all the water, blend the basil with olive oil using a blender or immersion blender. It yields a beautiful, verdant green sauce that tastes like summer." },
            { type: "image", images: [{ src: "https://www.acouplecooks.com/wp-content/uploads/2016/07/Basil-Oil-002.jpg", alt: "Blending basil with olive oil to make basil oil" }] },
            { type: "header", text: "Ingredients" },
            { type: "list", textList:[
              { text: '1 cup basil leaves, packed' },
              { text: '½ cup olive oil' },
              { text: '⅛ teaspoon kosher salt' },
              { text: '⅛ teaspoon black pepper' }
            ]},
            { type: "header", text: "Instructions" },
            { type: "paragraph", text: "Start a small pot of water to boil. Prepare a bowl of ice water. Remove the basil leaves from the stem and wash them; measure out 1 packed cup of leaves (make sure to pack the cup full for the best flavor). Once the water is boiling, add the basil and boil for 1 minute. Immediately turn off the heat, remove the basil and plunge it into the ice bath. Once the leaves are cool, remove them from the water and squeeze out as much excess water as possible, then dry them with a paper towel. (At this point the leaves will have wilted and reduced to a very small handful.) Place the blanched basil, olive oil, salt and pepper in a blender or in the cup for an immersion blender; blend until fully combined. Taste, and add additional salt if desired. Pour into a sealable container. Use immediately or refrigerate for up to 1 week." },
            { type: "image", images: [{ src: "https://www.acouplecooks.com/wp-content/uploads/2016/07/Basil-Oil-004.jpg", alt: "Basil oil drizzled over caprese salad" },
                { src: "https://www.acouplecooks.com/wp-content/uploads/2016/07/Basil-Oil-002.jpg", alt: "Blending basil with olive oil to make basil oil" },
                { src: "https://www.acouplecooks.com/wp-content/uploads/2016/07/Basil-Oil-001.jpg", alt: "Bright green basil oil drizzled over tomatoes" }
            ] },
            { type: "header", text: "Ways to use basil oil in recipes" },
            { type: "paragraph", text: "To us, simple and quick “non-recipes” like this basil oil are the stuff of summer! We picked up the best heirloom tomatoes we could find and covered them in the basil oil, which was visually stunning and perfect for a patio party appetizer. Enjoy, and let us know if you try it out! Here are a few ideas for ways to use basil oil:" },
            { type: "list", textList:[
              { text: 'Tomatoes or a caprese salad' },
              { text: 'Bread like sourdough bread, no knead bread, or focaccia' },
              { text: 'Pasta like spaghetti, bucatini, rigatoni, or penne' },
              { text: 'As a garnish like crostini with goat cheese or gazpacho' },
              { text: 'Meat or seafood like grilled chicken or grilled salmon' },
              { text: 'Vegetables like grilled corn, grilled vegetables, or roasted vegetables' },
              { text: 'Eggs like hard boiled eggs or scrambled eggs' },
              { text: 'Potatoes like French fries or smashed potatoes' }
            ]},
          ]
    },
]