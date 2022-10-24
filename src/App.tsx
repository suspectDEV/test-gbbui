import { H5, P } from "@grubbe/ui";
import React from "react";
import styled from "styled-components";
import { Nav } from "./components/header";
import { Apple } from "./pages/apple";
import { Shopkeeper } from "./pages/shopkeeper";

// import { global as gbbUI } from "@grubbe/ui";
// const { GlobalStyle } = gbbUI;

const MENU1 = ["Mac", "iPad", "iPhone", "Watch", "Airpods"];
const MENU2 = [
  "HOME",
  "THE SHOP",
  "THE PORTFOLIO",
  "THE BLOG",
  "THE PAGE BUILDER",
];

const MENU2_2 = [
  "https://www.svgrepo.com/show/13666/heart.svg",
  "https://www.svgrepo.com/show/9072/cart.svg",
  "https://www.svgrepo.com/show/3130/user.svg",
  "https://www.svgrepo.com/show/18282/search.svg",
];
const MENU3 = ["Inicio", "Clientes", "Nosotros", "Contacto", "Ingresar"];

function App() {
  return (
    <>
      <Container>
        {/*
         */}
        {/* <Header className="header1">
          <Nav align="center">
            <Nav.Item>
              <img
                src="https://www.apple.com/ac/globalnav/7/es_CO/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"
                alt="logo-apple"
                className="icon1"
              />
            </Nav.Item>
            {MENU1.map((v, i) => (
              <Nav.Item key={"item-" + i}>
                <a href="#" className="item1">
                  {v}
                </a>
              </Nav.Item>
            ))}
          </Nav>
        </Header>

        <Apple /> */}

        {/* <Header className="header2">
          <Nav align="split">
            <Nav.Section>
              <Nav.Item>
                <img
                  src="https://shopkeeper.wp-theme.design/wp-content/themes/shopkeeper/images/shopkeeper-logo.png"
                  height={50}
                  alt="shopkeeper-logo"
                  className="icon2"
                />
              </Nav.Item>
              {MENU2.map((v, i) => (
                <Nav.Item key={"item-" + i}>
                  <a href="#" className="item2">
                    {v}
                  </a>
                </Nav.Item>
              ))}
            </Nav.Section>
            <Nav.Section>
              {MENU2_2.map((v, i) => (
                <Nav.Item key={"item-" + i}>
                  <img src={v} alt="icon" className="icon-menu" width={15} />
                </Nav.Item>
              ))}
            </Nav.Section>
          </Nav>
        </Header> */}

        {/* <Shopkeeper /> */}

        {/* <Header className="header3">
          <Nav align="end">
            {MENU3.map((v, i) => (
              <Nav.Item key={"item-" + i}>
                <a href="#" className={`item3 ${"d" + i + "d"}`}>
                  {v}
                </a>
              </Nav.Item>
            ))}
          </Nav>
        </Header> */}

        <Header className="header2">
          <Nav align="split">
            <Nav.Section>
              <Nav.Item>
                <img
                  src="https://www.svgrepo.com/show/76443/logo.svg"
                  alt="logo-acme"
                  height={20}
                />
                <H5 weight="bold">Acme</H5>
              </Nav.Item>
            </Nav.Section>
            <Nav.Hamburger>
              {MENU3.map((v, i) => (
                <Nav.Item key={"item-" + i}>
                  <a href="#" className={`item3 ${"d" + i + "d"}`}>
                    {v}
                  </a>
                </Nav.Item>
              ))}
            </Nav.Hamburger>
          </Nav>
        </Header>
      </Container>
    </>
  );
}

const Container = styled.div`
  // -----------------------------------------
  // HEADER 1
  // -----------------------------------------

  .header1 {
    background-color: #323233;
  }

  .icon1 {
    margin: 0 15px;
  }

  .item1 {
    color: #f5f5f7;
    text-decoration: none;
    margin: 15px;

    &:hover {
      color: white;
    }
  }

  // -----------------------------------------
  // HEADER 2
  // -----------------------------------------

  .header2 {
    padding: 20px;
  }

  .item2 {
    color: #4d4d4d;
    font-weight: bold;
    text-decoration: none;
    margin: 15px;

    &:hover {
      color: gray;
    }
  }

  .icon-menu {
    cursor: pointer;
    margin: 0 10px;
  }

  // -----------------------------------------
  // HEADER 3
  // -----------------------------------------

  .item3 {
    color: #4d4d4d;
    text-decoration: none;
    margin: 15px;

    &:hover {
      color: gray;
    }
  }
  .d4d {
    background-color: salmon;
    color: white;
    // padding: 10px;
    height: 40px;
    display:block;
    border-radius: 3px;
  }

  .col {
    background-color: blue;
    color: white;
    border: 1px solid white;
  }

  // -----------------------------------------
  // BODY 1
  // -----------------------------------------
  .center-data {
    text-align: center;
    margin: auto; //TODO: importante para centrar vertical
  }
`;

//TODO: Borrar al terminar
const CuboTest = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 2px;
`;

const Header = styled.header``;

export default App;
