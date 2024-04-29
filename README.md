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

    https://www.geeksforgeeks.org/reactjs-virtual-dom/ - this answer is taken from here.

    Every time the Real DOM gets updated, the updated element and its children have to be rendered again to update the UI of our page. This has a significant cost.
    Virtual DOM is the light weight copy of the Real DOM in ReactJS. Whenever an update happens the new virtual DOM is created and is compared with the old virtual DOM. And the actual change which has happened is noted by ReactJS and only those changes are updated in Real DOM. This improves performance significantly. This comparision of old and new virtual DOM is known as diffing.

● What is Reconciliation in React?

    https://github.com/acdlite/react-fiber-architecture - this answer is copied from here.

    The algorithm React uses to diff one tree with another to determine which parts need to be changed.

    Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

● What is React Fiber?

    https://www.scaler.com/topics/react/react-fiber/ - this answer is copied from here.

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

● What is a Microservice?

  https://aws.amazon.com/microservices/ - this answer is copied from here.

  Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams.

  Microservices architectures make applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features.

● What is Monolith architecture?

  https://aws.amazon.com/microservices/ - this answer is copied from here.

  With monolithic architectures, all processes are tightly coupled and run as a single service. This means that if one process of the application experiences a spike in demand, the entire architecture must be scaled. Adding or improving a monolithic application’s features becomes more complex as the code base grows. This complexity limits experimentation and makes it difficult to implement new ideas. Monolithic architectures add risk for application availability because many dependent and tightly coupled processes increase the impact of a single process failure.

● What is the difference between Monolith and Microservice?

    The above two question's answers answer this.


● Why do we need a useEffect Hook?

  After the component has rendered if there is something to be executed useEffect hook takes care of that, it takes a function as argument and an optional argument of dependency array. 

  So useEffect Hook definitely runs after the initial rendering, after that if dependency array is provided with arguments, it will run after a re-render if any of the arguments in the dependency array have changed.

  If the dependency array is empty it will render only after the initial render.

  If the dependency array is not provided it will render each time after the render or re-render.

● What is Optional Chaining?

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining - this answer is copied from here.

  The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

● What is Shimmer UI?

  Shimmer UI is the skeleton of the actual page, this is used instead of a loader. This gives better user experience.

● What is the difference between JS expression and JS statement

  Statement is a code which is an instruction to do something, expression is a code that resolves to a value, a simple value is also treated as an expression.

● What is Conditional Rendering, explain with a code example

  Rendering based on the condition

  restaurantsList.length?
  (restaurantsList.map((restaurant) => {
      return (<RestaurantCard key={restaurant.id} restaurant={restaurant} />);
   })):(<Shimmer/>)

● What is CORS?

  https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS - this answer is copied from here.

  Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

● What is async and await?

  async-await combo are used to handle promises

  async used with functions - we can make a function AsyncFunction object by keeping async before function declaration

  async function always returns a promise

  await can only be used inside an async function and at the top level of a module.

  you write await infront of the promise, 'await promise' returns the value of the promise if it is resolved and if it is rejected, throws reason as error.

 
● What are various ways to add images into our App?

  https://builtin.com/software-engineering-perspectives/react-js-image

● What would happen if we do console.log(useState())?

  useState returns an array with exactly two values:

    The current state. During the first render, it will match the initialState you have passed.

    The set function that lets you update the state to a different value and trigger a re-render.

● How will useEffect behave if we don't add a dependency array ?

  It will be executed after each rerender of the component.

● What is SPA?

  SPA stands for single page application, here there will be single html file, so different content is loaded to this html page via DOM manipulations.

● What is difference between Client Side Routing and Server Side Routing?

  Server side routing is for every route change a new html file is requested from the server.

  Client side routing - only the index.html is requested through the server, after that all the routing is handled by the client itself without making any http requests to server.

