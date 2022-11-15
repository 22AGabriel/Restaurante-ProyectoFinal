
import {Modal, Button, Form} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from 'react';
import '../../css/login.css';

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
   const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      
    const onSubmit = () =>{
        Login();
    }
      return (
        <>
          <NavLink className={"nav-item nav-link"} variant='dark' onClick={handleShow}>
          <i className="bi bi-box-arrow-in-right fs-4 text-white"></i>
          </NavLink>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className='bg-rojo2'>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-rojo2'>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="usuario@sham.com"
                    {...register("email", {
                      required: "El email es obligatorio",
                      minLength: {
                        value: 8,
                        message: "La cantidad minima debe ser 8"
                      },
                      maxLength: {
                        value: 30,
                        message: "La cantidad maxima debe ser de 30"
                      },
                    })} className='bg-rojo2 bg-login'
                    autoFocus
                  />
                  <Form.Text className="text-danger">
                    {errors.email?.message}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="****"
                    {...register("password", {
                      required: "El contraseña es obligatorio",
                      minLength: {
                        value: 8,
                        message: "La cantidad minima debe ser 8"
                      },
                      maxLength: {
                        value: 15,
                        message: "La cantidad maxima debe ser de 15"
                      },
                    })}
                    className='bg-rojo2 bg-login'
                  />
                </Form.Group>
                <Form.Text className="text-danger">
                  {errors.password?.message}
                </Form.Text>
                <hr></hr>
                <div className="text-center">
                  <Button variant="danger" type="submit">
                    Ingresar
                  </Button>
                </div>
              </Form>
            </Modal.Body>
            <Button variant="dark" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal>
    
        </>
    );
};

export default Login;
