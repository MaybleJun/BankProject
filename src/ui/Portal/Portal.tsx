import { FC, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
    children: ReactNode;
}

export const Portal: FC<PortalProps> = ({ children }) => {
    // Create a container element for the portal
    const portalContainer = document.createElement("div");

    useEffect(() => {
        // Append the portal container to the document body on mount
        document.body.appendChild(portalContainer);

        // Clean up: Remove the portal container from the document body on unmount
        return () => {
            document.body.removeChild(portalContainer);
        };
    }, [portalContainer]);

    // Render children into the portal container using createPortal
    return createPortal(children, portalContainer);
};

export default Portal;