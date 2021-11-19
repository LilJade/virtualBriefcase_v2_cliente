import { size, values } from 'lodash';
import React, { useState } from 'react'
import { Form, FormControl, FormGroup, Spinner, Button } from 'react-bootstrap'
import Swal from 'sweetalert2';
import {isEmailValid} from "../../utils/validation";
import {signInApi, setTokenApi} from "../../api/auth";
import "./SingInForm.scss";

function initialFormValue() {
    return {
        email: "",
        password: ""
    }
}

export default function SingInForm(props) {
    console.log(props)
    const {setRefreshCheckLogin} = props;
    const [formData, setFormData] = useState(initialFormValue);
    const [signInLoading, setSingInLoading] = useState(false);

    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const onSubmit = e => {
        e.preventDefault();
        let validCount = 0;

        values(formData).some(value => {
            value && validCount++

            return null;
        })

        if(size(formData) !== validCount) {
            Swal.fire({ icon: 'error', title: 'Opps!..', text: 'Completa todos los datos del formulario' })
        } else {
            if(!isEmailValid(formData.email)) {
                Swal.fire({ icon: 'error', title: 'Opps!..', text: 'Correo inválido!' })
            } else {
                setSingInLoading(true);
                signInApi(formData).then( response => {
                    if(response.message) {
                        Swal.fire({ icon: 'error', title: 'Opps!..', text: response.message })
                    } else {
                        setTokenApi(response.token);
                        setRefreshCheckLogin(true);
                        window.location="/";
                    }
                }).catch(() => {
                    Swal.fire({ icon: 'error', title: 'Opps!..', text: 'Error del servidor, inténtalo más tarde.' })
                }).finally(() => {
                    setSingInLoading(false);
                })
            }

        }
    };

    return (
        <div className="signInForm">
            <Form onSubmit={onSubmit} onChange={onChange}>
                <FormGroup>
                    <h5>Correo electrónico: </h5>
                    <FormControl defaultValue={formData.email} name="email" type="email" placeholder="example001@some.com"/>
                </FormGroup>
                <FormGroup>
                    <h5>Contraseña: </h5>
                    <FormControl defaultValue={formData.password} name="password" type="password" placeholder="************"/>
                </FormGroup>
                <Button variant="danger" type="submit">
                    {!signInLoading ? "Iniciar Sesión" : <Spinner animation="border" />}
                </Button>
            </Form>
        </div>
    )
}
