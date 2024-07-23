import './Loader.scss';
import type { LoaderProps } from './types';

export function Loader({
    width = '70px', height = '70px', spinnerColor = '#b4387a', spinnerDuration = '1s', className,
}: LoaderProps) {
    const style = {
        width,
        height,
    };

    return (
        <div style={style} className={`Loader ${className || ''}`}>
            <svg viewBox="0 0 70 70" width={70} height={70}>
                <circle
                    cx="35"
                    cy="35"
                    fill="none"
                    r="33"
                    strokeWidth="2"
                    stroke="#808080"
                />
                <circle
                    className="Loader__spinner"
                    cx="35"
                    cy="35"
                    fill="none"
                    r="33"
                    strokeWidth="2"
                    stroke={spinnerColor}
                    strokeLinecap="round"
                    strokeDasharray="75 200"
                    style={{ animationDuration: spinnerDuration }}
                />
            </svg>
        </div>
    );
}
