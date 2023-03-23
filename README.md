# Web Simple Sample Project Criteria

Using any tools you prefer (Vue, React, Angular, plain ol JavaScript, CSS frameworks) let’s build a website. The website only needs to do a couple things. Primarily it is going to interact with https://icanhazdadjoke.com/api

-   Be able to search for a joke

    -   Pagination of joke search results would be nice, but not required. You might save this for last if you have time.
    -   Gracefully handle the case where there are no search results

-   Be able to retrieve a random joke

-   Even though it is kind of silly, when you click a joke it should go to an individual joke page.
    -   On that page you should be able to click a button to copy the joke to your clipboard.
-   There should be a page header and footer, with navigation to the search page, the random page, and any additional pages you feel like adding.

## David's Sample Solution for the above criteria using React/Typescript/Graphql

Install: `yarn`
Run locally: `yarn dev`
The terminal will output a url on localhost

Notes:

-   I'm running on Node v16.17.0, I've set the Node engine to only allow 16.x
-   Jest test is incomplete, but I thought it beneficial to include the wip
-   gql dir is a generated directory
