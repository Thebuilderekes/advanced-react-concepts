import {React, createContext, useState, useContext} from 'react'
import People from './people.jsx'

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

function AppContext({children}) {

  const [userName, setName] = useState("peter")

  return (

        <GlobalContext.Provider value={{userName, setName}}>
{children}
       </GlobalContext.Provider>
  )
}

export default AppContext
