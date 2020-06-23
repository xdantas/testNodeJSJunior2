import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/styles.css';
import {Row, Col, Jumbotron, Container} from 'react-bootstrap';
import Form from './dist/form';

class Header extends React.Component {

    render() {
        return (
            
            <Jumbotron fluid>
                    <div className="divider-gradient-blue-header"></div>
                    <Form />
                    <div className="divider-gradient-blue-footer"></div>
            <Container className="text-center">


            </Container>
            </Jumbotron>
            
        )
    };
}
export default Header;