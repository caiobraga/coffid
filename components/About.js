import React from 'react';
import { Container, Row, Col } from "reactstrap";
const About = () => {
return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">Descubra<span className="text-warning"> COFFID</span></h3>
              <p className="text-muted">COFFID é uma startup em processo de criação. Ela foi consebida no coffethon 2021</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">Nós queremos conectar o produtor e o consumidor</h2>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Nossa missão</h6>
                <p className="text-muted font-weight-light">Nossa missão é servir e ajudar o produtor rural</p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Nossa visão</h6>
                <p className="text-muted font-weight-light">Queremos um mundo com mais transparência e credibilidade, onde o produtor rural e o consumidor estejam a um click de distâcia</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;