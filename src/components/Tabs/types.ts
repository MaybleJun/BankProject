export interface TabContentProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export interface TabContainerProps {
    children: React.ReactNode;
    links: string[];
    initialActiveIndex?: number;
  }