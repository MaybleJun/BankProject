import { FC, ReactNode } from "react";
import "./ModalBackground.scss";

interface IModalBackgroundProps {
    children:ReactNode
}
export const ModalBackground:FC<IModalBackgroundProps> = ({children}) => {
    return <div className="modal-back">{children}</div>;
};