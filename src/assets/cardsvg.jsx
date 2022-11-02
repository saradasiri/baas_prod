import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../constants/url";

const SvgCard = () => {
  const [cardNumber, setCardNumber] = useState();
  const [cardType, setCardType] = useState();

  useEffect(() => {
    axios
      .get(`${url}/get_purchasedcard/${localStorage.getItem("userEmail")}`)
      .then((res) => {
        console.log(res.data);
        setCardType(res.data.card_type);
        const num = res.data.jdbCardNumber1.slice(-4)
        setCardNumber(Number(num));
      });
  }, []);

  return <svg
    width="368"
    height=""
    viewBox="0 0 368 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 20C0 8.9543 8.95431 0 20 0H348C359.046 0 368 8.95431 368 20V179C368 190.046 359.046 199 348 199H20C8.9543 199 0 190.046 0 179V20Z"
      fill="#402621"
    />
    <circle opacity="0.85" cx="325.842" cy="35.842" r="11.842" fill="#DC2834" />

    <circle opacity="0.85" cx="343.21" cy="35.842" r="11.842" fill="#F2A636" />

    {/* <text x="100" y="50" font-family="Verdana" font-size="20" fill="white">
      {cardType}
    </text> */}
    <text x="20" y="100" font-family="Verdana" font-size="20" fill="white">
      XXXX XXXX XXXX {cardNumber}
    </text>
    <text x="20" y="140" font-family="Verdana" font-size="15" fill="white">
      Card Holder
    </text>

    <text x="20" y="165" font-family="Verdana" font-size="15" fill="white">
      {localStorage.getItem("userName")}
    </text>
    <text x="300" y="165" font-family="Verdana" font-size="15" fill="white">
      08/25
    </text>

    <path
      d="M56.7314 18.4946H30.8233C26.5061 18.4993 23.0077 21.3778 23.002 24.9299V46.2467C23.0077 49.8115 26.5187 52.7003 30.8513 52.705H37.2946H37.2962H50.288H50.2896H56.7593C61.0766 52.7003 64.575 49.8218 64.5807 46.2696V24.9529C64.575 21.3881 61.064 18.4993 56.7314 18.4946ZM38.594 20.6328H48.9886V29.1854H38.594V20.6328ZM35.9953 50.5668H30.8513C27.9527 50.5643 25.6036 48.6316 25.6006 46.2467V42.0142H35.9953V50.5668ZM48.9886 50.5668H38.594V42.0142H48.9886V50.5668ZM61.982 46.2696C61.9791 48.6419 59.6425 50.5645 56.7593 50.5668H51.5873V42.0142H61.982V46.2696ZM61.982 39.8761H25.6006V24.9299C25.6035 22.5577 27.9401 20.6351 30.8233 20.6328H35.9953V30.2544C35.9953 30.2548 35.9953 30.2552 35.9953 30.2556C35.9958 30.8457 36.5774 31.3239 37.2946 31.3235H37.2962H50.288H50.2896H61.982V39.8761ZM61.982 29.1854H51.5873V20.6328H56.7314C59.63 20.6353 61.979 22.568 61.982 24.9529V29.1854Z"
      fill="#E9E9E9"
    />
  </svg>;
};

export default SvgCard;
