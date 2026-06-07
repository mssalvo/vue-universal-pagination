
export interface PaginationProps {
  modelValue?: number;
  totalPage: number;
  pageRange?: number;
  showPrevious?: boolean;
  showNext?: boolean;
  showFirstEllipsis?: boolean;
  showLastEllipsis?: boolean;
  ellipsisText?: string;
  prevText?: string;
  nextText?: string;
  ulClass?: string;
  hidePrevious?: boolean;
  hideNext?: boolean;
  variant?: "default" | "minimal" | "dark" | "rounded";
  position?: "left" | "center" | "right";
}
