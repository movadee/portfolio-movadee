# Portfolio Movadee.com

To visit live site got to: [http://movadee.com]

This Angular project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

This project is using [Materializecss](http://next.materializecss.com/) library for styling.

## App Hosting

This project is hosted for free on the GitHub Pages. If I have any app changes I execute following commands: 
- to build a dist folder with a production code: `ng build --prod`
- to create CNAME file with custom url reference: `echo "movadee.com" > dist/CNAME`
- to publish site on github pages: `ngh`

I used [angular-cli-ghpages](https://www.npmjs.com/package/angular-cli-ghpages) to publish Angular2+ app to gh-pages

I used the folowing sources for reference:
- https://pages.github.com/
- https://developer.telerik.com/featured/quick-angular-2-hosting-angular-cli-github-pages/
- https://hackernoon.com/how-to-set-up-godaddy-domain-with-github-pages-a9300366c7b

## Sending Contact Us Email

Since my portfolio is hosted on GitHub it is required to be only static content without backend. I wanted to have a Contact Us form
so I can receive emails from people. I found a great solution that is not require backend setup. Now I am sending notification email 
from a Contact Us Form using Google Apps Mail. [Follow this link](https://github.com/dwyl/html-form-send-email-via-google-script-without-server) if you'd like to know details

## Google Analytics

I am using Google Analytics to monitor site ctivities. Here is [a super helpful rticle](https://codeburst.io/using-google-analytics-with-angular-25c93bffaa18) that I've used for a reference.

## App Specifications Document

I was inspired by Mr. Joel Spolski and his amazing book Joel on Software to write this [Project Specs](https://docs.google.com/document/d/1eTpdydbdG0UwS-yy14mLAFd8VkwStVFrw6QwhR4-yTI/edit?usp=sharings).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## ToDo List

- Load projects data from json file (local)
- Update movadee project description with more details
- Create CV
- Utilize lazy loading
- Utilize Localization
- Comment all code
- Add portfolio to Materializecss showcase