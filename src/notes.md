# Notes on React

## What is React?

React is a Javascript library that is used to build Reactive user interfaces using reuseable components and a HTML-like syntax called JSX. React is a popular library for building web applications, and it is used by many companies and organizations.

## Different use cases of React

React, primarily known for building websites and web apps, has several other applications. Here are a few:

1. **Mobile Apps**: React Native, a framework developed by Facebook, allows developers to build mobile applications using React. With React Native, you can create apps for iOS and Android with a single codebase.

2. **Desktop Applications**: Using frameworks like Electron or Tauri, you can build cross-platform desktop applications with React. These frameworks allow web technologies to be used for creating desktop apps, providing the ability to package and distribute them across different operating systems.

3. **Virtual Reality**: React 360 (previously React VR) is a library that enables the creation of VR experiences. It allows developers to build interactive 360-degree experiences for the web, which can be viewed on VR headsets or through a browser.

4. **Static Site Generators**: Gatsby.js is a popular static site generator that uses React. It allows developers to build fast, static websites with dynamic capabilities, leveraging the power of React along with GraphQL.

5. **Gaming**: React can be used in conjunction with libraries like Three.js to develop browser-based games. React's component-based architecture can help manage game state and user interfaces efficiently.

6. **Command-Line Tools**: React can be utilized to create interactive CLI tools. Libraries like Ink allow developers to build rich command-line interfaces with React components.

7. **Embedded Systems**: Although less common, React can be used in embedded systems or IoT devices with displays, leveraging its component-based approach to manage complex user interfaces.

8. **TV Applications**: Platforms like React Native for Web can be adapted for use on smart TVs. Companies like Netflix have used React for building their TV user interfaces.

These applications showcase the versatility of React and its ecosystem, making it a valuable tool beyond traditional web development.

## React components, What are they?

React components are reusable function like blocks that are used as building blocks for creating React applications. The following are what qualifies a function to be used as a React component.

- Any function that returns jsx qualifies to be a React component
- Once a function qualifies as a React component, it can be used like a HTML element inside of JSX code e.g `<Component/>`
- React components can be nested inside of each other
- React components can be used as props inside of other components

## React props

React properties or props are built in objects that are accessible within any React component. They are used to create and store dynamic or static content within a React component sort of how one would store value in a javaScript variable. Below i the title prop being passed into the React component.

```jsx
function PropComponent({title}){

    return(

         <div>
           <p>{title}</p>
        </div

    )

}

export default PropComponent;

```

- Props are a key React concept that makes components configurable and therefore reusable.
- Props are automatically collected and passed into component functions by React.
- You decide (on a per-component basis) whether you want to use the props data (an object) or not.
- Props are passed into components like attributes or, via the special children prop, between the opening and closing tags.
- Since you are writing the code, it's up to you how you want to pass data via props. Between the tags or as attributes? A single grouped attribute or many single-value attributes? It's up to you.

1. Which "problem" do props solve?
   Props allow us to pass data within a component or between components through ut our applications.

2. How are props passed into components?
   Props are passed either using the spread operator and the `{}` after destructuring data from objects or using the `{children}` keyword within openening and closing tags which is a property of the built in `props` object

3. How are props consumed inside a component function?
   same as number 2

4. Which options exist for passing (multiple) props into components?
   the spread operator

## useState hook

State is a way for React to keep track of the values that change over time within a component. This is done using the useState hook. When the state changes, React triggers a re-render of the component to reflect the new state in the UI.

```
const [value, setValue] = useState["value of any data type"]

```

- The value of variables set using the useState hook can be of any javaScript value type, string, array, object or even null
  bn
- While using useState hook to update the value of a variable that is dependent on the previous state of the variable, it is important to always use an function in the updating function as seeni the counter component in react-book folder;

### Lifting state up

When lifting state up to a parent componene, remember to use placeholder props in the children components from where the state will be used. As in the case of component in the `src/tutorial/react_book/lifting_state` folder that contains a search bar component and a component that renders what is searched. You can see that `onUpdateSearch` and `currentTerm` are used as the placeholder for the components which are later given intended values during usage at app component where the satte has been lifted.

In that code snippet, a function is passed as a value for a custom prop (that is, a prop expected in a component
created by you, not built into React). The `onUpdateSearch` prop expects a function as a value because the
prop is then itself being used as a value for the onChange prop on the <input> element.
The prop is named `onUpdateSearch` to make it clear that it expects a function as a value and that it will be
connected to an event. Any name could've been chosen though; it doesn't have to start with on. But it's a
common convention to name props that expect functions as values and that are intended to be connected

### Tips for working with useState hook

1. Initialize State Properly
   Tip: Initialize your state with the correct default value. The initial state should match the type of data you're storing (e.g., useState(0) for a number, useState('') for a string, useState([]) for an array).
   Example:

```javascript
￼Copy code
const [count, setCount] = useState(0);
const [name, setName] = useState('');
const [items, setItems] = useState([]);
```

2. Group Related State Together
   Tip: Group related pieces of state into a single state object to avoid managing multiple states that should logically be updated together.
   Example:

```javascript
￼Copy code
const [user, setUser] = useState({
  name: '',
  age: 0,
  email: ''
});
// To update, use a functional update pattern
const updateName = (name) => setUser(prevState => ({ ...prevState, name }));

```

3. Use Functional Updates for Derived State
   Tip: When your new state depends on the previous state, use a functional update to avoid issues with stale state.
   Example:

```javascript
￼Copy code
const [count, setCount] = useState(0);

const increment = () => setCount(prevCount => prevCount + 1);
```

4. Avoid Unnecessary State Updates
   Tip: Only update the state when necessary. If the new state is the same as the old state, avoid triggering unnecessary re-renders.
   Example:

```javascript
￼Copy code
const [value, setValue] = useState('');

const handleChange = (event) => {
  const newValue = event.target.value;
  if (newValue !== value) {
    setValue(newValue);
  }
};

```

5. Use Lazy Initialization for Expensive Operations
   Tip: If initializing state involves a heavy computation, use lazy initialization by passing a function to useState. This function will only run once when the component mounts.

Example:

```javascript
￼Copy code
const [expensiveValue, setExpensiveValue] = useState(() => {
  return someExpensiveCalculation();
});

```

6. Manage Complex State with useReducer
   Tip: When state management becomes too complex (e.g., multiple interdependent pieces of state), consider using the useReducer hook instead of useState.
   Example:

```javascript
￼Copy code
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}



const [state, dispatch] = useReducer(reducer, initialState);
```

7. Memoize Callbacks to Prevent Unnecessary Re-renders
   Tip: When passing state setters or functions as props, use useCallback to memoize them, preventing unnecessary re-renders in child components.
   Example:

```javascript
￼Copy code
const handleClick = useCallback(() => {
  setCount(prevCount => prevCount + 1);
}, [setCount]);

```

8. Handle Asynchronous State Updates Carefully
   Tip: When working with asynchronous operations, be mindful of race conditions or updates occurring after the component has unmounted. Consider using useEffect cleanup functions or cancelable promises.
   Example:

```javascript
￼Copy code
useEffect(() => {
  let isMounted = true;
  fetchData().then(data => {
    if (isMounted) setData(data);
  });

  return () => {
    isMounted = false;
  };
}, []);

```

9. Structure State for Scalability
   Tip: As your application grows, structure your state in a way that is scalable. Avoid deeply nested state objects that are difficult to manage and update.
   Example:

```javascript
￼Copy code
// Instead of deeply nested state
const [state, setState] = useState({
  user: { name: '', age: 0 },
  settings: { theme: 'dark', notifications: true }
});
// Consider splitting it into separate state variables or using useReducer
const [user, setUser] = useState({ name: '', age: 0 });
const [settings, setSettings] = useState({ theme: 'dark', notifications: true });
```

10. Debug and Inspect State Changes
    Tip: Use React Developer Tools and console.log statements strategically to debug and understand how state changes over time.
    Example:

```javascript
￼Copy code
useEffect(() => {
  console.log('State updated:', state);
}, [state]);


```

These tips will help you manage state effectively in your React components, leading to more predictable, maintainable, and scalable applications.

## Conditionally render elements

You can conditionally render elements by using variables that begin in upper case letters as seen in the button component in

- In a case where you have to update a list of items, note that you can only run state updates using `useState` hook. React does not understand any other way of updating state.
