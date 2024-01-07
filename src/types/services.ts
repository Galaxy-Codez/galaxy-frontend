import { ReactNode } from "react";

export interface Service {
  id: number;
  title: string;
  image: ReactNode;
  link: string;
}
