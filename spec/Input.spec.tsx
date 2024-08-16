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
  
    it('Отображает инпут с меткой', () => {
      render(<Input {...defaultProps} />);
  
      const labelElement = screen.getByText('Test Label');
      const inputElement = screen.getByPlaceholderText('Enter text');
  
      expect(labelElement).toBeInTheDocument();
      expect(inputElement).toBeInTheDocument();
    });
  
    it('Отображает сообщение об ошибке при наличии ошибки', () => {
      const errorProps: InputProps = {
        ...defaultProps,
        error: { message: 'This field is required' } as any,
      };
  
      render(<Input {...errorProps} />);
  
      const errorMessage = screen.getByText('This field is required');
      expect(errorMessage).toBeInTheDocument();
    });
  
    it('Не отображает иконки, если поле не изменено и нет ошибки', () => {
      render(<Input {...defaultProps} />);
  
      const closeIcon = screen.queryByText('CloseIcon');
      const checkIcon = screen.queryByText('CheckIcon');
  
      expect(closeIcon).not.toBeInTheDocument();
      expect(checkIcon).not.toBeInTheDocument();
    });
  
    it('Вызывает register.onChange при изменении значения инпута', () => {
      render(<Input {...defaultProps} />);
  
      const inputElement = screen.getByPlaceholderText('Enter text');
      fireEvent.change(inputElement, { target: { value: 'New value' } });
  
      expect(defaultProps.register.onChange).toHaveBeenCalled();
    });
  });