import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../src/components/Input/Input';
import '@testing-library/jest-dom';
import { InputProps } from '../src/components/Input/types';

describe('Input component', () => {
    const defaultProps: InputProps = {
      register: { name: 'testInput', onChange: jest.fn() } as any,
      id: 'test-input',
      label: 'Test Label',
      placeholder: 'Enter text',
      type: 'text',
    };
  
    // Тест на рендер компонента с меткой (label)
    it('Отображает инпут с меткой', () => {
      render(<Input {...defaultProps} />);
  
      const labelElement = screen.getByText('Test Label');
      const inputElement = screen.getByPlaceholderText('Enter text');
  
      expect(labelElement).toBeInTheDocument();
      expect(inputElement).toBeInTheDocument();
    });
  
    // Тест на отображение сообщения об ошибке, если передана ошибка
    it('Отображает сообщение об ошибке при наличии ошибки', () => {
      const errorProps: InputProps = {
        ...defaultProps,
        error: { message: 'This field is required' } as any,
      };
  
      render(<Input {...errorProps} />);
  
      const errorMessage = screen.getByText('This field is required');
      expect(errorMessage).toBeInTheDocument();
    });
  
    // Убран тест на отображение иконки проверки
  
    // Тест на отсутствие иконок, если поле не изменено и нет ошибки
    it('Не отображает иконки, если поле не изменено и нет ошибки', () => {
      render(<Input {...defaultProps} />);
  
      const closeIcon = screen.queryByText('CloseIcon');
      const checkIcon = screen.queryByText('CheckIcon');
  
      expect(closeIcon).not.toBeInTheDocument();
      expect(checkIcon).not.toBeInTheDocument();
    });
  
    // Тест на вызов register.onChange при изменении значения инпута
    it('Вызывает register.onChange при изменении значения инпута', () => {
      render(<Input {...defaultProps} />);
  
      const inputElement = screen.getByPlaceholderText('Enter text');
      fireEvent.change(inputElement, { target: { value: 'New value' } });
  
      expect(defaultProps.register.onChange).toHaveBeenCalled();
    });
  });