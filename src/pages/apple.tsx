import React from "react";
import { Col, Div, H1, H2, H3, P, Row } from "@grubbe/ui";
import styled from "styled-components";

const GRID_PRODUCTS = [
  {
    bg: "https://www.apple.com/v/home/aj/images/promos/apple-fitness-plus-winter/tile_winter__bpktzwl6hsc2_large_2x.jpg",
    icon: "https://www.apple.com/v/home/aj/images/logos/apple-fitness-plus-winter/logo__dcojfwkzna2q_large_2x.png",
    description: "More ways to move. Now with \nTime to Run and Collections.",
  },
  {
    bg: "https://www.apple.com/v/home/aj/images/promos/apple-card-january/tile_apple_card__cwonh0wb00om_large_2x.jpg",
    icon: "https://www.apple.com/v/home/aj/images/logos/apple-card-january/tile_logo_apple_card__ev6ksc3n0p0m_large_2x.png",
    description: "Save 5% on Apple products with a new \nApple Card",
  },
  {
    bg: "https://www.apple.com/v/home/aj/images/promos/arcade-extreme-tennis/tile_arcade__ewkth5cd0wia_large_2x.jpg",
    icon: "https://www.apple.com/v/home/aj/images/logos/arcade/logo__dcojfwkzna2q_large_2x.png",
    description: "Nickelodeon® Extreme Tennis. Play now.",
  },
  {
    bg: "https://www.apple.com/v/home/aj/images/promos/tv-plus-jon-hamm/tile_jon_hamm__dofs2fkb2ueu_large_2x.jpg",
    icon: "https://www.apple.com/v/home/aj/images/logos/tv-plus/logo_light__cfvl40z2nzau_large.png",
    description: "Everyone but Jon Hamm.",
  },
];

export const Apple = () => {
  return (
    <>
      <Row fullWidth>
        <Div
          align="center"
          style={{ width: "100%", backgroundColor: "#F5F5F7" }}
        >
          <P color="salmon">New</P>
          <img
            src="https://www.apple.com/v/home/aj/images/logos/watch-series-7/watch_logo_lte__sd64ksudvayy_large_2x.png"
            height={72}
            alt=""
          />
          <H3 weight="medium">Introducing our largest display yet.</H3>
          <a href="#">Learn more</a>
          <a href="#" style={{ marginLeft: 20 }}>
            Buy
          </a>
          <img
            src="https://www.apple.com/v/home/aj/images/heroes/watch-series-7/hero_watch__f05go333pz2i_large_2x.jpg"
            alt=""
            width={"100%"}
          />
        </Div>
      </Row>
      <Row fullWidth>
        {GRID_PRODUCTS.map((v, i) => (
          <Col size={2} key={"space-" + i}>
            <Space img={v.bg}>
              <div style={{ paddingTop: "2rem" }}>
                <img height={35} src={v.icon} />
                <P weight="medium" style={{ whiteSpace: "pre-line" }}>
                  {/* TODO: Tener en cuenta para los saltos de línea*/}
                  {v.description}
                </P>
                <a href="#">Learn more</a>
                <a href="#" style={{ marginLeft: 15 }}>
                  Try it free
                </a>
              </div>
            </Space>
          </Col>
        ))}
      </Row>
    </>
  );
};

interface Iimg {
  img: string;
}
const Space = styled.div<Iimg>`
  background-size: cover;
  background-position: center;
  width: 100%;
  background-color: #ececee;
  height: 30rem;
  text-align: center;
  ${(props) =>
    props.img &&
    `
    background-image: url(${props.img});
`}
`;
