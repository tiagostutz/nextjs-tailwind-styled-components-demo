# NextJS + TailwindCSS + Styled Components Demo

Simple showcase on how to use NextJS with Tailwind and Styled Components.

## Briefing

We are considering that the UI/UX provided by the briefing should be followed with no - or minor - modifications. So, for instance, the more tabular design style used in the design yields us to use a <table/> instead of <Card/>. If the exercise asked for some alternatives on how to build this Product comparision page, maybe we could have some options using <Card>, <div> and other things, but that's not the case. So, most decisions here will be guided towards making the provided design - and spec - with most fidelity as possible.

## Getting Started

### Where is the root Component?

NextJS is React. So pretty much you will follow the same React path from component to component. But there are some tips to get started:
1. The top most (root) component of the application is defined in `pages/_app.js`. In some scenarios you don't event need to provide it as you could use the bult-in `next/App`. But in our case we are overriding this because we are importing the **tailwind.css** there to be globally available.
1. The `pages/index.js` is the "/" component, so in terms of day-by-day development, we can consider this as the root of the application

### Special Files

- _app.js
- _document.js

### Router

Router is provided out of the box by React Router. The convention is that the path of the route is the folder name under the **pages** folder.

## Design Decisions

