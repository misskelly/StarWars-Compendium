# StarWars

## Project Goals & Requirements:
+ Learn how to wireframe and know why it is important.
+ Write squeaky clean, well refactored code using ES6 & ES7 syntax.
+ Make informed design decisions to create a user-friendly application.
+ Keep state based components to a minimum and leverage more functional components.
+ Use a modular architecture for your application file structure.
+ Think deeply about React Lifecycle Methods.
+ Use propTypes for every component receiving props.

## Iteration O: Wireframing
Utilize a wireframing tool of your choice to plan the design of your application before you start building.
Sketch
Draw.io
Balsamiq
Adobe XD CC
InVision

### Iteration 1: Landing Page
When the app starts up '/' the user should see the opening scrolling text of a random film, with the title of the film and release year listed below.
There should be buttons to browse three different categories: People, Planets, and Vehicles.
There should be a button to view favorites, with the number of current favorites indicated.

### Iteration 2: Get People
When a user clicks on People, the page is populated with cards with data for each person.
The cards should have:
Name
Homeworld
Species
Population of Homeworld
A button to “Favorite” the person
The button should have an active class indicating it has been pressed.

### Iteration 3: Get Planets/Vehicles
When a user clicks on any of the other buttons, the data should then represent the button pressed.

##### Planet Cards:
Name
Terrain
Population
Climate
Residents
A button to “Favorite” the planet
Vehicle Cards:
Name
Model
Class
Number of Passengers
A button to “Favorite” the vehicle
