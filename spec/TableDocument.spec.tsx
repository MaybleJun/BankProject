import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import TableDocument from '../src/components/TableDocument/TableDocument';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

jest.mock('../src/store/slice/loanSlice', () => ({
  fetchPaymentList: jest.fn(),
  generateDocuments: jest.fn(),
  resetLoanState: jest.fn(),
}));

describe('Компонент TableDocument', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      loan: {
        isProcessing: false,
        payments: [
          { number: 1, date: '2024-01-01', totalPayment: 100, interestPayment: 10, debtPayment: 90, remainingDebt: 900 },
          { number: 2, date: '2024-02-01', totalPayment: 100, interestPayment: 10, debtPayment: 90, remainingDebt: 810 },
        ],
      },
    });
  });

  it('рендерит компонент со списком платежей', () => {
    render(
      <Provider store={store}>
        <Router>
          <TableDocument />
        </Router>
      </Provider>
    );

    expect(screen.getByText('Payment Schedule')).toBeInTheDocument();
    expect(screen.getByText('Step 3 of 5')).toBeInTheDocument();
    expect(screen.getByText('Deny')).toBeInTheDocument();
    expect(screen.getByText('Send')).toBeDisabled();
    expect(screen.getByLabelText('I agree with the payment schedule')).toBeInTheDocument();
  });

  it('включает кнопку отправки, когда флажок отмечен', () => {
    render(
      <Provider store={store}>
        <Router>
          <TableDocument />
        </Router>
      </Provider>
    );

    const checkbox = screen.getByLabelText('I agree with the payment schedule');
    fireEvent.click(checkbox);

    expect(screen.getByText('Send')).toBeEnabled();
  });

  it('отключает кнопку отправки, когда флажок снят', () => {
    render(
      <Provider store={store}>
        <Router>
          <TableDocument />
        </Router>
      </Provider>
    );

    const checkbox = screen.getByLabelText('I agree with the payment schedule');
    fireEvent.click(checkbox); // Отметить
    fireEvent.click(checkbox); // Снять отметку

    expect(screen.getByText('Send')).toBeDisabled();
  });
});
