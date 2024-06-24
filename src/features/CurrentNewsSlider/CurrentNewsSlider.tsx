import React, { useRef } from 'react';
import CurrentNewsCards from './components/CurrentNewsCards';
import btnLeft from '../../assets/left.png';
import btnRight from '../../assets/right.png';
import './CurrentNewsSlider.scss';

export type TNewsCardProps = {
  description: string;
  urlToImage: string;
};

interface CurrentNewsReelProps {
  updateIntervalMinutes?: number;
}

const SCROLL_DISTANCE = 300;

const CurrentNewsSlider: React.FC<CurrentNewsReelProps> = ({ updateIntervalMinutes = 15 }) => {
    const currentCardsSliderRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = (direction: 'left' | 'right') => {
        const scrollValue = direction === 'left' ? -SCROLL_DISTANCE : SCROLL_DISTANCE;
        currentCardsSliderRef.current?.scrollBy({ left: scrollValue, behavior: 'smooth' });
    };

    return (
        <section className="CurrentNewsSlider">
            <CurrentNewsCards
                updateIntervalMinutes={updateIntervalMinutes}
                ref={currentCardsSliderRef}
            />
            <div className="CurrentNewsSlider__wrapperBtn">
                <button
                    className="CurrentNewsSlider__btn"
                    type="button"
                    onClick={() => handleScroll('left')}
                >
                    <img src={btnLeft} alt="Scroll left" width="24" height="24" />
                </button>
                <button
                    className="CurrentNewsSlider__btn"
                    type="button"
                    onClick={() => handleScroll('right')}
                >
                    <img src={btnRight} alt="Scroll right" width="24" height="24" />
                </button>
            </div>
        </section>
    );
};

export default CurrentNewsSlider;
