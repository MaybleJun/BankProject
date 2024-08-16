import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label } from '../src/components/Label/Label';

describe('Компонент Label', () => {
  it('отображает текст метки', () => {
    render(<Label htmlFor="test-input">Test Label</Label>);

    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('применяет переданный класс', () => {
    render(<Label className="custom-class">Test Label</Label>);

    expect(screen.getByText('Test Label')).toHaveClass('custom-class');
  });

  it('применяет класс для обязательных полей, если передан required', () => {
    render(<Label required>Test Label</Label>);

    expect(screen.getByText('Test Label')).toHaveClass('Label--required');
  });

  it('не добавляет класс для обязательных полей, если required не передан', () => {
    render(<Label>Test Label</Label>);

    expect(screen.getByText('Test Label')).not.toHaveClass('Label--required');
  });
});

