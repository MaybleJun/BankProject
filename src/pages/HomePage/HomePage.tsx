import React from 'react';
import { Button } from '../../components/Button/Button';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import cardImg1 from '../../assets/cardImg1.png';
import cardImg2 from '../../assets/cardImg2.png';
import cardImg3 from '../../assets/cardImg3.png';
import cardImg4 from '../../assets/cardImg4.png';
import imgManLaptop from '../../assets/imgManLaptop.png';
import imgMap from '../../assets/imgMap.png';
import iconEmail from '../../assets/iconEmail.svg';
import iconTelegram from '../../assets/iconTelegram.svg';
import './HomePage.scss';

const HomePage = () => (
    <main className="main">
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

        <section className="section section--flex section--align-center featureSection">
            <figure className="featureSection__imageWrapper">
                <img
                    src={imgManLaptop}
                    alt="A person with a laptop"
                    width="510"
                    height="415"
                />
            </figure>
            <div className="featureSection__description">
                <h2 className="featureSection__title">
                    We Provide Many Features You Can Use
                </h2>
                <p className="featureSection__text">
                    You can explore the features that we provide with fun and have their
                    own functions each feature
                </p>
                <ul className="featureSection__list">
                    <li className="featureSection__item">Powerful online protection</li>
                    <li className="featureSection__item">Cashback without borders</li>
                    <li className="featureSection__item">Personal design</li>
                    <li className="featureSection__item">Work anywhere in the world</li>
                </ul>
            </div>
        </section>

        <CurrencyExchange />

        <section className="section section--flex-column section--align-center offerings">
            <h2 className="offerings__title">
                You can use our services anywhere in the world
            </h2>
            <figcaption className="offerings__caption">
                Withdraw and transfer money online through our application
            </figcaption>
            <img src={imgMap} alt="World map" width="1060" height="538" />
        </section>

        <section className="section section--flex-column section--align-center assistance">
            <h2 className="assistance__title">Support</h2>
            <h3 className="assistance__subtitle">Subscribe Newsletter & get</h3>
            <p className="assistance__updates">Bank News</p>
            <form>
                <div className="assistance__formWrapper">
                    <div className="assistance__inputWrapper">
                        <label htmlFor="email" className="assistance__emailLabel">
                            {/* <img
                                className="assistance__emailIcon"
                                src={iconEmail}
                                alt="Email icon"
                                width="27"
                                height="25"
                            /> */}
                            <input
                                className="assistance__emailInput"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your email"
                                autoComplete="email"
                            />
                        </label>
                    </div>
                    <Button className="Button assistance__submitButton">
                        {/* <img
                            className="assistance__sendImage"
                            src={iconTelegram}
                            alt="Send icon"
                            width="20"
                            height="16"
                        /> */}
                        Subscribe
                    </Button>
                </div>
            </form>

        </section>
    </main>
);

export default HomePage;
