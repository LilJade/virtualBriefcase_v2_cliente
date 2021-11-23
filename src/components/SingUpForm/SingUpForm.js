/* eslint-disable no-const-assign */
import React, { useState, useRef } from 'react'
import { size, values } from 'lodash';
import "./SingUpForm.scss";
import {isEmailValid} from "../../utils/validation";
import {signUpApi} from "../../api/auth";
import { Col, Form, FormControl, FormGroup, Row, Spinner, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import ReCAPTCHA from "react-google-recaptcha";

export default function SingUpForm(props) {
    const captcha = useRef(null);
    const {setShowModal} = props;
    const [formData, setFormData] = useState(initialFormValue());
    const [singUpLoading, setSingUpLoading] = useState(false);

    const onChange = e => {
      setFormData ({...formData, [e.target.name]: e.target.value});
    };

    const recaptchaOnchange = () => {
       if(captcha.current.getValue()){
           console.log("el usuario no es un robot")
       };
    }

    const onSubmit = e => {
        e.preventDefault();
        let validCount = 0;

        values(formData).some(value => {
            value && validCount++;

            return null;
        });

        if(size(formData) !== validCount) {
            Swal.fire({ icon: 'error', title: 'Opps!..', text: 'Completa todos los datos del formulario' })
        } else {
            if(!isEmailValid(formData.email)) {
                Swal.fire({ icon: 'error', title: 'Opps!..', text: 'Correo inválido!' })
            } else if (formData.password !== formData.repetir) {
                Swal.fire({ icon: 'error', title: 'Opps!..', text: 'Las contraseñas tienen que ser iguales!' })
            } else if (size(formData.password) < 6) {
                Swal.fire({ icon: 'error', title: 'Opps!..', text: 'La contraseña tiene que tener al menos 6 caracteres' })
            }else if(!captcha.current.getValue()){
                Swal.fire({ icon: 'error', title: 'Opps!..', text: 'Debes verificar que no eres un robot' })
            }
            else {
                setSingUpLoading(true);
                signUpApi(formData).then(response => {
                    if(response.code) {
                        Swal.fire({ icon: 'error', title: 'Opps!..', text: response.message })
                    } else {
                        Swal.fire({ icon: 'success', title: '¡Registro completo!..', text: 'Los datos se guardaron correctamente!', timer: 1000 })
                        setShowModal(false);
                        setFormData(initialFormValue);
                    }
                }).catch(() => {
                    Swal.fire({ icon: 'error', title: 'Opps!..', text: 'Error del servidor!' })
                }).finally(() => {
                    setSingUpLoading(false);
                })
            }
        }
    };

    return (
        <div className="signUpForm">
            <h3>Crea tu cuenta!</h3>

            <Form onSubmit={onSubmit} onChange={onChange}> 
                <FormGroup>
                    <Row>
                        <Col>
                            <FormControl defaultValue={formData.nombre} name="nombre" type="text" placeholder="Nombres" />
                        </Col>
                        <Col>
                            <FormControl defaultValue={formData.apellidos} name="apellidos" type="text" placeholder="Apellidos" />
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <FormControl defaultValue={formData.email} name="email" type="email" placeholder="Correo electrónico"/>
                </FormGroup>
                <FormGroup>
                    <Row>
                        <Col>
                            <FormControl defaultValue={formData.password} name="password" type="password" placeholder="Contraseña" />
                        </Col>
                        <Col>
                            <FormControl defaultValue={formData.repetir} name="repetir" type="password" placeholder="Repetir contraseña" />
                        </Col>
                        
                    </Row>
                    <ReCAPTCHA align="center"
                    ref={captcha}
                         sitekey="6Lcm_U8dAAAAAFHEMC_rV2mChbFkCO0kBCIfQn6f"
                        onChange={recaptchaOnchange}
                        />,
                </FormGroup>
                <Button variant="danger" type="submit">
                    {!singUpLoading ? "Registrarse" : <Spinner animation="border" />}
                </Button>
            </Form>
        </div>
    )
}

function initialFormValue() {
    return {
        nombre: "",
        apellidos: "",
        email: "",
        password: "",
        repetir: ""
    };
}