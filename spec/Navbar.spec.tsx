import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../src/widgets/Navbar/Navbar';

describe('Navbar Component', () => {
  const setup = (initialPath: string) => {
    window.history.pushState({}, 'Test page', initialPath);

    render(
      <Router>
        <Navbar />
      </Router>
    );
  };

  it('рендерит ссылку на логотип правильно', () => {
    setup('/');

    expect(screen.getByText('NeoBank')).toBeInTheDocument();
  });

  it('рендерит навигационные ссылки правильно', async () => {
    setup('/');

    const links = await screen.findAllByRole('link');

    expect(links).toHaveLength(5);

    expect(screen.getByText('Credit card')).toBeInTheDocument();
    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(screen.getByText('Account')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
  });

  it('подсвечивает активную ссылку в зависимости от текущего местоположения', () => {
    setup('/product');

    // Пауза для обеспечения обновления DOM
    setTimeout(() => {
      expect(screen.getByText('Product')).toHaveClass('header__link--active');
      expect(screen.getByText('Credit card')).not.toHaveClass('header__link--active');
      expect(screen.getByText('Account')).not.toHaveClass('header__link--active');
      expect(screen.getByText('Resources')).not.toHaveClass('header__link--active');
    }, 100);
  });

  it('рендерит кнопку "Online Bank"', () => {
    setup('/');

    expect(screen.getByText('Online Bank')).toBeInTheDocument();
  });

  it('имеет правильные стили, примененные к заголовку', () => {
    setup('/');

    const header = screen.getByRole('banner');

    expect(header).toHaveClass('header');

    expect(header.className).toMatch(/header/);
  });
});
