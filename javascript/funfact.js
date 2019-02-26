// Copyright (c) 2019 Jerry L Hoover - Two Brave Dogs

// =-=-=-=-= This function creates a random number between min and max =-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function getFunFactIndex(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// =-=-=-=-=-=-=-= This function holds the fun facts, and returns one of them
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function funFact(funFactIndex) {

    const funFacts = [
        "Banging your head against a wall for one hour burns 150 calories.",
        "In Switzerland it is illegal to own just one guinea pig.",
        "Pteronophobia is the fear of feathers.",
        "Snakes can help predict earthquakes. When they sense an earthquake coming, they email the National Earthquake Laboratory with their information.",
        "A flock of crows is known as a 'murder'. No one ever uses that, though.",
        "The oldest 'yo’ momma' joke was discovered on a 3,500 year old Babylonian tablet.",
        "So far, two diseases have successfully been eradicated: smallpox and rinderpest (a cattle disease).",
        "29 May is officially 'Put a Pillow on Your Fridge Day', a bizarre European tradition to bring luck. Some claim that the internet is responsible for this so-called holiday.",
        "Cherophobia is an irrational fear of fun or happiness. It is a common affliction of teachers.",
        "7% of American adults believe that chocolate milk comes from brown cows. And that the world is flat. And that we never landed on the moon. And that contrails contain mind-control chemicals. Basically, 7 out of every 100 Americans is completely stupid.",
        "If you lift a kangaroo’s tail off the ground it can’t hop. BTW, Kangaroos are known to be highly offended when you lift their tails… so… you’ve been warned.",
        "Bananas are curved towards the sun.",
        "Male goats urinate on their own heads to smell more attractive to females. See also: Russian Dossier.",
        "The inventor of the Frisbee was cremated and made into a Frisbee after he died. He was later lost by his dog in the park near his home, and then runover by a Parks Dept lawnmower.",
        "During your lifetime, you will produce enough saliva to fill two swimming pools.",
        "If Pinocchio says 'My Nose Will Grow Now', it will cause a paradox.",
        "A polar bear could eat as many as 86 penguins in a single sitting… if they didn’t live on opposite sides of the planet.",
        "King Henry VIII owned over 6,500 handguns, but he kept a giant axe beside his bed.",
        "Movie trailers were originally shown after the movie, which is why they were called 'trailers'.",
        "An eagle can kill a young deer and fly away with it.",
        "Heart attacks are 20% more likely to happen on a Monday.",
        "Tennis players are not allowed to swear when they are playing in Wimbledon. or... are they?",
        "In 2017 more people were killed from injuries caused by taking a selfie than by shark attacks.",
        "The top six foods that increase intestinal gasses are beans, corn, bell peppers, cauliflower, cabbage and milk.",
        "There is a species of spider called the Hobo Spider.",
        "A lion’s roar can be heard from 5 miles away.",
        "Saint Lucia is the only country in the world named after a woman.",
        "A baby spider is called a spiderling.",
        "The United States Navy has started using Xbox controllers for their periscopes.",
        "The following can be read forward and backwards: Do geese see God? BTW: it turned out the geese were only seeing their shadows.",
        "A baby octopus is about the size of a flea when it is born.",
        "A sheep, a duck and a rooster were the first passengers in a hot air balloon.",
        "In Uganda, around 48% of the population is under 15 years of age.",
        "The average male gets bored of a shopping trip after 26 minutes.",
        "In the 16th century, Turkish women could initiate a divorce if their husbands didn’t pour coffee for them. Wait. Is that true?",
        "Recycling one glass jar saves enough energy to watch television for 3 hours.",
        "Squirrels are known to seek out hallucinogenic mushrooms, eat them, then retreat to their dens until the effects wear off.",
        "Approximately 15% of U.S. power outages are caused by squirrels.",
        "Facebook, Instagram and Twitter are all banned in China. Lucky.",
        "95% of people text things they could never say in person. Which is sorta the purpose of texting, really.",
        "Honeybees can recognize human faces. So, yeah… that bee stung you on purpose… because you’re a jerk.",
        "The Battle of Hastings didn’t take place in Hastings. It actually took place in a village called Battle. But everyone agreed the 'Battle of Battle' was a terrible name for a battle, so they changed it.",
        "While trying to find a cure for AIDS, the Mayo Clinic made glow-in-the-dark cats. FYI, these researchers are currently burning in Hell.",
        "A swarm of 20,000 bees followed a car for two days because their queen was stuck inside. At least, that's what they told the officer.",
        "Nearly 3% of the ice in Antarctic glaciers is penguin urine. Like San Francisco, but colder.",
        "Bob Dylan’s real name is Robert Allen Zimmerman. Bet I can guess why he changed it.",
        "Crocodiles can’t stick out their tongues, but alligators can. Or maybe, crocodiles are just more mature than alligators.",
        "Sea otters hold hands (well… flippers) when they sleep so they don’t drift away from each other.",
        "A small child could swim through the veins of a blue whale. A small child made of krill could swim right into a blue whale’s stomach.",
        "Bin Laden (may his name be blotted out) was killed on May 2, 2011, but his death was announced in the US on May 1st, due to the time difference. or... was it time travel?",
        "J.K. Rowling chose the unusual name ‘Hermione’ so young girls wouldn’t be teased for being nerdy. Today, increasing numbers of adults appear to believe 'Harry Potter' is real.",
        "Hewlett-Packard’s name was decided in a coin toss in 1939 to see which name would go first. This caused two otherwise identical universes to come into existence; one with Hewlett-Packard and one with Packard-Hewlett.",
        "There are a total of 1,665 steps in the Eiffel Tower.",
        "The Pokémon Hitmonlee and Hitmonchan are based on Bruce Lee and Jackie Chan. Is Pokémon still a thing?",
        "A woman once tried to commit suicide by jumping off the Empire State Building. She jumped from the 86th floor but was blown back onto the 85th floor by a gust of wind. She later sued the State of New York for 6 million dollars.",
        "Pirates wore earrings because they believed it improved their eyesight. It probably also helped pirates signal one another, wink wink, nudge nudge, know what I mean?",
        "Los Angeles’ official name is 'El Pueblo de Nuestra Senora la Reina de los Angeles de Porciuncula.' Due to fear of anti-religion lawsuits, the city plans to officially shorten its name to “Porciuncula, California” in 2025. Residents are encouraged to call it, 'Porci Town'",
        "The Twitter bird actually has a name – Larry. Larry Bird. I see what they did there.",
        "Octopi have four pairs of arms. Obviously",
        "In the sitcom, Parks and Recreation, the writers had no idea Nick Offerman was a talented saxophone player when they wrote the Duke Silver plot line. I have no idea what that means.",
        "It snowed in the Sahara desert for 30 minutes on the 18th of February 1979.",
        "Mike Tyson once offered a zoo attendant 10,000 dollars to let him fight a gorilla. Although the gorilla was willing, zoo officials refused the offer.",
        "ABBA turned down 1 billion dollars to do a reunion tour. Thankfully.",
        "There has never been a verified snow leopard attack on a human.",
        "The first alarm clock could only ring at 4 a.m. After that alarm clock was beaten with a hammer, the 2nd alarm clock was adjustable.",
        "Birds don’t urinate. So, neither did dinosaurs. Because birds are dinosaurs now.",
        "Dying is illegal in the Houses of Parliaments. However, lying is mandatory. Democracy. Yeah.",
        "The most venomous jellyfish in the world is the tiny Irukandji.",
        "The 20th of March is Snowman Burning Day. It’s a Swiss thing. You wouldn't understand.",
        "When visiting the set of Game of Thrones, Queen Elizabeth claimed she wasn't allowed to sit on the Iron Throne.",
        "There is an official Wizard of New Zealand. It’s some guy named Ian. Ian the Enchanter.",
        "An apple, potato, and onion all taste the same if you eat them with your nose plugged.",
        "Vincent van Gogh only sold one painting in his lifetime.",
        "A company in Taiwan makes dinnerware out of wheat, so you can eat your plate!",
        "The average person walks the equivalent of five times around the world in their lifetime. Except for you, you lazy bastard! Get up already!",
        "Michael Jackson offered to make a Harry Potter musical, but J.K. Rowling rejected the idea, saving us all from a fate worse than death.",
        "The world record for stuffing drinking straws into your mouth at once is 459. In California, possession of 459 straws is a felony under the Illegal Straw Dealer Act (ISDA).",
        "Nutella was invented in Italy during WWII, when hazelnuts were mixed into chocolate to extend chocolate rations.",
        "In 2011, more than 1 in 3 divorce filings in the U.S. contained the word 'Facebook.' In China, Facebook is banned. Problem solved. Good job, China.",
        "According to Genesis 1:20-22 the chicken came before the egg. And in Deuteronomy, God gets mad if you weave wool and cotton in the same garment. Religion.",
        "Honeybees can get drunk on fermented tree sap. And then they text each other inappropriate pictures of their stingers.",
        "Tears contain a natural pain killer which reduces pain and improves your mood. But, do you have to drink it to get this effect? Or does it just soak in through your face?",
        "Squirrels forget where they hide about half of their nuts.",
        "Millions of birds a year die from smashing into windows in the U.S. alone. Government proposes plan to ban windows.",
        "Dolly Parton lost in a Dolly Parton look-alike contest. The winner was actually a man.",
        "George W. Bush was once a cheerleader. They tried to draft him onto the football team, but his dad got a waiver for him.",
        "In total, there are 205 bones in the skeleton of a horse.",
        "Coca-Cola owns every domain that can be read as 'ahh', all the way up to 62 h’s. Domain renewal probably runs around $72,000 a year. The average school district could hire two teachers with that money. Thanks, Coke!",
        "Each year there are more than 40,000 toilet related injuries in the United States. More than half of these are people who try to balance on the seat with their feet.",
        "Strawberries can be red, yellow, green or white. They can also be black. Don’t eat them if they’re black.",
        "Mewtwo is a clone of the Pokémon Mew, yet it comes before Mew in the Pokédex. I don’t know what any of these words mean.",
        "Four people lived in a home for 6 months infested with about 2,000 brown recluse spiders, but none of the people were harmed. In exchange, the spiders only demanded they turn down their music after 10pm.",
        "Madonna suffers from brontophobia, which is the fear of thunder. My dog has that, too. She should try the ThunderVest.",
        "In June 2017, Facebook reached 2 billion active users. Of these, about one quarter were duplicate accounts, and another 30% were CIA bots organizing the overthrow of foreign governments. And the rest were elderly women posting pics of their cats",
        "Samuel L.Jackson demanded a purple lightsaber in Star Wars before he would accept the part as Mace Windu. When asked why, Jackson said, 'Cuz, I likes purple, b****.'",
        "Paraskavedekatriaphobia is the fear of Friday the 13th.",
        "Kleenex tissues were originally used as filters in gas masks.",
        "In 1998, Sony accidentally sold 700,000 camcorders that had infrared technology that allowed you to see through certain types of clothes.",
        "During your lifetime, you will spend around thirty-eight days brushing your teeth. But your dentist will insist it wasn’t enough and recommend a root canal.",
        "Ronald McDonald is 'Donald McDonald' in Japan because it makes pronunciation easier for the Japanese, since the R sound doesn’t occur in Japanese."
    ];

    return funFacts[funFactIndex];
};

// =-=-=-=-=-=-=-=-= This is the main procedure =-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
let funFactIndex = 0;
funFactIndex = getFunFactIndex(1, 100);

let theFunFact = "<p>" + funFact(funFactIndex) + "</p>";

let insertFunFact = document.getElementById('funFactDiv');
insertFunFact.insertAdjacentHTML("afterbegin", theFunFact);