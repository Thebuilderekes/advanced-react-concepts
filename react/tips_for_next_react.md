
## Next js tips
- You can get BIG performance gains if you lower state into the components that need them.
You can simply do this in some cases before thinking about reaching for react.memo and other hooks 


- The can be a nested structure about APIs that you will find out in the wild where there can be an array that contains objects each having its own nesting of other objects and so on

* Google uses CLS - cumulative layout shift score to rank websites so you want to always make sure that your website does not have this number high

Next js notes

- Next js does not allow you to use images from an external source unless you explicitly set the images from host name in next.config file

- You can use fetch in a server component without a useEffect in Next js

- you can do get request in server components


## React


- what are pure and impure functions?
- UseEffect hook is used to handle side effects of impure functions
- The code you place inside the useEffect hook always runs after your component
  mounts or, in other words, after React has updated the DOM.



### Proper react folder structure

pages
|-- Home.jsx
|-- about.jsx
|-- index.jsx- entry point to import all pages into and then export them. export {home, about...}
In app.jsx - import {home, about...} from "..Pages/index.jsx"
components
|-- ui
|-- ComponentsThatContainsSMallerComponents.jsx
|-- Modal.jsx
|-- Button.jsx
hooks
|-- useState.js
|-- customHooks.js
services
|--api
|--state
|--providers
|--i18n
utils
|-- helpers
|-- formatting
