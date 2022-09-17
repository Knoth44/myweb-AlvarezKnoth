import React from 'react'
import Spinners from '../components/Spinner/Spinner'
import Toast from '../components/Toast/Toast'

const Layout = ({ children }) => {
    return (
        <>
            <Spinners />
            <Toast />
            {children}
        </>
    )
}

export default Layout