Below is my notes

The app implemented has no backend or apis integrated to it and it only takes one feature of the food-ordering-app as of now that is 'See Restaurants' the data is static and only the UI is developed for the search functionality and not the functionality itself. All other links are only clickable, their functionalities are not implemented. Filtering of restaurants is implemented.

Questions

● Is JSX mandatory for React?

  NO it is not mandatory but JSX makes life easy for the developer.

● Is ES6 mandatory for React?

  NO it is not mandatory but recommended.

● '{TitleComponent()}' vs '{<TitleComponent/>}' vs '{<TitleComponent></TitleComponent>}' in JSX

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