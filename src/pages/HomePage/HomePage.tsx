import React from 'react';
import { Button } from '../../components/Button/Button';
import cardImg1 from "../../assets/cardImg1.png";
import cardImg2 from "../../assets/cardImg2.png";
import cardImg3 from "../../assets/cardImg3.png";
import cardImg4 from "../../assets/cardImg4.png";
import './HomePage.scss';

const HomePage = () => (
    <main className='main'>
            <section className="section section--flex section--justify-between cardSection">
        <div className="section--flex-column cardSection__description">
          <h1 className="cardSection__title">
            Choose the design you like and apply for card right now
          </h1>
          <Button className="Button cardSection__button">
            Choose the card
          </Button>
        </div>
        <figure className="cardSection__images">
          <img src={cardImg1} alt="Credit card 1" width="250" height="150" />
          <img src={cardImg2} alt="Credit card 2" width="250" height="150" />
          <img src={cardImg3} alt="Credit card 3" width="250" height="150" />
          <img src={cardImg4} alt="Credit card 4" width="250" height="150" />
        </figure>
      </section>
    </main>
);

export default HomePage;
