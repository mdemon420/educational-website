import React from 'react';
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


const Header = () => {

    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#courses">Courses</Nav.Link>
                            <Nav.Link href="#blog">Blog</Nav.Link>
                            <Nav.Link href="#Page">Page</Nav.Link>
                            <Navbar.Text>
                                Signed in as: <a href="#login">Mark Otto</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;