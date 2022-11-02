const transactionHistory = [
  {
    id: 1,
    programTitle: "JDBC Card Program",
    image: require("../assets/noActiveCard.png"),
    amountBalance: 0,
    active : "true",
    transactions: [
      {
        description: "Fiverr USA",
        date: "14:20 12 Apr",
        amountSpent: "23",
      },
      {
        description: "The Hilton Hotel - Buffet Breakfast ",
        date: "14:20 13 Apr",
        amountSpent: "12.44",
      },
      {
        description: "Grab Car",
        date: "14:20 17 Apr",
        amountSpent: "22345",
      },
      {
        description: "Grab Car",
        date: "14:20 17 Apr",
        amountSpent: "22345",
      },
    ],
  },
  // {
  //   id: 2,
  //   programTitle: "Another Card Program",
  //   image: require("../assets/card-2.png"),
  //   amountBalance: 2553343,
  //   active : "true",
  //   transactions: [
  //     {
  //       description: "Grab Car",
  //       date: "14:20 30 Apr",
  //       amountSpent: "22345",
  //     },
  //     {
  //       description: "Shopping Marina",
  //       date: "14:20 21 May",
  //       amountSpent: "60000",
  //     },
  //     {
  //       description: "Donations",
  //       date: "14:20 28 may",
  //       amountSpent: "60000",
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   programTitle: "Another Card Program",
  //   image: require("../assets/card-2.png"),
  //   amountBalance: 2553343,
  //   active :"true",
  //   transactions: [
  //     {
  //       description: "Grab Car",
  //       date: "14:20 30 Apr",
  //       amountSpent: "22345",
  //     },
  //     {
  //       description: "Shopping Marina",
  //       date: "14:20 21 May",
  //       amountSpent: "60000",
  //     },
  //     {
  //       description: "Donations",
  //       date: "14:20 28 may",
  //       amountSpent: "60000",
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   programTitle: "Another Card Program",
  //   image: require("../assets/card-3.png"),
  //   amountBalance: 2553343,
  //   active : "true",
  //   transactions: [
  //     {
  //       description: "Fiverr USA",
  //       date: "14:20 12 Apr",
  //       amountSpent: "23",
  //     },
  //     {
  //       description: "The Hilton Hotel - Buffet Breakfast ",
  //       date: "14:20 13 Apr",
  //       amountSpent: "12.44",
  //     },
  //     {
  //       description: "Grab Car",
  //       date: "14:20 17 Apr",
  //       amountSpent: "22345",
  //     },
  //     {
  //       description: "Grab Car",
  //       date: "14:20 17 Apr",
  //       amountSpent: "22345",
  //     },
  //   ],
  // },
  // // {
  // //   id: 5,
  // //   programTitle: "Another Card Program",
  // //   image: require("../assets/card-1.png"),
  // //   amountBalance: 2553343,
  // //   transactions: [
  // //     {
  // //       description: "Grab Car",
  // //       date: "14:20 30 Apr",
  // //       amountSpent: "22345",
  // //     },
  // //     {
  // //       description: "Shopping Marina",
  // //       date: "14:20 21 May",
  // //       amountSpent: "60000",
  // //     },
  // //     {
  // //       description: "Donations",
  // //       date: "14:20 28 may",
  // //       amountSpent: "60000",
  // //     },
  // //   ],
  // // },
  // // {
  // //   id: 6,
  // //   programTitle: "Another Card Program",
  // //   image: require("../assets/card-2.png"),
  // //   amountBalance: 2553343,
  // //   transactions: [
  // //     {
  // //       description: "Fiverr USA",
  // //       date: "14:20 12 Apr",
  // //       amountSpent: "23",
  // //     },
  // //     {
  // //       description: "The Hilton Hotel - Buffet Breakfast ",
  // //       date: "14:20 13 Apr",
  // //       amountSpent: "12.44",
  // //     },
  // //     {
  // //       description: "Grab Car",
  // //       date: "14:20 17 Apr",
  // //       amountSpent: "22345",
  // //     },
  // //     {
  // //       description: "Grab Car",
  // //       date: "14:20 17 Apr",
  // //       amountSpent: "22345",
  // //     },
  // //   ],
  // // },
  // // {
  // //   id: 7,
  // //   programTitle: "Another Card Program",
  // //   image: require("../assets/card-1.png"),
  // //   amountBalance: 2553343,
  // //   transactions: [
  // //     {
  // //       description: "Grab Car",
  // //       date: "14:20 30 Apr",
  // //       amountSpent: "22345",
  // //     },
  // //     {
  // //       description: "Shopping Marina",
  // //       date: "14:20 21 May",
  // //       amountSpent: "60000",
  // //     },
  // //     {
  // //       description: "Donations",
  // //       date: "14:20 28 may",
  // //       amountSpent: "60000",
  // //     },
  // //   ],
  // // },
  // // {
  // //   id: 8,
  // //   programTitle: "Another Card Program",
  // //   image: require("../assets/card-3.png"),
  // //   amountBalance: 2553343,
  // //   transactions: [
  // //     {
  // //       description: "Fiverr USA",
  // //       date: "14:20 12 Apr",
  // //       amountSpent: "23",
  // //     },
  // //     {
  // //       description: "The Hilton Hotel - Buffet Breakfast ",
  // //       date: "14:20 13 Apr",
  // //       amountSpent: "12.44",
  // //     },
  // //     {
  // //       description: "Grab Car",
  // //       date: "14:20 17 Apr",
  // //       amountSpent: "22345",
  // //     },
  // //     {
  // //       description: "Grab Car",
  // //       date: "14:20 17 Apr",
  // //       amountSpent: "22345",
  // //     },
  // //   ],
  // // },
];

export default transactionHistory
