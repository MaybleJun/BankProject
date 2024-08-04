import "./Popup.scss";
import { FC, useEffect } from "react";
import close from "../../assets/Close_square.png";
import useClickOutside from "../../hooks/useClickOutside";
import { Button } from '../../components/Button/Button';
import { ModalBackground } from "../ModalBackground/ModalBackground";
import Portal from "../Portal/Portal";

interface IPopupProps {
    title: string;
    message: string;
    onClose: () => void;
    isOpened: boolean;
}

export const Popup: FC<IPopupProps> = ({ title, message, onClose, isOpened }) => {
    const popupRef = useClickOutside(onClose);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isOpened) {
            timer = setTimeout(() => {
                onClose();
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [isOpened]);

    if (!isOpened) return null;

    return (
        <Portal>
            <ModalBackground>
                <div className="popup" ref={popupRef}>
                    <div className="popup__header">
                        <span>{title}</span>
                        <img src={close} alt="Close" onClick={() => onClose()} />
                    </div>
                    <p className="popup__info">{message}</p>
                    <div className="popup__bottom">
                    <Button
                        className="Button  popup__botton"
                        type="button"
                        onClick={() => onClose()}
                    >
                      Go home
                    </Button>
                    </div>
                </div>
            </ModalBackground>
        </Portal>
    );
};