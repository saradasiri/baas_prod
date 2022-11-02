import React, { useState } from "react";
import { Navbar, BImg, Row, Col, Button, Container } from "bootstrap-4-react";
import "./paymentPlanetLanding.css";
import { Card, CarouselItem, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { cardsDisplaydata } from "../../data/cardsDisplayData";
import { BiMap } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  BsArrowLeftCircleFill,
  BsTelephone,
  BsArrowRightCircle,
  BsArrowLeftCircle,
} from "react-icons/bs";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "../../activecards/hideScrollBar.css"
import { Jumbotron, Display4, Lead } from "bootstrap-4-react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const PaymentPlanetLanding = () => {
  const navigate = useNavigate();
  const [itemVisibility, setItemVisibilty] = useState(true);

  function onWheel(scrollVisibilityApiType, ev) {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }
    if (ev.deltaY < 0) {
      scrollVisibilityApiType.scrollNext();
    } else if (ev.deltaY > 0) {
      scrollVisibilityApiType.scrollPrev();
    }
  }

  const products1 = cardsDisplaydata
    .filter((item, index) => index >= 4)
    .map((item, idx) => {
      return (
        <Col lg={3} sm={12} className="text-center" style={{ padding: "15px" }}>
          <Card
            id="list"
            style={{
              fontSize: "10px",
              borderRadius: "20px",
              overflowY: "scroll",
            }}
          >
            <div className="card-icon">{item.icon}</div>
            <Card.Body>
              <Card.Title id="title" style={{ fontSize: "15px" }}>
                {item.title}
              </Card.Title>
              <Card.Text id="subtitle">{item.subtitle}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    });

  const products = cardsDisplaydata.map((item, idx) => {
    return (
      <Col className="text-center" style={{ paddingRight: "15px" }}>
        <Card
          style={{
            fontSize: "10px",
            borderRadius: "20px",
            height: "100%",
          }}
        >
          <div className="card-icon">{item.icon}</div>
          <Card.Body>
            <Card.Title id="title" style={{ fontSize: "15px" }}>
              {item.title}
            </Card.Title>
            <Card.Text id="subtitle">{item.subtitle}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <>
      <Container fluid>
        <div className="body">
          <section className="pattern">
            <Row>
              <Col
                style={{
                  justifyContent: "center",
                  display: "flex",
                  paddingTop: "40px",
                }}
              >
                <Card
                  body
                  style={{
                    borderRadius: "40px",
                    width: "80%",
                    background: "#FFFFFF",
                    boxShadow: " 3px 3px 36px rgba(64, 38, 33, 0.05)",
                  }}
                >
                  <Image
                    src={require("../../assets/paymentPlanet/PaymentP.png")}
                    style={{ float: "left", width: "25%" }}
                  />
                  <div>
                    <ul
                      style={{
                        flexDirection: "row",
                        display: "flex",
                        listStyle: "none",
                        float: "right",
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        marginTop: "10px",
                        background: "#FFFFFF",
                        boxShadow: "3px 3px 36px rgba(64, 38, 33, 0.05)",
                      }}
                    >
                      <li style={{ paddingRight: "15px" }}>Payment</li>
                      <li style={{ paddingRight: "15px" }}>Planet</li>
                      <li style={{ paddingRight: "15px" }}>Prepaid</li>
                      <li style={{ paddingRight: "15px" }}>Card</li>
                    </ul>
                  </div>
                </Card>
              </Col>
            </Row>
            <div className="geeks">
              <Row style={{ justifyContent: "space-evenly" }}>
                <Col lg={5} sm={6}>
                  <Row>
                    <h4 style={{ color: "#de2834" }}>
                      Payment Planet Prepaid Card
                    </h4>
                    <h1
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "800",
                        textAlign: "left",
                        fontSize: "40px",
                      }}
                    >
                      The Card that takes You to Different Places
                    </h1>
                  </Row>
                  <Row>
                    <Image
                      src={require("../../assets/paymentPlanet/GooglePlay.png")}
                      width={150}
                      style={{ paddingRight: "15px" }}
                    />
                    <Image
                      src={require("../../assets/paymentPlanet/AppStore.png")}
                      width={150}
                      style={{ paddingLeft: "15px" }}
                    />
                  </Row>
                </Col>

                <Col lg={4} sm={6} className="d-flex">
                  <Image
                    src={require("../../assets/paymentPlanet/girl.jpeg")}
                    style={{
                      overFlow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                      justifyContent: "center",
                      marginTop: "-40px",
                    }}
                    width={400}
                  />
                </Col>
              </Row>
            </div>
            <Row style={{ textAlign: "center", fontWeight: "700" }}>
              <Col lg={6} style={{ flexDirection: "row" }}>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    padding: "20px",
                  }}
                >
                  Go Places with
                  <span
                    style={{
                      color: "#de2834",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    This <a style={{ textDecoration: "underline" }}>Card</a>
                  </span>
                </div>
              </Col>

              <Container fluid>
                <Carousel
                  // containerClass="carousel-container"
                  ssr
                  // partialVisible
                  itemClass="image-item"
                  responsive={responsive}
                  centerMode={true}
                >
                  {cardsDisplaydata.map((item, idx) => {
                    return (
                      <Col
                        // className="text-center"
                        // style={{ marginLeft: idx === 0 ? "50px" : "" }}
                      >
                        <Card
                          style={{
                            fontSize: "10px",
                            borderRadius: "20px",
                            height: "100%",
                          }}
                        >
                          <div className="card-icon">{item.icon}</div>
                          <Card.Body
                            style={{
                              height: "100%",
                              width: "100%",
                              // textAlign: "center",
                            }}
                          >
                            <Card.Title
                              id="title"
                              style={{
                                fontSize: "15px",
                                textAlign: "center",
                                height: "100%",
                              }}
                            >
                              {item.title}
                            </Card.Title>
                            <Card.Text id="subtitle">{item.subtitle}</Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}
                </Carousel>
              </Container>
            </Row>
          </section>
        </div>
        <div className="geeks">
          <Row style={{ justifyContent: "space-between" }}>
            <Col lg={4} sm={12}>
              <Image src={require("../../assets/mobile.jpeg")} width={500} />
            </Col>
            <Col
              lg={4}
              sm={12}
              className="d-flex"
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <Row style={{ flexDirection: "row" }}>
                <Col>
                  <h3 style={{ fontWeight: "bolder" }}>
                    Perfect Card
                    <span
                      style={{
                        color: "#de2834",
                        fontSize: "27px",
                        fontWeight: "bolder",
                      }}
                    >
                      {" "}
                      With{" "}
                      <span
                        style={{
                          textDecoration: "underline",
                          color: "#de2834",
                          fontSize: "27px",
                          fontWeight: "bolder",
                        }}
                      >
                        You
                      </span>
                    </span>
                  </h3>
                  <h7 style={{ lineHeight: "30px" }}>
                    With our card, you can top up your account anywhere
                    ,anytime. It's convenient and easy to use. Plus, there are
                    no credit checks required. So if you're looking for a
                    simple, convenient way to pay for your everyday expenses,
                    Playment Planet card is the way to go
                  </h7>
                  <br />
                  <br />
                  <Button id="sign-up">Sign up</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <Jumbotron
          style={{
            backgroundColor: "#faf4f3",
            borderRadius: "20px",
            flexDirection: "column",
            width: "80%",
            padding: "2rem",
            justifyContent: "space-between",
          }}
          className="container"
        >
          <Row>
            <Col lg={6} sm={12}>
              <Lead>
                <h1 style={{ fontWeight: "800" }}> Coming Soon</h1>
              </Lead>
              <h2 style={{ color: "#de2834", fontWeight: "bolder" }}>
                This 2022
              </h2>
              <p style={{ fontSize: "12px" }}>
                The best debit card rewards programs offer a combination of
                flexibility and simplicity. Look for a program that lets you
                redeem your rewards for cash back , gift cards or merchandise
                and that doesn;t require you to jump through hoops to earn or
                redeem your rewards.
              </p>
            </Col>
            <Col lg={6} sm={12} className="text-center">
              <Image
                src={require("../../assets/card(2).jpeg")}
                width={350}
                style={{ marginTop: "-15px" }}
              />
            </Col>
          </Row>
        </Jumbotron>

        <br />
        <Container fluid style={{ margin: "30px" }}>
          <Row>
            <Col lg={3} sm={6} className="text-center">
              <Image
                src={require("../../assets/paymentPlanet/PaymentP.png")}
                width="85%"
                style={{ paddingBottom: "12px" }}
              />
              <br />
              <span>
                Our Debit Card program makes it easy to get the most out of your
                everyday spending.
              </span>
            </Col>
            <Col lg={2} sm={6}>
              <p style={{ marginLeft: "70px", fontWeight: "bolder" }}>
                Services
              </p>
              <ul style={{ listStyle: "none", marginLeft: "60px" }}>
                <li style={{ padding: "10px" }}>Payment</li>
                <li style={{ padding: "10px" }}>Planet</li>
                <li style={{ padding: "10px" }}>Prepaid</li>
                <li style={{ padding: "10px" }}>Card</li>
              </ul>
            </Col>

            <Col lg={4} sm={12}>
              <p style={{ fontWeight: "bolder" }}>Contact Us</p>

              <ul style={{ listStyle: "none" }}>
                <li>
                  <p style={{ fontSize: "15px" }}>
                    <BsTelephone size={20} /> 3005 UBI Ave 3 Singapore 408861
                  </p>
                </li>
                <li>
                  <p>
                    <AiOutlineMail size={20} style={{ paddingRight: "5px" }} />
                    sales@seven7perfection.com
                  </p>
                </li>
                <li>
                  <p>
                    <BiMap size={20} /> +6582888337
                  </p>
                </li>
              </ul>
            </Col>
            <Col lg={3} sm={6} style={{ flexWrap: "wrap" }}>
              <Image
                src={require("../../assets/paymentPlanet/GooglePlay.png")}
                width={200}
                style={{ borderRadius: "15px", margin: "0.5rem" }}
              />

              <Image
                src={require("../../assets/paymentPlanet/AppStore.png")}
                width={200}
                style={{ borderRadius: "15px", margin: "0.5rem" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default PaymentPlanetLanding;
