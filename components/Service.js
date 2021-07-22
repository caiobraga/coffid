import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Service = () => {
  const services = [
    { title : "Rastreabilidade", desc : "Com as informações fornecidadas, seu cliente poderá saber o tipo de café que está consuimindo, as condições de colheita, a história e localidade da fazenda, dentre outras informações." },
    { title : "Informações", desc : "Você vai ter os dados sobre quem leu o qr code e se interessou pelo seu café. Onde foi o acesso e quantas pessoas acessaram seu produto." },
    { title : "Marketing", desc : "Os acessos da rastreabilidade geram visitas gratuitas e reconhecimento da sua marca. Gerando grande diferencial" },
    { title : "Big Data", desc : "Cada leitura no QR code e acesso geram dados. Ao cruzar os dados dos clientes com os do café e da localidade, o sistema poderá ao longo do tempo sugerir as melhores opções de venda para seu café performar cada vez melhor" },
    { title : "Segurança", desc : "A rastreabilidade pode fornecer uma camafda estra de segurança. Dados com oo último lugar que seu café passo upodem ser importantes caso o pior aconteça." },
    { title : "Controle", desc : "Descubra mais sobre sua produção e controle o seu faturamento atravéz da plataforma" },
  ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Serviços oferecidos</span></h3>
              <p className="text-muted"> Saiba mais sobre os serviços que fornecemos</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}
export default Service;