# Side effects

side effects happen when activity different from the primary goal of a react component takes place that does not contribute to the work of that component. for exmple in the `react-book/effects/Effect.jsx` file, the `getData()` function allows for the proper handling of what could have been a side effect if the fetching of data was not only triggered by the click of the button.

### Types of side effects

1. Browser Features:

Using browser features like localStorage, sessionStorage, or window.scrollTo
Interacting with the browser's history or location

2. Third-Party Libraries:
   Integrating libraries that have side effects, such as analytics tools or payment gateways

3. Data Fetching:
   Calling external APIs to retrieve data
   Updating state based on fetched data
   Handling potential errors

Continue from Effects and asynchronous code

## State batching
Batching in React describes the internal implementation detail of React which treats multiple state updates as one state update. The benefit: multiple state updates are batched as one state update and therefore trigger only one re-rendering of the component which improves the rendering performance especially for larger React applications. 

