// spec/Button.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from '../src/components/Button/Button';

describe('Компонент Button', () => {
    it('отображает правильный текст и класс по умолчанию', () => {
      render(<Button>Нажми меня</Button>);
  
      expect(screen.getByText('Нажми меня')).toBeInTheDocument();
  
      const buttonElement = screen.getByText('Нажми меня');
      expect(buttonElement).toHaveClass('Button');
    });
  
    it('вызывает обработчик onClick при клике', () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Нажми меня</Button>);
  
      fireEvent.click(screen.getByText('Нажми меня'));
  
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  
    it('применяет кастомный класс', () => {
      render(<Button className="custom-class">Нажми меня</Button>);
  
      const buttonElement = screen.getByText('Нажми меня');
      expect(buttonElement).toHaveClass('custom-class');
    });
  
    it('отображается в заблокированном состоянии', () => {
      render(<Button disabled>Нажми меня</Button>);
  
      const buttonElement = screen.getByText('Нажми меня');
      expect(buttonElement).toBeDisabled();
    });
  });
  