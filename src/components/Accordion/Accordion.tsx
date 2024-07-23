import { useState } from 'react';
import ArrowDownBtn from '../../assets/ArrowDown.svg';
import ArrowUpBtn from '../../assets/ArrowUp.svg';
import { Button } from '../../components/Button/Button';

import './Accordion.scss';
import { AccordionItemProperties, AccordionProperties } from './types';

function AccordionEntry({
    query, response, active, trigger,
}: AccordionItemProperties) {
    return (
        <div className="accordion__list">
            <Button className="accordion__btn" onClick={trigger}>
                <p className="accordion__query">{query}</p>
                {active ? <ArrowUpBtn /> : <ArrowDownBtn />}
            </Button>
            {active && <p className="accordion__response">{response}</p>}
        </div>
    );
}

export function Accordion({ contentList, title }: AccordionProperties) {
    const [current, setCurrent] = useState<number | null>(null);

    const modifyActive = (index: number) => {
        setCurrent((current) => (current === index ? null : index));
    };

    return (
        <div className="accordion">
            {title && <h2 className="accordion__title">{title}</h2>}
            {contentList.map(({ query, response }, index) => (
                <AccordionEntry
                    key={`${query}-${index}`}
                    query={query}
                    response={response}
                    active={current === index}
                    trigger={() => modifyActive(index)}
                />
            ))}
        </div>
    );
}
