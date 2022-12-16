import { ReactNode } from "react";

export interface Router {
  path: string;
  element: ReactNode;
  name?: string;
}
