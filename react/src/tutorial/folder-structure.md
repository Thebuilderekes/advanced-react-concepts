# Proper folder structure

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
