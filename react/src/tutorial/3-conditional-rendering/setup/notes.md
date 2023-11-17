## REACT DO'S AND DONTS

- Dont place hooks inside of an if condition
- Dont use if condition before a useEffect hook

## When using && and || for conditional rendering in react and JavaScript

&& WILL CHOOSE THE FALSY VALUE WHEN IT CONTAINS A FALSY AND TRUTH VALUE
|| WILL CHOOSE THE TRUTHY VALUTR WHEN IT CONTAINS THE FALY AND TRUTHY VALUE

## Difference between fetch and Axios

The main difference in how fetch and Axios handle errors in React is that fetch does not reject the promise for unsuccessful responses, it does not see 404 as an error, while Axios does.

In fetch, an unsuccessful response is still resolved, but the response object will have an `ok` property that is set to `false`. This means that you need to check the `ok` property in the `then` block to handle errors. For example:

```
const response = await fetch('https://example.com/api/users');

if (!response.ok) {
  // Handle the error
} else {
  // Process the response data
}
```

In Axios, on the other hand, unsuccessful responses are rejected. This means that you can handle errors in the `catch` block. For example:

```
axios.get('https://example.com/api/users')
  .then((response) => {
    // Process the response data
  })
  .catch((error) => {
    // Handle the error
  });
```

The way that fetch and Axios handle errors can have implications for how you write your code. For example, if you are using fetch, you will need to check the `ok` property in every `then` block where you are expecting a successful response. This can make your code more verbose. Axios, on the other hand, allows you to handle errors in the `catch` block, which can make your code more concise.

Ultimately, the best way to handle errors in React depends on your specific needs and preferences. If you are concerned about the performance of your code, you may prefer to use fetch, as it does not reject the promise for unsuccessful responses. However, if you want to write more concise code, you may prefer to use Axios.

Here are some additional things to keep in mind when handling errors in React with fetch and Axios:

- Both fetch and Axios allow you to provide a custom error handler function. This function will be called for any errors that occur during the request.
- Both fetch and Axios also allow you to provide a timeout. This will cause the request to be aborted if it does not complete within the specified amount of time.
