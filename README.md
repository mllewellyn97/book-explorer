# BookExplorer
Book Explorer is a simple Angular web application that allows users to explore books using the Open Library API. Users may input the title of the book and search. On the right from the search bar, there is a clear icon that allows users to clear their search, and also any books that have been rendered beneath the search bar. Clicking into the ellipsis next to the search shows additional filters such as Author and Subject for additional search criteria. When clicking the search button on the far right, books will be rendered in a list of cards beneath the search in the home page. The cards show title and author information. When the user clicks on one of the book cards, they will be navigated to see a description of the book if available, the title and the book's cover image. Clicking the book next to the 'Book Explorer' title in the header will take the user back to the home page.  

# Approach
The project was build using a standalone component-based architecture. The goal was to implement a simple, modular and easy to use interface that is visually appealing. 
Key Features include:
- Search functionality: Users can input a book title in the main search bar and click on the search icon to call the Open Library api to retrieve relevant books that match the search term. 
- Filtering: Users may input terms such as Author Name and Subject into the additional filters by clicking into the menu icon next to the clear button. This will add additional params to the search when calling the Open Library API.
- Clearing the search: Users may click the clear denoted as an 'x' on the right side of the search to clear the search terms input into the search bars, in addition to any books rendered in a list beneath the search.
- Loading State: On searching, a custom spinner is rendered to show the user that the API is being called and the results are loading. 
- Responsive Design: Layout is adaptable to different window sizes, however this could be further enhanced with media queries for smaller phone screen sizes. 
- Styling: A dark themed aesthetic that aligns with a library look and feel, using shades of brown and black. 
- Marquee effect Subheader: A simple marquee is displayed underneath the header on the front page to give users brief instructions on the search bar below. 

The application leverages Angular's reactive patterns, including Observables, utilizing route params, and a centralized BookService to manage http requests to the Open Library API. 

# Design Decisions and Trade Offs
Dynamic Search vs On-Click Search: The decision was made to implement an On-Click search as opposed to a dynamic search which renders results as the user inputs data into the search bar. An On-click search was chosen for simplicity within a small project focused on managing intentional and limited search requests to the Open Library API. The Open Library API doesn’t include built-in rate limiting for rapid requests, and due to limited time constraints the decision was made to not implement dynamic searching at this time. If dynamic searching were to be implemented, requests would need to be cached and or rate limited in order to avoid flooding the API or running into a 429 Too Many Requests error. To not over-complicate the core requirement of the project, dynamic search was not implemented. Also to consider, that Book Titles are generally more than a few words long. Users may not get meaningful results in requests for short words such as 'The', "Or" and other terms that may return a variety of results. Waiting until the user has fully entered the title ensures a meaningful set of matching titles. 

Data Fetching and Rendering: The Open Library API is free and provides good coverage as far as meta data, however there were several places in which data for specific titles was lacking or not present, such as certain book cover images or book descriptions. A placeholder 'no-image' image was used within the book cards in cases where a cover image was not present in the response, in order to maintain consistent card sizing. Some titles are longer than others, introducing an additional need in the UI to maintain a uniform size of cards. Description fields for book details are sometimes inconsistent, which called for a need to use two different potential fields to display a description, or default to "No Description Available." Book details information is somewhat lacking in meaningful information to display.  

Responsive UI:
 To fully account for smaller screen sizes, media queries will need to be introduced to update layouts in order to properly render all portions of the home page. For the simplicity of the project implementation, flex and grid layouts were utilized to manage browser dimensions, however there are certain portions that could be enhanced for an iphone screen size. For example the search bar menu options. These could be collapsed into a hamburger menu so they are still accessible.

 Loading Mat-Spinner vs Custom Spinner:
 There was a trade off made to implement a custom spinner as opposed to utilizing Angular's Mat-Spinner in the book list. A skeleton loader was implemented for the book details page to allow the image to fully load before showing the container. When implementing mat-spinner it was observed that the spinner would not render appropriately without an opaque or translucent color. The element was visible in the DOM, however was not rendering properly. Thus, the decision was made to implement a custom spinner to handle the loading state in between when the user clicked search. 

 Unimplemented Sort Feature: 
 As a stretch goal, I wanted to implement a sort feature which is shown in the top right of the search bar. This would allow users to sort alphabetically by search results or in descending alphabetical order. However, due to simplicity of the project and limited time to provide a functional solution and ensure the core requirements were met, the sort feature was not implemented. 

# Potential Future Enhancements 
- Implement dynamic search with debounced API calls.
- Add pagination
- Improve mobile responsiveness with additional media queries
- Sort functionality on home page 
- Additional details for the book detail page 

# Version 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
