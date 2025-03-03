import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Login from '../views/Login'
import { Link, NavLink, useNavigate} from 'react-router-dom';
import ModalCarrito from '../views/ModalCarrito';
import Logo_Sham from '../../img/Logo_Sham.png'
import Logo_S from '../../img/Logo_S.png'

const NavBar = ({ usuarioLogueado, setUsuarioLogueado ,carrito,setCarrito,resultado,setResultado, setArregloPedidos}) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("usuarioIniciado");
    setUsuarioLogueado({});
    navigate("/");
  };

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-rojo3 fixed-top">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                src={Logo_Sham}
                alt="sham logo"
                width="60"
                height="40"
                className="d-inline-block align-center"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="bg-rojo3"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    src={Logo_S}
                    alt="sham logo"
                    width="60"
                    height="40"
                    className="d-inline-block aling-center"
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-grow-2 pe-3">
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Producto o categoría"
                      className="me-2"
                      aria-label="search"/>
                    <Button variant="outline-dark">Buscar</Button>
                  </Form>
                  {usuarioLogueado.nombreUsuario ? (
                    <>
                    {usuarioLogueado.perfil === "Administrador" ?(
                      <>
                      <NavLink end
                        to="/administrar"
                        className={"nav-item nav-link d-flex justify-content-center btn border-dark text-dark w-100 my-2"}>
                        Administrar
                      </NavLink>
                      <Button
                        variant={"danger"}
                        className="d-flex align-items-center justify-content-center my-2"
                        onClick={logout}>
                        Cerrar Sesión
                        <i className="bi bi-toggle2-on fs-3 ms-2"></i>
                      </Button>
                      </>
                    ):(
                      <>
                      <div className={"nav-item nav-link align-self-center mt-2"}>
                        <ModalCarrito usuario={usuarioLogueado} carrito={carrito} setCarrito={setCarrito} resultado={resultado} setResultado={setResultado} setArregloPedidos={setArregloPedidos}></ModalCarrito>
                      </div>
                      <NavLink end
                        to="/usuario/pedidos"
                        className={"nav-item nav-link d-flex justify-content-center btn border-dark text-dark w-100 my-2"}>
                        Mis pedidos
                      </NavLink>
                      <Button
                        variant={"danger"}
                        className="d-flex align-items-center justify-content-center"
                        onClick={logout}>
                        Cerrar Sesión
                        <i className="bi bi-toggle2-on fs-3 ms-2"></i>
                      </Button>
                      </>
                    )}
                    </>
                  ) : (
                    <>
                      <NavLink end
                        to="/registro"
                        className={"nav-item nav-link d-flex justify-content-center btn border-dark text-dark w-100 my-2"}>
                        Registrar
                      </NavLink>
                      <div className={"nav-item nav-link d-flex justify-content-center btn border-dark text-dark w-100 my-2"}>
                        <Login setUsuarioLogueado={setUsuarioLogueado}></Login>
                      </div>
                    </>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};


export default NavBar;
