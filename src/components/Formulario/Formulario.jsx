import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CartContext } from '../../context/CartProvider';
import { GlobalProvider } from '../../context/GlobalProvider';
import FireBase from "../../hooks/FireBase"
import { agree } from "../../assets/Functions"

function Formulario({ total, items }) {
    const { setAlerta, setMsg, setError } = GlobalProvider()
    const { orders } = FireBase()
    
    const [form, setForm] = useState({
        buyer: {
            nombre: "",
            apellido: "",
            phone: "",
            email: ""
        },
        total: total,
        items: items
    })

    const { buyer: { nombre, phone, email, apellido }, } = form

    const handleChange = (e) => {

        const { name, value } = e.target;

        setForm({
            ...form,
            buyer: {
                ...form.buyer,
                [name]: value,
            }
        })
    }
    const { clearCart } = useContext(CartContext)

    const onSubmit = (e) => {
        e.preventDefault();

        setAlerta(true)
        if (agree([email, nombre, apellido, phone])) {

            setError(false)
            setMsg(`Completar todos los campos antes de realizar compra`)
            return;
        }
        clearCart();
        setError(true)
        setMsg(`Se realizo la compra con exito! ${[nombre]}`)
        orders({ ticket: form })
    };

    return (
        <Form onSubmit={onSubmit} style={{ borderColor: 'black', backgroundColor: 'white', borderRadius: '10px', padding: '10px' }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" value={email} name={"email"} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword" >
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" value={nombre} name={"nombre"} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTelefo">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" placeholder="Apellido" value={apellido} name={"apellido"} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTelefo">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="number" placeholder="Telefono" value={phone} name={"phone"} onChange={handleChange} />
            </Form.Group>
            <h6>Precio final : ${total}</h6>
            <Button variant="secundary" type="submit" style={{ marginLeft: '10rem' }} >
                Finalizar Compra
            </Button>
        </Form>
    );
}

export default Formulario;