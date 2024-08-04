import { useEffect, useRef } from "react";

/**
 * Hook that handles clicks outside of a specified element.
 * @param callback Function to call when a click outside occurs.
 * @returns {React.RefObject<HTMLDivElement>} Ref object representing the element to track clicks outside of.
 */
export const useClickOutside = (callback: () => void): React.RefObject<HTMLDivElement> => {
    const outsideClickRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (outsideClickRef.current && event.target instanceof Node && !outsideClickRef.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [callback, outsideClickRef]);

    return outsideClickRef;
};

export default useClickOutside;