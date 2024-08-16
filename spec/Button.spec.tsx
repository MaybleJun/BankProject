// spec/Button.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from '../src/components/Button/Button';

describe('Компонент Button', () => {
    it('отображает правильный текст и класс по умолчанию', () => {
      render(<Button>Нажми меня</Button>);
  
      // Проверяем, что текст кнопки отображается корректно
      expect(screen.getByText('Нажми меня')).toBeInTheDocument();
  
      // Проверяем, что у кнопки есть класс по умолчанию
      const buttonElement = screen.getByText('Нажми меня');
      expect(buttonElement).toHaveClass('Button');
    });
  
    it('вызывает обработчик onClick при клике', () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Нажми меня</Button>);
  
      // Симулируем клик по кнопке
      fireEvent.click(screen.getByText('Нажми меня'));
  
      // Проверяем, что обработчик клика был вызван
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  
    it('применяет кастомный класс', () => {
      render(<Button className="custom-class">Нажми меня</Button>);
  
      // Проверяем, что у кнопки есть дополнительный класс
      const buttonElement = screen.getByText('Нажми меня');
      expect(buttonElement).toHaveClass('custom-class');
    });
  
    it('отображается в заблокированном состоянии', () => {
      render(<Button disabled>Нажми меня</Button>);
  
      // Проверяем, что кнопка заблокирована
      const buttonElement = screen.getByText('Нажми меня');
      expect(buttonElement).toBeDisabled();
    });
  });
  