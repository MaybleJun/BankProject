// spec/Button.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from '../src/components/Button/Button';

describe('Button Component', () => {
  test('renders with correct text and default class', () => {
    render(<Button>Click Me</Button>);

    // Проверяем, что текст кнопки отображается корректно
    expect(screen.getByText('Click Me')).toBeInTheDocument();

    // Проверяем, что у кнопки есть класс по умолчанию
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toHaveClass('Button');
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    // Симулируем клик по кнопке
    fireEvent.click(screen.getByText('Click Me'));

    // Проверяем, что обработчик клика вызван
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies custom className', () => {
    render(<Button className="custom-class">Click Me</Button>);

    // Проверяем, что у кнопки есть дополнительный класс
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toHaveClass('custom-class');
  });

  test('renders with disabled state', () => {
    render(<Button disabled>Click Me</Button>);

    // Проверяем, что кнопка заблокирована
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toBeDisabled();
  });
});
