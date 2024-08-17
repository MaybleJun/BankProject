import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Select } from '../src/components/Select/Select';
import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldError } from 'react-hook-form';

// Создание mock объекта для UseFormRegisterReturn
const mockRegister: UseFormRegisterReturn = {
  name: 'test',
  onChange: jest.fn(),
  onBlur: jest.fn(),
  ref: jest.fn(),
};

describe('Компонент Select', () => {
  it('отрисовывает компонент с меткой и без ошибки', () => {
    render(
      <Select
        register={mockRegister}
        id="test-select"
        label="Тестовая метка"
        options={['Опция 1', 'Опция 2']}
        optionsLabel="метка"
        required={true}
      />
    );

    expect(screen.getByLabelText('Тестовая метка')).toBeInTheDocument();
    expect(screen.getByText('Опция 1 метка')).toBeInTheDocument();
    expect(screen.getByText('Опция 2 метка')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeRequired();
  });

  it('отрисовывает компонент без метки и с ошибкой', () => {
    const mockError: FieldError = {
      type: 'manual',
      message: 'Тестовая ошибка'
    };

    render(
      <Select
        register={mockRegister}
        id="test-select"
        options={['Опция 1', 'Опция 2']}
        error={mockError}
      />
    );

    expect(screen.queryByLabelText('Тестовая метка')).not.toBeInTheDocument();
    expect(screen.getByText('Опция 1')).toBeInTheDocument();
    expect(screen.getByText('Опция 2')).toBeInTheDocument();
    expect(screen.getByText('Тестовая ошибка')).toBeInTheDocument();
  });

  it('применяет класс ошибки, когда ошибка присутствует', () => {
    const mockError: FieldError = {
      type: 'manual',
      message: 'Тестовая ошибка'
    };

    render(
      <Select
        register={mockRegister}
        id="test-select"
        options={['Опция 1', 'Опция 2']}
        error={mockError}
      />
    );

    expect(screen.getByTestId('select-field-container')).toHaveClass('Select__fieldContainer--error');
  });

  it('отрисовывает опции корректно', () => {
    render(
      <Select
        register={mockRegister}
        id="test-select"
        options={[
          'Опция 1',
          'Опция 2',
        ]}
      />
    );

    expect(screen.getByRole('option', { name: 'Опция 1' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Опция 2' })).toBeInTheDocument();
  });
});
