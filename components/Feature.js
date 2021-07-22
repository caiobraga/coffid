import React from 'react';
import { Container, Row, Col } from "reactstrap";

import Image from 'next/image'
const FeatureBox = (props) => {
  return (
    <>
    {
      props.features.map((feature, key) =>
      (feature.id % 2 !== 0) ?
        <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
          <Col md={5} >
            <div>
              <Image src={feature.img} width="250px" height="150px" alt="" className="img-fluid d-block mx-auto"/>
            </div>
          </Col>
            <Col md={{size:6, offset:1}}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <a href={feature.link} className="f-16 text-warning">Obter acesso <span className="right-icon ml-2">&#8594;</span></a>
              </div>
            </Col>
        </Row>
      :
      <Row key={key} className="align-items-center mt-5">
        <Col md={6}>
          <div className="mb-4">
            <div className="my-4">
              <i className="mdi mdi-account-group"></i>
            </div>
            <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
            <p className="text-muted mb-3 f-15">{feature.desc}</p>
            <a href={feature.link} className="f-16 text-warning">Obter acesso <span className="right-icon ml-2">&#8594;</span></a>
          </div>
        </Col>
        <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
          <div>
            <Image src={feature.img} width="250px" height="150px" alt="" className="img-fluid d-block mx-auto"/>
          </div>
        </Col>
      </Row>
      )
    }
    </>
  );
}
const Feature = () => {
const features = [
    {id : 1, img : "/images/coffe1.png", title : "Conectividade", desc : "Nossos produtos de teconologia pretendem rastrear o café e entregar a história da sua fazenda e da sua produção na xícara do consumidor atravéx de um qrcode", link : "https://forms.gle/Podm4UBuRLtYczEb6"},
    {id : 2, img : "/images/coffe2.png", title : "Informação", desc : "Mas também queremos fazer o caminho inverso e mostrar para você qual café está sendo consumido e a onde. Qual produto tem maior aceitação do público e como podemos te ajudar a vender mais e agregar mais valor ao seu produto.", link : "https://forms.gle/Podm4UBuRLtYczEb6"},
    {id : 3, img : "/images/coffe4.png", title : "Confiança", desc : "Cada vez mais os clientes estão ganhando mais consciência dos produtos que consomem. Nossos estudos provam que sua marca tem muito a ganahr com o sistema de rastreabilidade integrado a big data que oferecemos, buscando dar a resposta ideal para aumentar as vendas e a procura pelo seu café", link : "https://forms.gle/Podm4UBuRLtYczEb6"},
  ];
return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Features</span></h3>
              <p className="text-muted">Nossa startup está nas fazes iniciais do projeto, mas já quer ter contato com você produtor para responder uma pergunta: como podemos te ajudar hoje?</p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
}
export default Feature;