import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { GlobalProvider } from '../../context/GlobalProvider';
import React from 'react'

const Toast = () => {
    const { alerta, setAlerta, msg , setMsg, error ,setError} = GlobalProvider();

    useEffect(() => {

        if (alerta) {
          error ? 
                toast.success(msg)
                :
                toast.error(msg)
            setTimeout(() => {
                setAlerta(false);
                setError()
                setMsg()
            }, 3000);
        }

    }, [alerta]);


    return (
        <>
            {alerta && (
                <div>
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                </div>
            )}
        </>
    );
}

export default Toast