import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
function Header() {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">STORETRIX</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <i class="fa-solid fa-cart-shopping"></i>
              </Nav.Link>
              <Nav.Link href="/signup">Sign up</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

export default Header;
