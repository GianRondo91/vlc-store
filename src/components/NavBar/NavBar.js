import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

function NavBar() {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="">
                <img
                    src="../logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                </Navbar.Brand>
                <Nav className="mx-auto">
                    <Nav.Link href="">Inicio</Nav.Link>
                    <Nav.Link href="">Productos</Nav.Link>
                    <Nav.Link href="">¿Quienes somos?</Nav.Link>
                    <Nav.Link href="">Contacto</Nav.Link>
                </Nav>
                <CartWidget/>
                <ItemListContainer/>
                <Nav.Link className="mx-2" ><a href="#login">Mark Otto</a></Nav.Link>
            </Container>
        </Navbar>
    );
}

export default NavBar;