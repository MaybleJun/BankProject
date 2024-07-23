import { useRef, useState, useCallback } from 'react';

import './Tooltip.scss';
import type { TooltipProps } from './types';

export default function Tooltip({
    children,
    tooltipText,
    tooltipId,
    ...props
}: TooltipProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

    const showTooltip = useCallback(() => {
        if (!containerRef.current) return;

        const { height } = containerRef.current.getBoundingClientRect();
        setTooltipPosition({ top: height, left: 0 });
        setIsTooltipVisible(true);
    }, []);

    const hideTooltip = useCallback(() => {
        setIsTooltipVisible(false);
    }, []);

    return (
        <div
            ref={containerRef}
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
            className="Tooltip__wrapper"
            {...props}
        >
            <div
                className={`Tooltip__text${isTooltipVisible ? ' Tooltip__text--visible' : ''}`}
                id={tooltipId}
                role="tooltip"
                style={tooltipPosition}
            >
                {tooltipText}
            </div>
            {children}
        </div>
    );
}
