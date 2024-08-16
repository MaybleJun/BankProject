import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Accordion } from '../src/components/Accordion/Accordion';

// Моковые данные для тестов
const mockContentList = [
  { query: 'Question 1', response: 'Answer 1' },
  { query: 'Question 2', response: 'Answer 2' },
];

describe('Компонент Accordion', () => {
  it('отображает заголовок, если он предоставлен', () => {
    render(<Accordion contentList={mockContentList} title="Accordion Title" />);

    expect(screen.getByText('Accordion Title')).toBeInTheDocument();
  });

  it('правильно отображает записи аккордеона', () => {
    render(<Accordion contentList={mockContentList} />);

    mockContentList.forEach((item) => {
      expect(screen.getByText(item.query)).toBeInTheDocument();
    });
  });

  it('показывает ответ при клике на запись аккордеона', () => {
    render(<Accordion contentList={mockContentList} />);

    mockContentList.forEach((item) => {
      expect(screen.queryByText(item.response)).not.toBeInTheDocument();
    });

    mockContentList.forEach((item) => {
      fireEvent.click(screen.getByText(item.query));
      expect(screen.getByText(item.response)).toBeInTheDocument();
    });
  });

  it('переключает видимость ответа при клике на кнопку', () => {
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
