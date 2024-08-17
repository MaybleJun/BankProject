import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Sign from '../src/components/Sign/Sign';


const mockStore = configureStore([]);

jest.mock('../src/store/slice/loanSlice', () => ({
  signGeneratedDocuments: jest.fn(),
}));

describe('Sign Component', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      loan: {
        isProcessing: false,
      },
    });
  });

  it('рендерит компонент с начальным состоянием', () => {
    render(
      <Provider store={store}>
        <Router>
          <Sign />
        </Router>
      </Provider>
    );

    expect(screen.getByText('Signing of documents')).toBeInTheDocument();
    expect(screen.getByText('Step 4 of 5')).toBeInTheDocument();
    expect(screen.getByText('Information on your card')).toBeInTheDocument();
    expect(screen.getByLabelText('I agree')).not.toBeChecked();
    expect(screen.getByText('Send')).toBeDisabled();
  });

  it('включает кнопку отправки, когда флажок отмечен', () => {
    render(
      <Provider store={store}>
        <Router>
          <Sign />
        </Router>
      </Provider>
    );

    const checkbox = screen.getByLabelText('I agree');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(screen.getByText('Send')).toBeEnabled();
  });

  it('выключает кнопку отправки, когда флажок снят', () => {
    render(
      <Provider store={store}>
        <Router>
          <Sign />
        </Router>
      </Provider>
    );

    const checkbox = screen.getByLabelText('I agree');
    fireEvent.click(checkbox);
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(screen.getByText('Send')).toBeDisabled();
  });
});
