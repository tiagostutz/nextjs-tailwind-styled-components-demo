# NextJS + TailwindCSS + Styled Components Demo

Simple showcase on how to use NextJS with Tailwind and Styled Components.

## Getting Started

To bring the project up and running for development mode, go to de **react-app** folder and
```bash
yarn install
```
then
```bash
yarn run dev
```

To run the tests:
```bash
yarn run test
```

To run a production preview with static rendering, first you need to build and then start the server:
```bash
yarn run build
```
then
```bash
yarn start
```

To run using the Docker image:
```bash
docker-compose up --build
```

## Briefing

Here are some important assumptions made to guide the decisions and designs of the project:
1. Let's consider that the UI/UX provided by the briefing should be followed with no - or minor - modifications. So, for instance, the more tabular design style used in the design yields us to use a <table/> instead of <Card/>. If the exercise asked for some alternatives on how to build this Product comparision page, maybe we could have some options using <Card>, <div> and other things, but that's not the case. So, most decisions here will be guided towards making the provided design - and spec - with the most fidelity as possible.
1. We rely on good practices of componentization, modularization, SOC, etc, but having the scope of the project in sight to not overegineering things.
1. Despite the spec presents just a Product Page, let's considerate that this is just part of a medium project and let's build/use a Design System as it was given. That's why it will be built in the "lib" folder, to emulate as if those components were provided by a separated module

## Some Decisions and important information:

Here's a summary of some decisions made: 
1. Use a Design System: see [About Design System]() section
1. Build the Design System using another battle-tested Design System - [TailwindCSS](https://tailwindcss.com/docs) - combined with [styled-components](https://styled-components.com/)
1. Unit test the Design System elementary (element) components just to prevent they don't have positioning and spacing styles and as a kind of "TDD for design" in which we expect on the test some tokens to be present base on the Mock overview
1. Unit test the more complex components to ease the business rules requirements implementation and provide backwards constraint in refactors and evolutions.
1. As the interactions are somewhat simple and don't take state change propagation/notification to many levels, we are handling all business logic state and actions using Hooks and Effects at the main component (<ProductCompare /> in compare/index.js) and not using orther third party solutions like Redux, Mobx, Apollo GraphQL and other options out there.
1. We have a route named `ui-ux` (menu UI/UX) that represents the first step "chopping" the provided design into a pure HTML/CSS Design System page. see [From Mock to Components Pipeline]() section

### Where is the root Component?

NextJS is React. So pretty much you will follow the same React path from component to component. But there are some tips to get started:
1. The top most (root) component of the application is defined in `pages/_app.js`. In some scenarios you don't event need to provide it as you could use the bult-in `next/App`. But in our case we are overriding this because we are importing the **tailwind.css** there to be globally available.
1. The `pages/index.js` is the "/" component, so in terms of day-by-day development, we can consider this as the root of the application

### Special Files

- _app.js
- _document.js

### Router

Router is provided out of the box by React Router. The convention is that the path of the route is the folder name under the **pages** folder.

## Responsiviness

As the interaction format would change 

## Caching

Simple cache has 5kb size. Node-cache has 55kb.

## Design Decisions

### About Design System

### From Mock to Components Pipeline

Based on this page the React componentization with Styled-Components and Composite components start.