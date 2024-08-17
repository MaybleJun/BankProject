import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Modal } from '../src/ui/Modal/Modal';

jest.mock('../src/hooks/useClickOutside', () => jest.fn((callback) => callback)); // Мокирование useClickOutside

describe('Modal Component', () => {
  const setup = (isOpened = true) => {
    const onClose = jest.fn();
    const onClick = jest.fn();

    render(
      <Modal
        title="Modal Title"
        message="This is a modal message"
        onClose={onClose}
        onClick={onClick}
        isOpened={isOpened}
      />
    );

    return { onClose, onClick };
  };

  it('рендерит содержимое модального окна, когда оно открыто', () => {
    setup();

    expect(screen.getByText('Modal Title')).toBeInTheDocument();
    expect(screen.getByText('This is a modal message')).toBeInTheDocument();
    expect(screen.getByAltText('Close')).toBeInTheDocument();
    expect(screen.getByText('Deny')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  it('не рендерит содержимое модального окна, когда оно закрыто', () => {
    setup(false);

    expect(screen.queryByText('Modal Title')).not.toBeInTheDocument();
    expect(screen.queryByText('This is a modal message')).not.toBeInTheDocument();
  });

  it('вызывает onClick при клике на кнопку Deny', () => {
    const { onClick } = setup();

    fireEvent.click(screen.getByText('Deny'));

    expect(onClick).toHaveBeenCalled();
  });

  it('вызывает onClose при клике на кнопку Cancel', () => {
    const { onClose } = setup();

    fireEvent.click(screen.getByText('Cancel'));

    expect(onClose).toHaveBeenCalled();
  });

  it('вызывает onClose при клике на иконку закрытия', () => {
    const { onClose } = setup();

    fireEvent.click(screen.getByAltText('Close'));

    expect(onClose).toHaveBeenCalled();
  });

  it('вызывает onClose при клике вне модального окна', () => {
    const { onClose } = setup();

    fireEvent.click(document.body);

    expect(onClose).toHaveBeenCalled();
  });
});
