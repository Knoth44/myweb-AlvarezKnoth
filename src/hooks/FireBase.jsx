
import { addDoc, collection } from "firebase/firestore"
import db from '../service'
import { useState } from "react"

const FireBase = () => {

    const [orderId, setOrderId] = useState({})

    const orders = async ({ticket}) => {
        
        try {
            const orderCollections = collection(db, "orders")
            await addDoc(orderCollections, ticket).then(({ id }) => {
            setOrderId( id)
            console.log(id)
        })} catch (err) {
            console.log(err)
        }

    }
    return  {
        orders
    };
}

export default FireBase