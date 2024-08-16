import React, { ReactElement, useState } from 'react';
import './Tabs.scss';
import { TabContentProps, TabContainerProps } from './types';
import { Button } from '../../components/Button/Button';

const TabContent: React.FC<TabContentProps> = ({ children, className }) => (
    <div className={className}>{children}</div>
);

const Tabs: React.FC<TabContainerProps> = ({ children, links, initialActiveIndex = 0 }) => {
    const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex);

    const tabContents = React.Children.toArray(children)
        .filter(child => React.isValidElement(child) && child.type === TabContent) as React.ReactElement<TabContentProps>[];

    const validIndex = Math.min(activeIndex, tabContents.length - 1);

    const onTabClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <section className="tabs">
            <nav className="tabs__nav">
                <ul className="tabs__links" role="tablist" aria-orientation="horizontal">
                    {links.map((link, index) => (
                        <li className="tabs__link" key={link}>
                            <Button
                                className={`tabs__button ${activeIndex === index ? 'tabs__button--active' : ''}`}
                                onClick={() => onTabClick(index)}
                            >
                                {link}
                            </Button>
                        </li>
                    ))}
                </ul>
            </nav>
            {tabContents.length > 0 ? tabContents[validIndex] : null}
        </section>
    );
};

export { TabContent, Tabs };
