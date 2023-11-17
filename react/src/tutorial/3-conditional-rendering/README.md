##UseEffect 

even though the useEffect has empty dependency array, it  will always run whatever is in it when you conditionally rendering something. It will alway run when that component mounts.
To deal with this, use a cleanup function to handle it.
