import React from 'react';
import { Container, Col } from 'react-bootstrap';

const Footer = () => {
  const myStyle={
    marginBottom:"1px",
  }
  return (
    <footer className="bg-black text-light p-1 mb-1" style={myStyle}>
      <Container>
          <Col>
            <p className="text-center pt-1">© {new Date().getFullYear()} Design and Developed By Syed Sharif. All Rights Reserved.</p>
          </Col>
       
      </Container>
    </footer>
  );
};

export default Footer;
