##UseEffect

even though the useEffect has empty dependency array, it will always run whatever is in it when you conditionally rendering something. It will always run when that component mounts.
To deal with this, use a cleanup function to handle it. The clean up function makes sure that it only runs once.

## conditional rendering

Alway have a an error, success and loading state when fetching data.
conditionally render a component using if statement for each of the states. If success is true, error and loading becomes false, if there is an error, sucess is false and loading is true, loading always happens before a success true

## steps

useffect wrap the async function component and try-catch inside wrap const response = await fetch(url) if there is an error because !response.ok setLoading(false), setError(true). Note that loading always happens before a data. const data = await response.json(), setData(data), catch(error) in the catch block and setError(true),
