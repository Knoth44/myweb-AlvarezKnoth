import React, { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const GlobalProvider = () => useContext(GlobalContext)

const GlobalState = ({ children }) => {

    const [alerta, setAlerta] = useState(false);
    const [cargar, setCargar] = useState(false);
    const [msg, setMsg] = useState()
    const [error , setError] = useState(true)
    const [buscar,setBuscar] = useState("")

    return (
        <GlobalContext.Provider value={{
            alerta,
            setAlerta,
            cargar,
            setCargar,
            msg,
            setMsg,
            error,
            setError,
            setBuscar,
            buscar
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState
