import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Formulario({ total, items }) {

    const [form, setForm] = useState({
        buyer: {
            nombre: "",
            apellido:"",
            phone: "",
            email: ""
        },
        total: total,
        items: items
    })

    const { buyer: { nombre, phone, email,apellido }, } = form

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

    return (
        <Form style={{ borderColor:'black',backgroundColor: 'white', borderRadius: '10px', padding: '10px', marginLeft: '20rem', width: '450px' }}>
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
                <Form.Control type="text" placeholder="Telefono" value={apellido} name={"apellido"} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTelefo">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="number" placeholder="Telefono" value={phone} name={"phone"} onChange={handleChange} />
            </Form.Group>
            <Button variant="secundary" type="submit">
                Finalizar Compra
            </Button>
        </Form>
    );
}

export default Formulario;