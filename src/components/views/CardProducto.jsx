import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { editarCarrito } from "../helpers/queriesCarrito";
import { editarUsuario } from "../helpers/queriesUsuario";

const CardProducto = ({
  producto,
  carrito,
  setCarrito,
  usuarioLogueado,
  setUsuarioLogueado,
}) => {
  const editarCarrito = (producto) => {
    // let usuario = JSON.parse(localStorage.getItem("usuarioIniciado"));
    const existeProducto = usuarioLogueado.carrito.find(
      (item) => item.id === producto.id
    );
    if (existeProducto) {
      existeProducto.cantidad += 1;
      existeProducto.precio = producto.precio * existeProducto.cantidad;
    } else {
      setCarrito([...carrito, producto]);
      usuarioLogueado.carrito.push(producto);
    }

    editarUsuario(usuarioLogueado.id, usuarioLogueado);
    localStorage.setItem("usuarioIniciado", JSON.stringify(usuarioLogueado));
  };

  
  return (
    <Col md={6} lg={4}>
      <Card className="mb-3 CardPP">
        <div className="imgCardProducto">
          <Card.Img
            variant="top"
            src={producto.imagen}
            alt={producto.nombreProducto}
            className="imgDiv"
          />
        </div>
        <Card.Body>
          <Card.Title>{producto.nombreProducto}</Card.Title>
          <Card.Text>Precio: ${producto.precio}</Card.Text>
          <Card.Text>Categoria: {producto.categoria}</Card.Text>
          <div className="d-flex justify-content-between">
            <Button
              className=" bg-rojo3 text-light buttonCard"
              as={Link}
              to={`/detalle/${producto.id}`}
            >
              Ver mas
            </Button>
            <Button
              className="bg-rojo3 text-light buttonCard borde-rojo3"
              onClick={() => {
                editarCarrito(producto);
              }}
            >
              Agregar<i className="bi bi-cart-plus-fill"></i>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
