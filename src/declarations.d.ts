declare module '*.svg' {
    import React from 'react';
  
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
  }
  
  declare module '*.png' {
    const content: string;
    export default content;
  }
  
  declare module '*.jpg' {
    const content: string;
    export default content;
  }

  declare module '*.pdf' {
    const content: string;
    export default content;
  }