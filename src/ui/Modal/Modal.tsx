import "./Modal.scss";
import { FC } from "react";
import close from "../../assets/Close_square.png";
import useClickOutside from "../../hooks/useClickOutside";
import { Button } from '../../components/Button/Button';
import { ModalBackground } from "../ModalBackground/ModalBackground";
import Portal from "../Portal/Portal";

interface IModalProps {
    title: string;
    message: string;
    onClose: () => void;
    onClick: () => void;
    isOpened: boolean;
}

export const Modal: FC<IModalProps> = ({ title, message, onClick, onClose, isOpened }) => {
    const modalRef = useClickOutside(onClose);

    if (!isOpened) return null;

    return (
        <Portal>
            <ModalBackground>
                <div className="modal" ref={modalRef}>
                    <div className="modal__header">
                        <span>{title}</span>
                        <img src={close} alt="Close" onClick={() => onClose()} />
                    </div>
                    <p className="modal__info">{message}</p>
                    <div className="modal__bottom">
                    <Button className="Button Button--deny" type="button" onClick={() => onClick()}>
                        Deny
                    </Button>
                    <Button className="Button Button--cancel" type="button" onClick={() => onClose()}>
                        Cancel
                    </Button>
                    </div>
                </div>
            </ModalBackground>
        </Portal>
    );
};