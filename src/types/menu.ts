export type Menu = {
  id: number;
  title: string;
  desc?: string;
  path?: string;
  url?: string;
  newTab: boolean;
  megamenu?: boolean;
  submenu?: Menu[];
};
