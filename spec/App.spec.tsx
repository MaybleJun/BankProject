import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../src/app/App';

// Мокируем асинхронные компоненты, чтобы избежать настоящей асинхронной загрузки
jest.mock('../src/pages/HomePage/HomePage.async', () => ({
  HomePageAsync: () => <div>Домашняя страница</div>,
}));
jest.mock('../src/pages/LoanPage/LoanPage.async', () => ({
  LoanPageAsync: () => <div>Страница займа</div>,
}));
jest.mock('../src/pages/ScoringPage/ScoringPage.async', () => ({
  ScoringPageAsync: () => <div>Страница оценки</div>,
}));
jest.mock('../src/pages/NotFoundPage/NotFoundPage.async', () => ({
  NotFoundPageAsync: () => <div>Страница не найдена</div>,
}));

// Мокируем синхронные компоненты
jest.mock('../src/pages/CodePage/CodePage', () => () => <div>Страница кода</div>);
jest.mock('../src/pages/PaymentPage/PaymentPage', () => () => <div>Страница оплаты</div>);
jest.mock('../src/pages/DocumentSignPage/DocumentSignPage', () => () => <div>Страница подписания документа</div>);

// Мокируем компоненты Navbar и Footer
jest.mock('../src/widgets/Navbar/Navbar', () => () => <div>Навигационная панель</div>);
jest.mock('../src/widgets/Footer/Footer', () => () => <div>Футер</div>);

describe('Компонент App', () => {
  it('отрисовывает Navbar, Footer и отображает содержимое маршрутов', async () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Проверяем, что Navbar и Footer отрисовываются
    expect(screen.getByText('Навигационная панель')).toBeInTheDocument();
    expect(screen.getByText('Футер')).toBeInTheDocument();

    // Проверяем, что текст fallback отрисовывается изначально
    await waitFor(() => {
      expect(screen.getByText('Домашняя страница')).toBeInTheDocument();
    });
  });
});
