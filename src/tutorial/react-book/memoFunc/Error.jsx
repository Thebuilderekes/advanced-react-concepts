import {memo} from 'react'

function Error({message, color}) {

  if(!message){

    return null;
  }
  console.log("error component renders")
  return (
    <p className={color}>{message}</p>
  )
}

export default memo(Error)

/*In the error component, we wrap error component export with react's memo function during export.
rThis causes React to check whether the component's props did change, compared to the last
 time the component function was called. If prop values are equal, the component function is not executed again by adding memo*/
