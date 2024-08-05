import { useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Button } from '../../components/Button/Button';
import { Accordion } from '../../components/Accordion/Accordion';
import { TabContent, Tabs } from '../../components/Tabs/Tabs';
import  PrescoringStatus  from '../../components/PrescoringStatus/PrescoringStatus';
import Tooltip from '../../components/Tooltip/Tooltip';
import CARD_IMG_1 from '../../assets/cardImg1.png';

import './LoanPage.scss';

import {
    ABOUT_CARDS,
    ACCORDION_FIRST,
    ACCORDION_SECOND,
    CASHBACK_OFFERS,
    MAIN_CARD_LIST,
    NAV_TABS,
    RATES_CONDITIONS,
    HOW_TO_STEPS,
} from './data-list';


const LoanPage = () => {


    const mainCardList = MAIN_CARD_LIST.map((item, index) => (
        <Tooltip
            key={index}
            tooltipText={item.tooltip}
            aria-describedby={`mainCardTooltip-${index}`}
            tooltipId={`mainCardTooltip-${index}`}
        >
            <li className="mainCard__item">
                <p className="mainCard__itemTitle">{item.title}</p>
                <p className="mainCard__itemText">{item.text}</p>
            </li>
        </Tooltip>
    ));

    const aboutCard = ABOUT_CARDS.map((card) => (
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
                {RATES_CONDITIONS.map((item) => (
                    <tr className="ratesAndConditions__row" key={item.title}>
                        <td className="ratesAndConditions__title">{item.title}</td>
                        <td className="ratesAndConditions__text">{item.text}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    const cashback = CASHBACK_OFFERS.map((cashback) => (
        <div className="cashback__card contentCard" key={cashback.title}>
            <p className="cashback__title">{cashback.title}</p>
            <p className="cashback__text">{cashback.text}</p>
        </div>
    ));

    const howToGetSteps = HOW_TO_STEPS.map((step, idx) => (
        <li key={idx}>
            <div className="howToSteps__contentIdx">
                <p className="howToSteps__idx">{idx + 1}</p>
            </div>
            <p className="howToSteps__text">{step}</p>
        </li>
    ));

    const formSectionRef = useRef<HTMLDivElement | null>(null);

    const scrollToForm = useCallback((element: HTMLDivElement) => {
        element?.scrollIntoView({
            behavior: 'smooth',
        });
    }, []);

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
                        {mainCardList}
                    </ul>
                    <Button
                        className="Button mainCard__button"
                        onClick={() => formSectionRef.current
                          && scrollToForm(formSectionRef.current)}
                    >
                        Apply for card
                    </Button>
                </div>
                <figure>
                    <img
                        className="mainCard__img"
                        src={CARD_IMG_1}
                        alt="Platinum digital credit card"
                        width={380}
                        height={225}
                    />
                </figure>
            </div>

            <Tabs links={NAV_TABS}>
                <TabContent className="aboutCard">{aboutCard}</TabContent>
                <TabContent className="ratesConditions">{ratesAndConditions}</TabContent>
                <TabContent className="cashback">{cashback}</TabContent>
                <TabContent className="faq">
                    <Accordion
                        contentList={ACCORDION_FIRST}
                        title="Issuing and receiving a card"
                    />
                    <Accordion
                        contentList={ACCORDION_SECOND}
                        title="Using a credit card"
                    />
                </TabContent>
            </Tabs>

            <div className="howToSteps">
                <h2 className="howToSteps__title">How to get a card</h2>
                <ul className="howToSteps__list">{howToGetSteps}</ul>
            </div>

            <PrescoringStatus loanFormRef={formSectionRef} />
            
        </main>
    );
};

export default LoanPage;
