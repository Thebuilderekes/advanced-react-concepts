- The can be a nested structure about APIs that you will find out in the wild where there can be an array that contains objects each having its own nesting of other objects and so on

* Google uses CLS - cumulative layout shift score to rank websites so you want to always make sure that your website does not have this number high

Next js notes

- Next js does not allow you ti use images from an external source unless you explicitly set the images from host name in next.config file

- You can use fetch in a server component without a useEffect in Next js

- you can do get request in server components

# Proper react folder structure

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
