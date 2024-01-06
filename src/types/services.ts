import { ReactNode } from "react";

export interface Service {
  id: number;
  title: string;
  image: string | ReactNode;
  link: string;
}
