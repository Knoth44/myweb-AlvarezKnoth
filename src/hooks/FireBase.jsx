import { addDoc, collection, getDocs } from "firebase/firestore"
import db from '../service'
import { useState } from "react"
import { GlobalProvider } from "../context/GlobalProvider";

const FireBase = () => {
    const [item, setItem] = useState([]);
    const [orderId, setOrderId] = useState({})
    const { setCargar } = GlobalProvider()
    const { setAlerta, setMsg, setError } = GlobalProvider()
    const orders = async ({ ticket }) => {
        try {
            const orderCollections = collection(db, "orders")
            await addDoc(orderCollections, ticket).then(({ id }) => {
                setOrderId(id)
                setTimeout(() => {
                    setAlerta(true)
                    setError(true)
                    setMsg(`Numero de ticket:  ${id}`)
                }, 4000);

            })
        } catch (err) {
            console.log(err)
        }
    }


    const dataFireBase = async (idItem) => {

        const data = collection(db, "products")

        getDocs(data).then(res => {
            setCargar(true)

            setTimeout(() => {
                let aux;
                if (idItem !== undefined) {
                    aux = res.docs.map(i => i = { id: i.id, ...i.data() })
                    aux = aux.filter(j => j.id === idItem)
                    setCargar(false)
                }


                setItem(aux)
            }, 1000);
        })
    }
    const categoryDataFireBase = async (categoryid) => {
        const data = collection(db, "products")

        getDocs(data).then((resolve) => {
            categoryid ? setCargar(false) : setCargar(true);

            setTimeout(() => {
                let aux;
                if (categoryid) {
                    aux = resolve.docs.map(i => i = { id: i.id, ...i.data() })
                    aux = aux.filter(j => j.genres.some(l => l === categoryid && j))
                } else {
                    aux = resolve.docs.map(i => i = { id: i.id, ...i.data() })
                }
                setItem(aux)
                setCargar(false)
            }, 1000);
        }).catch((err) => {
            console.log(err)
        })
    }

    return {
        orders,
        dataFireBase,
        categoryDataFireBase,
        item,
        orderId,
        setItem
    };
}

export default FireBase