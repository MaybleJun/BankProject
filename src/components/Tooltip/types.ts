import { HTMLAttributes } from 'react';

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  tooltipText: string;
  tooltipId: string;
}
