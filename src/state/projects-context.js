import React, { useState, useEffect } from 'react'
import { getProjects } from '../data'

const DashboardContext = React.createContext({
    state: [],
    setState: () => {}
})

export const DashboardContextProvider = ({children}) => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(getProjects())
    }, [])

    return (
        <DashboardContext.Provider value={{state: projects, setState: setProjects}}>
            {children}
        </DashboardContext.Provider>
    )
}

export default DashboardContext
