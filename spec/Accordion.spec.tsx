import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Accordion } from '../src/components/Accordion/Accordion';

// Моковые данные для тестов
const mockContentList = [
  { query: 'Question 1', response: 'Answer 1' },
  { query: 'Question 2', response: 'Answer 2' },
];

describe('Accordion Component', () => {
  test('renders title if provided', () => {
    render(<Accordion contentList={mockContentList} title="Accordion Title" />);

    // Проверяем, что заголовок отображается
    expect(screen.getByText('Accordion Title')).toBeInTheDocument();
  });

  test('renders accordion entries correctly', () => {
    render(<Accordion contentList={mockContentList} />);

    // Проверяем, что все вопросы отображаются
    mockContentList.forEach((item) => {
      expect(screen.getByText(item.query)).toBeInTheDocument();
    });
  });

  test('shows response when accordion entry is clicked', () => {
    render(<Accordion contentList={mockContentList} />);

    // Изначально ответы скрыты
    mockContentList.forEach((item) => {
      expect(screen.queryByText(item.response)).not.toBeInTheDocument();
    });

    // Симулируем клики по кнопкам аккордеона
    mockContentList.forEach((item, index) => {
      fireEvent.click(screen.getByText(item.query));
      expect(screen.getByText(item.response)).toBeInTheDocument();
    });
  });

  test('toggles response visibility on button click', () => {
    render(<Accordion contentList={mockContentList} />);

    // Изначально ответы скрыты
    mockContentList.forEach((item) => {
      expect(screen.queryByText(item.response)).not.toBeInTheDocument();
    });

    // Клик по первому вопросу, чтобы показать ответ
    fireEvent.click(screen.getByText('Question 1'));
    expect(screen.getByText('Answer 1')).toBeInTheDocument();

    // Клик по первому вопросу снова, чтобы скрыть ответ
    fireEvent.click(screen.getByText('Question 1'));
    expect(screen.queryByText('Answer 1')).not.toBeInTheDocument();
  });
});
