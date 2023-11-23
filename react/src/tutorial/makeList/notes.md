In times when you need to have a component take in smaller parts of a quality like in this case of `People` component which takes in `PeoplesNamesList` and `PeopleAge` components that each focus on the names and ages of the people from the objects inside the `data` array in the `data.js` file.

NOTE: The `person` variable being passed as parameters into each component to make it possible to be accessed and used. THIS IS IMPORTANT.

Tricks:

### Default value

You can provide a default value of a variable if there is none given using the OR (||) operator and a default value either string or number.
e.g

`<p>{name || "defaultValue"}</p>`
or you can do it where you pass the variables as parameters like below
`function People({name = "defaultValue})`

**GO and study optional chaining**
In situation where you don't have an image to render you will have to setup a default images. THE CODE BELOW IS AN EXAMPLE OF HOW TO GET IT DONE. Code varies.

`const img = images?.[0]?.small>.url || defaultAvatar imported to component`
OR
`const img = images?.[0]?.small>.url ?? defaultAvatar imported to component`

const img =: This declares a new constant variable named img.
images?.: This is an optional chaining operator. It allows you to access properties of an object even if the object is null or undefined. In this case, it is attempting to access the images array.

[0]: This is an array index expression. It is used to access the first element of the images array.

.small: This is a dot notation property access expression. It is used to access the small property of the first element of the images array.

.url: This is another dot notation property access expression. It is used to access the url property of the small property of the first element of the images array.
