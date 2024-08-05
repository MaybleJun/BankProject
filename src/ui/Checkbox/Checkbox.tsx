import { FC } from "react";
import "./Checkbox.scss";

interface CheckboxProps {
    labelText: string;
    isChecked: boolean;
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
    additionalProps?: any;
}

export const Checkbox: FC<CheckboxProps> = ({ labelText, isChecked, setIsChecked, additionalProps }) => {
    return (
        <div className="checkbox-wrapper">
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {
                        setIsChecked((prev) => !prev);
                        console.log(`Checkbox changed: ${!isChecked}`);  // Добавлено для отладки
                    }}
                    className={isChecked ? "checkbox-input checked" : "checkbox-input"}
                    {...additionalProps}
                />
                <span className="checkbox-label">{labelText}</span>
            </label>
        </div>
    );
};
