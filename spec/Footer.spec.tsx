import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../src/widgets/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Footer Component', () => {
  beforeEach(() => {
    render(
      <Router>
        <Footer />
      </Router>
    );
  });

  it('рендерит логотип Neoflex правильно', () => {
    expect(screen.getByAltText('Neoflex logo')).toBeInTheDocument();
  });

  it('рендерит контактную информацию правильно', () => {
    expect(screen.getByText('+7 (495) 984 25 13')).toBeInTheDocument();
    expect(screen.getByText('info@neoflex.ru')).toBeInTheDocument();
  });

  it('рендерит ссылки в нижнем колонтитуле правильно', () => {
    expect(screen.getByText('About bank')).toBeInTheDocument();
    expect(screen.getByText('Ask a Question')).toBeInTheDocument();
    expect(screen.getByText('Quality of service')).toBeInTheDocument();
    expect(screen.getByText('Requisites')).toBeInTheDocument();
    expect(screen.getByText('Press center')).toBeInTheDocument();
    expect(screen.getByText('Bank career')).toBeInTheDocument();
    expect(screen.getByText('Investors')).toBeInTheDocument();
    expect(screen.getByText('Analytics')).toBeInTheDocument();
    expect(screen.getByText('Business and processes')).toBeInTheDocument();
    expect(screen.getByText('Compliance and business ethics')).toBeInTheDocument();
  });

  it('рендерит текст согласия на использование cookies правильно', () => {
    expect(screen.getByText(/We use cookies to personalize our services/)).toBeInTheDocument();
  });
});
