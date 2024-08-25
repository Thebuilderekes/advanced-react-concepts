# useRef and Portals in react

## useRef

useRef hook is used when you are trying to get the value of a variable without re-rendering the scren as useState would.

### ForwardRef

This is how you pass ref vlues from one component to another in react.
You cannot only pass prop values iin react but you can also pass ref values.

# Portals

Portals are used to move postions of compontns such as dialog boxes from where they re created to where you want them to be rendered. In cases where one would want a dialoge box to appear on top every other element on the page, it is ensentil to have these them appear in the root file of a react project and portls helps us achive this.

Using createPortal() which takes 2 arguments, to wrap the return statement of the first argument being the a dialog element inside a component and `document.getElementbyId('dialogsDivIDCreatedInTheRootHTML')` being the second argument in the function, you can make that dialog to be rendered in that position set at the root html file in the body.

Example of createPortal
```
function ErrorDialog({ onClose }) {
  return createPortal(
    <>
      <div className={classes.backdrop}></div>
        <dialog className={classes.dialog} open>
          <button onClick={onClose}>Okay</button>
        </dialog>
    </>,
    document.getElementById(‚dialogs')
);

}
export default ErrorDialog;
```

NOTE: DO THE EXERCISES ON PORTALS AND USEREFS TO DRIVE HOME KNOWLEGDE
