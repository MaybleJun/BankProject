import shoppingBagIcon from "../../assets/Bag_duotone.png";
import calendarEventIcon from "../../assets/Calendar_duotone.png";
import timeClockIcon from "../../assets/Clock_duotone.png";
import creditCardIcon from "../../assets/Credit card_duotone.png";
import moneyBagIcon from "../../assets/Money_duotone.png";

export const mainCardList = [
  {
    title: "Up to 160 days",
    text: "No percent",
    tooltip: "When repaying the full debt up to 160 days.",
  },
  {
    title: "Up to 600 000 ₽",
    text: "Credit limit",
    tooltip: "Over the limit will accrue percent",
  },
  {
    title: "0 ₽",
    text: "Card service is free",
    tooltip: "Promotion valid until December 31, 2022.",
  },
];

export const navTabs = [
  "About card",
  "Rates and conditions",
  "Cashback",
  "FAQ",
];

export const aboutCards = [
  {
    img: moneyBagIcon,
    title: "Up to 50 000 ₽",
    text: "Cash and transfers without commission and percent",
  },
  {
    img: calendarEventIcon,
    title: "Up to 160 days",
    text: "Without percent on the loan",
  },
  {
    img: timeClockIcon,
    title: "Free delivery",
    text: "We will deliver your card by courier at a convenient place and time for you",
  },
  {
    img: shoppingBagIcon,
    title: "Up to 12 months",
    text: "No percent. For equipment, clothes and other purchases in installments",
  },
  {
    img: creditCardIcon,
    title: "Convenient deposit and withdrawal",
    text: "At any ATM. Top up your credit card for free with cash or transfer from other cards",
  },
];

export const cashbackOffers = [
  {
    title: "For food delivery, cafes and restaurants",
    text: "5%",
  },
  {
    title: "In supermarkets with our subscription",
    text: "5%",
  },
  {
    title: "In clothing stores and children's goods",
    text: "2%",
  },
  {
    title: "Other purchases and payment of services and fines",
    text: "1%",
  },
  {
    title: "Shopping in online stores",
    text: "up to 3%",
  },
  {
    title: "Purchases from our partners",
    text: "30%",
  },
];

export const ratesConditions = [
  {
    title: "Card currency",
    text: "Rubles, dollars, euro",
  },
  {
    title: "Interest free period",
    text: "0% up to 160 days",
  },
  {
    title: "Payment system",
    text: "Mastercard, Visa",
  },
  {
    title: "Maximum credit limit on the card",
    text: "600 000 ₽",
  },
  {
    title: "Replenishment and withdrawal",
    text: "At any ATM. Top up your credit card for free with cash or transfer from other cards",
  },
  {
    title: "Max cashback per month",
    text: "15 000 ₽",
  },
  {
    title: "Transaction Alert",
    text: "60 ₽ — SMS or push notifications\n0 ₽ — card statement, information about transactions in the online bank",
  },
];

export const accordionFirst = [
  {
    query: "How to get a card?",
    response: "We will deliver your card by courier free of charge. Delivery in Moscow and St. Petersburg - 1-2 working days. For other regions of the Russian Federation - 2-5 working days.",
  },
  {
    query: "What documents are needed and how old should one be to get a card?",
    response: "Need a passport. You must be between 20 and 70 years old.",
  },
  {
    query: "In what currency can I issue a card?",
    response: "In rubles, dollars or euro",
  },
  {
    query: "How much income do I need to get a credit card?",
    response: "To obtain a credit card, you will need an income of at least 25,000 rubles per month after taxes.",
  },
  {
    query: "How do I find out about the bank's decision on my application?",
    response: "After registration, you will receive an e-mail with a decision on your application.",
  },
];

export const accordionSecond = [
  {
    query: "What is an interest free credit card?",
    response: "A credit card with a grace period is a bank card with an established credit limit, designed for payment, reservation of goods and services, as well as for receiving cash, which allows you to use credit funds free of charge for a certain period.",
  },
  {
    query: "How to activate a credit card",
    response: "You can activate your credit card and generate a PIN code immediately after receiving the card at a bank branch using a PIN pad.",
  },
  {
    query: "What is a settlement date?",
    response: "The settlement date is the date from which you can pay off the debt for the reporting period. The settlement date falls on the first calendar day following the last day of the reporting period. The first settlement date is reported by the bank when transferring the issued credit card to the client, and then in the monthly account statement.",
  },
  {
    query: "What do I need to know about interest rates?",
    response: "For each reporting period from the 7th day of the previous month to the 6th day of the current month inclusive, a statement is generated for the credit card. The statement contains information on the amount and timing of the minimum payment, as well as the total amount of debt as of the date of issue.",
  },
];
