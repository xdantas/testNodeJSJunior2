import React from 'react';
import {NavbarBrand, Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../footer/styles.css';

class Footer extends React.Component {
    render() {
        return (
        <Navbar className="justify-content-center blue-gradient-nav">
        <Nav className="justify-content-center" activeKey="/">
            <Nav.Item className="header-nav">
            Felipe Dantas - Contele (Teste)
            </Nav.Item>
        </Nav>
        </Navbar>
        )
    };
}
export default Footer;