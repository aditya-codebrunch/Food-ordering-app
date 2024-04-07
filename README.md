Below is my notes about the project.

About the Project

Food ordering app UI is built in this project. And that too only the 'See Restaurants' and filtering of reastaurants features. They are implemented.

There is a server folder in the project, which implements a simple http server using node express. The mock data for the restaurants is fetched from this server by an api. This is to imitate fetching data from backend.
Also this server is being used to serve the app itself.

So to run this project, first the frontend should be built and that creates a dist folder which would have the build.After that get into the server folder via terminal and run 'node index.js', this will run the http server at localhost:3000 and will serve the app which can be accessed in the browser by the url 'http://localhost:3000'

Below notes is not related to the project.

● Is JSX mandatory for React?

  NO it is not mandatory but JSX makes life easy for the developer.

● Is ES6 mandatory for React?

  NO it is not mandatory but recommended.

● '{TitleComponent()}' vs <TitleComponent/> vs <TitleComponent></TitleComponent> in JSX

    All these are same.

● How can I write comments in JSX?

    {/* */}

● What is <React.Fragment></React.Fragment> and <></> ?

    React components can only render one element, and if you have multiple elements, the common practice is to wrap them in a single root element.
    These both are used to wrap jsx elements without an extra DOM element like div.

● What is Virtual DOM?

    Every time the Real DOM gets updated, the updated element and its children have to be rendered again to update the UI of our page. This has a significant cost.
    Virtual DOM is the light weight copy of the Real DOM in ReactJS. Whenever an update happens the new virtual DOM is created and is compared with the old virtual DOM. And the actual change which has happened is noted by ReactJS and only those changes are updated in Real DOM. This improves performance significantly. This comparision of old and new virtual DOM is known as diffing.

● What is Reconciliation in React?

    https://github.com/acdlite/react-fiber-architecture - this answer is copied from here.

    The algorithm React uses to diff one tree with another to determine which parts need to be changed.

    Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

● What is React Fiber?

    React Fiber is a new reconciler that was introduced in React 16.0. A reconciler is a component responsible for updating the virtual DOM and applying changes to the actual DOM. React Fiber is a complete rewrite of React's previous reconciler and is aimed at improving the performance of React applications, especially in areas such as animation and layout.
    React Fiber works by breaking down the rendering process into smaller, more manageable chunks and allowing React to schedule and process these chunks as needed, in a way that balances the need for smooth animation and efficient updates.

● Why we need keys in React? When do we need keys in React?

    Without keys any new insertion record could lead to rerendering of all the records, with keys only the new insertions can be rerendered.

● Can we use index as keys in React?

    It is not a good practice to use indexes as keys.

● What is props in React?

    How arguments are for function, props are for React Component.

● What is a Config Driven UI ?

    According to the data that comes from the backend UI gets implemented, this could lead to the implementation of different UI components on the basis of data.

● What is the difference between Named Export, Default export and * as export?

  When there are multiple exports we do named exports and imports {},
  Default export can only be one, and it is imported without {},
  export * from somefile.js - this is reexporting all the exports from somefile.js from the current file.

● What is the importance of config.js file

  This has all the constants and utilities, which can be used to avoid hard coding and also this file gives a separation between utilities and the business logic.

● What are React Hooks?

  They are normal javascript functions from 'react' package, with the help of these hooks we can use react features from the components. You can build your own hooks as well.

● Why do we need a useState Hook?

  useState is a React Hook that lets you add a state variable to your component. And it also gives a set function through which you can update the state variable.