import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import MyButton from "./Button";
import "./../assets/styles/home.css";

function MyNavbar() {
  return (
    <>
      <Navbar key="xl" expand="md" className="navbar" fixed="top">
        <Container fluid="lg">
          <Navbar.Brand href="/" className="fw-bold">
            Binar Car Rental
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-xl" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-xl"
            aria-labelledby="offcanvasNavbarLabel-expand-xl"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id="offcanvasNavbarLabel-expand-xl"
                className="fw-bold"
              >
                Binar Car Rental
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 second__txt">
                <Nav.Link href="/#services">Our Services</Nav.Link>
                <Nav.Link href="/#whyus">Why Us</Nav.Link>
                <Nav.Link href="/#testimonial">Testimonial</Nav.Link>
                <Nav.Link href="/#faq">FAQ</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <MyButton className="my__btn">Register</MyButton>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
