export interface AccordionListItem {
    query: string;
    response: string;
  }

export interface AccordionItemProperties extends AccordionListItem {
    active: boolean;
    trigger: () => void;
  }

export interface AccordionProperties {
    contentList: AccordionListItem[];
    title?: string;
  }
