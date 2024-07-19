import "./Label.scss";
import { LabelProps } from "./types";

export function Label({ children, className, htmlFor, required }: LabelProps) {
  const labelClasses = `${className || ""}${required ? " Label--required" : ""}`.trim();

  return (
    <label className={labelClasses} htmlFor={htmlFor}>
      {children}
    </label>
  );
}
