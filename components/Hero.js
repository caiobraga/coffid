import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image'
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">café</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">Solução de rastreabilidade é na <span className="text-primary font-weight-medium">COFFID</span></h1>
              <p className="text-muted mb-4 pb-2">Nosso objetivo é aproximar produtor de café com o consumidor desse grão que é amado por todos os brasileiros.</p>
              <a href="https://forms.gle/Podm4UBuRLtYczEb6" className="btn btn-warning">
                Quero entrar na lista de espera <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <Image src="/images/codde3.png" width="350px" height="550px" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;