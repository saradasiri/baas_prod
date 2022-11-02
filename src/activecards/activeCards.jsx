import React, { useState, useEffect } from "react";
import ReactTable from "../../components/reactTable";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "./hideScrollBar.css";
import { LeftArrow, RightArrow } from "../../components/cardsDisplay/arrows";
import "../../components/cardsDisplay/globalstyles.css";
import transactionHistory from "../../data/transactionData";
import usePreventBodyScroll from "../../components/cardsDisplay/usePreventScrollBar";
import { Container, Image } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { BsPlusCircle } from "react-icons/bs";
import "./activeCards.css"

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

const ActiveCards = () => {
  const [data, setData] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [items] = React.useState(transactionHistory);
  const [isData, setIsData] = useState(false);
  const { disableScroll, enableScroll } = usePreventBodyScroll;
  const [selectedKey, setSelectedKey] = useState();

  return (
    <>
      <div className="example" style={{ height: "150vh" }}>        
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <Carousel
            ssr
            partialVisbile
            itemClass="image-item"
            responsive={responsive}
            >
            {items.map(
              ({ id, image, amountBalance, transactions, active }, i) => {
                return (
                  <div key={i}>
                    <Image
                      src={image}
                      width={400}
                      key={i}
                      onClick={() => {
                        setSelectedKey(i);
                        setData(transactions);
                      }}
                      style={{
                        zoom: i === selectedKey ? "1.2" : "",
                       paddingRight:"100px" ,
                        transition: "1s",
                      }}
                    />
                    <div className="dsb-card-icon"><BsPlusCircle/></div>
                    <div
                      style={{
                        display: i === selectedKey ? "block" : "none",
                        fontSize: "10px",
                        borderRadius: "20px",
                      }}
                    >
                      Card : {amountBalance}
                    </div>
                  </div>
                );
              }
            )}
          </Carousel>
        </div>
        <Container fluid style={{ padding: "30px", fontSize: "15px" }}>
          <div style={{ marginTop: "50px", width: "100%" }}>
            <h3 style={{ marginBottom: "50px" }}>Transaction History</h3>
            {data ? (
              <>
                <ReactTable data={data} />
              </>
            ) : (
              <div className="transdata" >No data </div>
            )}
          </div>
        </Container>
      </div>
    </>
  );
};
export default ActiveCards;
