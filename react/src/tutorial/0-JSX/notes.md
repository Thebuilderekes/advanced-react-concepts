#JSX

JSX is a syntactic extension of Javascript that is used by React to build UIs.

### Elements in React

A react element is an object that has 3 properties. The type, the props and then nested in the props is
the children. The interpretation of this object is what is implemented in the virtual DOM.

Here are the expressions that will not render anything on the screen when used in JSX:

``

<div>{null}</div>
<div>{undefined}</div>
<div>{false}</div>

``
###Component composition

- Containment
  Containment refers to the fact that some components don’t know their children ahead of time.
  you can have a component defined with {children} within a div and only have that component used
  when you want to pass certain content in it that can vary according to what ypu want the component to
  look like at a certain time.

- Specialization
  Specialization defines components as being “special cases” of other components.

### LEARN ABOUT HIGHER ORDER COMPONENT EVEN IF IT IS OBSOSOLETE AND CAN BE ACHIEVED WITH STATE AND RENDER PROPS

### Tips fror creating styling

Conditionally rendering a className according to a `type` prop passed to the creator component
check `Button.jsx` component for example
