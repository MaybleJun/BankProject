import { Button } from "../../components/Button/Button";
import cardImg1 from '../../assets/cardImg1.png';

import "./LoanPage.scss";

const LoanPage = () => {
  return (
    <main className="loanPage">
     <section className="wrapperCard mainCard">
    <div className="mainCard__descWrapper">
      <h1 className="mainCard__title">
        Platinum digital credit card
      </h1>
      <div>
        <p className="mainCard__text">Our best credit card. Suitable for everyday spending and shopping.</p>
        <p className="mainCard__text">Cash withdrawals and transfers without commission and interest.</p>
      </div>
      <ul className="mainCard__list">
        {[
          { heading: 'Up to 160 days', desc: 'No percent' },
          { heading: 'Up to 600 000 ₽', desc: 'Credit limit' },
          { heading: '0 ₽', desc: 'Card service is free' }
        ].map((item, index) => (
          <li className="mainCard__item" key={index}>
            <p className="mainCard__itemTitle">{item.heading}</p>
            <p className="mainCard__itemText">{item.desc}</p>
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
  </section>
    </main>
  );
};

export default LoanPage;
