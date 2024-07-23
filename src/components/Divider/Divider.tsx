import React from 'react';
import './Divider.scss';

type DividerProps = {
  styles?: React.CSSProperties;
};

export function Divider({ styles }: DividerProps) {
    return (
        <span className="Divider">
            <span className="Divider__line" style={styles} />
        </span>
    );
}
