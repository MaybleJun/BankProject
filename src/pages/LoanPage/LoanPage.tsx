
import { Button } from "../../components/Button/Button";
import { TabContent, Tabs  } from "../../components/Tabs/Tabs";
import cardImg1 from '../../assets/cardImg1.png';

import "./LoanPage.scss";

import {
  aboutCards,
  accordionFirst,
  accordionSecond,
  cashbackOffers,
  mainCardList,
  navTabs,
  ratesConditions,
} from "./data-list";

const LoanPage = () => {
  
  const aboutCard = aboutCards.map((card) => (
    <article className="aboutCard__card contentCard" key={card.title}>
      <img 
        className="aboutCard__img"
        src={card.img}
        alt=""
        width={40}
        height={40}
      />
      <h2 className="aboutCard__title">{card.title}</h2>
      <p className="aboutCard__text">{card.text}</p>
    </article>
  ));

  const ratesAndConditions = (
    <table>
      <tbody>
       {ratesConditions.map((item) => (
          <tr className="ratesAndConditions__row" key={item.title}>
            <td className="ratesAndConditions__title">{item.title}</td>
            <td className="ratesAndConditions__text">{item.text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const cashback = cashbackOffers.map((cashback) => (
    <div className="cashback__card contentCard" key={cashback.title}>
      <p className="cashback__title">{cashback.title}</p>
      <p className="cashback__text">{cashback.text}</p>
    </div>
  ));




  return (
    <main className="loanPage">
      <div className="wrapperCard mainCard">
       <div className="mainCard__descWrapper">
       <h1 className="mainCard__title">
        Platinum digital credit card
      </h1>
      <div>
        <p className="mainCard__text">Our best credit card. Suitable for everyday spending and shopping.</p>
        <p className="mainCard__text">Cash withdrawals and transfers without commission and interest.</p>
      </div>
      <ul className="mainCard__list">
      {mainCardList.map((item, index) => (
    <li className="mainCard__item" key={index}>
      <p className="mainCard__itemTitle">{item.title}</p>
      <p className="mainCard__itemText">{item.text}</p>
    </li>
      ))}
    </ul>
      <Button className="Button mainCard__button">
        Apply for card
      </Button>
      </div>
      <figure>
       <img
        className="mainCard__img"
        src={cardImg1}
        alt="Platinum digital credit card"
        width={380}
        height={225}
       />
      </figure>
  </div>

  
        <Tabs  links={navTabs}>
        <TabContent  className="aboutCard">{aboutCard}</TabContent>
          <TabContent className="ratesConditions">{ratesAndConditions}</TabContent>
        <TabContent className="cashback">{cashback}</TabContent>
       
      </Tabs> 
    </main>
  );
};

export default LoanPage;
