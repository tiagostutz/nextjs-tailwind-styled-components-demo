# NextJS + TailwindCSS + Styled Components Demo

Simple showcase on how to use NextJS with Tailwind and Styled Components.

## Getting Started

## Where the code starts?

NextJS is React. So pretty much you will follow the same React path from component to component. But there are some tips to get started:
1. The top most (root) component of the application is defined in `pages/_app.js`. In some scenarios you don't event need to provide it as you could use the bult-in `next/App`. But in our case we are overriding this because we are importing the **tailwind.css** there to be globally available.
1. The `pages/index.js` is the "/" component, so in terms of day-by-day development, we can consider this as the root of the application

## Router
Router is provided out of the box by React Router. The convention is that the path of the route is the folder name under the **pages** folder.