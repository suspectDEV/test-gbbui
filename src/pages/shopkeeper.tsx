import React from "react";
import { Col, Div, H1, P, Row } from "@grubbe/ui";
import styled from "styled-components";

export const Shopkeeper = () => (
  <Row fullWidth>
    <Col size={2} style={{ overflow: "hidden" }}>
      <ConstImg img="https://shopkeeper.wp-theme.design//wp-content/uploads/barbershop05.jpg?id=2790" />
    </Col>
    <Col size={2} className="center-data">
      <H1 color={"#4D4D4D"} weight="bold">
        How to <br />
        Manscape
      </H1>
      <P color={"gray"}>Small batch Blue Bottle pork belly</P>
      <img
        src="https://shopkeeper.wp-theme.design/wp-content/uploads/brush-img.jpg"
        height={437}
      />
    </Col>
    <Col size={2} className="center-data">
      <H1 color={"#4D4D4D"} weight="bold">
        How to <br />
        Style a Quiff
      </H1>
      <P color={"gray"}>Shabby chic put a bird on it gastropub beard</P>
      <Row>
        <Col size={2} pv={25}>
          <Div align="center">
            <img
              src="https://shopkeeper.wp-theme.design/wp-content/uploads/aesop-bush-350x435.jpg"
              height={200}
              alt=""
            />
            <h3>Product 1</h3>
          </Div>
        </Col>
        <Col size={2} pv={25}>
          <Div align="center">
            <img
              src="https://shopkeeper.wp-theme.design/wp-content/uploads/harry01-920x1140.jpg"
              height={200}
              alt=""
            />
            <h3>Product 2</h3>
          </Div>
        </Col>
        <Col size={2}>
          <Div align="center">
            <img
              src="https://shopkeeper.wp-theme.design/wp-content/uploads/Horn-And-Super-Badger-Bristle-1-768x952.jpg"
              height={200}
              alt=""
            />
            <h3>Product 3</h3>
          </Div>
        </Col>
        <Col size={2}>
          <Div align="center">
            <img
              src="https://shopkeeper.wp-theme.design/wp-content/uploads/chiepten1-920x1140.jpg"
              height={200}
              alt=""
            />
            <h3>Product 4</h3>
          </Div>
        </Col>
      </Row>
    </Col>
    <Col size={2} style={{ overflow: "hidden" }}>
      <ConstImg img="https://shopkeeper.wp-theme.design//wp-content/uploads/barbershop06.jpg?id=2789" />
    </Col>
    <Col size={2}>
      <ConstImg img="https://shopkeeper.wp-theme.design//wp-content/uploads/barbershop07.jpg?id=2788" />
    </Col>
    <Col size={2}>
      <P style={{ textAlign: "justify", lineHeight: 2, padding: "10%" }}>
        <span
          style={{
            color: "#2d406a",
            padding: "0 18px 0 0",
            marginBottom: -40,
            marginTop: -40,
            fontWeight: "900",
            fontSize: 80,
            float: "left",
          }}
        >
          A
        </span>
        skateboard Neutra you probably haven't heard of them. XOXO organic
        freegan, twee iPhone tofu forage Helvetica readymade umami health goth.
        Twee normcore meditation bicycle rights Godard paleo messenger bag
        vinyl, Neutra keytar American Apparel. Flexitarian plaid keffiyeh vegan.
        Try-hard tofu irony Tonx. Umami art party fingerstache, yr street art
        locavore plaid Etsy. Tote bag sustainable food truck ugh Intelligentsia.
        <br />
        <br />
        Helvetica readymade umami health goth. Twee normcore meditation bicycle
        rights Godard paleo messenger bag vinyl, Neutra keytar American Apparel.
        Flexitarian plaid keffiyeh vegan mumblecore something else. Try-hard
        tofu irony Tonx. Umami art party fingerstache, yr street art locavore
        plaid Etsy. Tote bag sustainable food truck ugh Intelligentsia.
      </P>
      <Div align="center">
        <img
          src="https://shopkeeper.wp-theme.design/wp-content/uploads/barbers_emblem.jpg"
          height={100}
          alt=""
        />
      </Div>
    </Col>
  </Row>
);

interface Iimage {
  img: string;
}

const ConstImg = styled.div<Iimage>`
  ${(props) =>
    props.img &&
    `
    background-image: url(${props.img});
  `}
  background-size: cover;
  height: 50rem;
  width: 100%;
  background-position: center;
`;
