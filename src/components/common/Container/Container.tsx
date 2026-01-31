import { ContainerProps } from "./Container.types";

export function Container({ children, className = "" }: ContainerProps) {
  return <div className={`page-container ${className}`.trim()}>{children}</div>;
}


