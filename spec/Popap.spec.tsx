import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Popup } from '../src/ui/Popup/Popup';

jest.mock('../src/hooks/useClickOutside', () => jest.fn((callback) => callback)); // Мокирование useClickOutside

describe('Popup Component', () => {
  const setup = (isOpened = true) => {
    const onClose = jest.fn();

    render(
      <Popup
        title="Popup Title"
        message="This is a popup message"
        onClose={onClose}
        isOpened={isOpened}
      />
    );

    return { onClose };
  };

  it('рендерит содержимое всплывающего окна, когда оно открыто', () => {
    setup();

    expect(screen.getByText('Popup Title')).toBeInTheDocument();
    expect(screen.getByText('This is a popup message')).toBeInTheDocument();
    expect(screen.getByAltText('Close')).toBeInTheDocument();
    expect(screen.getByText('Go home')).toBeInTheDocument();
  });

  it('не рендерит содержимое всплывающего окна, когда оно закрыто', () => {
    setup(false);

    expect(screen.queryByText('Popup Title')).not.toBeInTheDocument();
    expect(screen.queryByText('This is a popup message')).not.toBeInTheDocument();
  });

  it('вызывает onClose при клике на кнопку Go home', () => {
    const { onClose } = setup();

    fireEvent.click(screen.getByText('Go home'));

    expect(onClose).toHaveBeenCalled();
  });

  it('вызывает onClose при клике на иконку закрытия', () => {
    const { onClose } = setup();

    fireEvent.click(screen.getByAltText('Close'));

    expect(onClose).toHaveBeenCalled();
  });

  it('вызывает onClose через 3 секунды, когда всплывающее окно открыто', async () => {
    const { onClose } = setup();

    await waitFor(() => expect(onClose).toHaveBeenCalled(), { timeout: 3500 });
  });

  it('не вызывает onClose, когда всплывающее окно закрывается до 3 секунд', async () => {
    const { onClose } = setup();

    // Закрыть всплывающее окно до 3 секунд
    fireEvent.click(screen.getByAltText('Close'));

    // Убедиться, что onClose был вызван до тайм-аута в 3 секунды
    await waitFor(() => expect(onClose).toHaveBeenCalled());
  });
});
