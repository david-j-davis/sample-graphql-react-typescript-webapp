# Web Interview Project

Using any tools you prefer (Vue, React, Angular, plain ol JavaScript, CSS frameworks) let’s build a website. The website only needs to do a couple things. Primarily it is going to interact with https://icanhazdadjoke.com/api

-   Be able to search for a joke

    -   Pagination of joke search results would be nice, but not required. You might save this for last if you have time.
    -   Gracefully handle the case where there are no search results

-   Be able to retrieve a random joke

-   Even though it is kind of silly, when you click a joke it should go to an individual joke page.
    -   On that page you should be able to click a button to copy the joke to your clipboard.
-   There should be a page header and footer, with navigation to the search page, the random page, and any additional pages you feel like adding.

-   Although this is a very simple website, it should be nicely laid out and formatted. We aren’t going to judge your web design tastes, we are just looking for knowledge on how to layout the components of your site.

## David's Soltion

Checkout branch: `git checkout develop-davis`
Run locally: `yarn dev`
The terminal will output a url on localhost

Notes:
* I'm running on Node v16.X 
* Jest test is incomplete, but I thought it beneficial to include the wip
* gql dir is a generated directory
* I reached out to the creator of https://icanhazdadjoke.com/ to fix the graphql endpoint- it didn't get me all the way there but challenge accepted, I had to rely on the REST endpoint for the search capability, but that wasn't before reaching out to Brett to fix the endpoint by adding the ability to query a joke by ID which was cool- and overnight. He said he'll work to get a new endpoint up to search jokes and return multiple results- which you can't with graphql- only one at a time.
* I look forward to discussing my solution, thank you for the opportunity!