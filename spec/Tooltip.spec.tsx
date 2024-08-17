import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tooltip from '../src/components/Tooltip/Tooltip';

describe('Tooltip Component', () => {
  it('renders tooltip text on hover', () => {
    render(
      <Tooltip tooltipText="Tooltip text" tooltipId="tooltip-1">
        <button>Hover me</button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    fireEvent.mouseEnter(button);

    expect(screen.getByRole('tooltip')).toHaveTextContent('Tooltip text');
    expect(screen.getByRole('tooltip')).toHaveClass('Tooltip__text--visible');
  });

  it('скрывает текст тултипа, когда не наводишь курсор', async () => {
    render(
      <Tooltip tooltipText="Tooltip text" tooltipId="tooltip-1">
        <button>Hover me</button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    fireEvent.mouseEnter(button);

    await waitFor(() => expect(screen.getByRole('tooltip')).toHaveClass('Tooltip__text--visible'));

    fireEvent.mouseLeave(button);

    await waitFor(() => {
      expect(screen.getByRole('tooltip')).not.toHaveClass('Tooltip__text--visible');
    });
  });

  it('устанавливает правильное положение для тултипа', () => {
    render(
      <Tooltip tooltipText="Tooltip text" tooltipId="tooltip-1">
        <button>Hover me</button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    fireEvent.mouseEnter(button);

    const tooltip = screen.getByRole('tooltip');

    expect(tooltip).toHaveStyle('top: 0px'); // Если позиция установлена в 0
    expect(tooltip).toHaveStyle('left: 0px'); // Если позиция установлена в 0
  });
});
