# React and working with arrays and keys

- When working with keys which is an inbuilt prop that all react component has access to, you must not fall into the
  temptation of setting the index as the key. Every list of items must have a unique key attached to it and using the
  index makes it hard to track the items because items that move will lose their index value. Using a unique key ensures
  that items maintain their keys even when they are moved or removed.

- You can use the array item name as a unique key provided that there is no repetition of array item name

1. How can lists of data be rendered as JSX elements?
   List of data can be rendered using `map` or `for loop`

2. Why should keys be added to rendered list items?
   Keys should be added to lists in react so that each list item can be given a unique id and react does not re-rendere the entire list of items every time an item is added or removed

3. Give one example each for a good and a bad key.

- using the list item name is a good example of a good key
- -using the index is an example of a bad key


## Styling react components

