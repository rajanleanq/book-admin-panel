export interface SidebarItem {
  key:string;
  link: string;
  label: string;
  path?:string;
  inactiveIcon: JSX.Element;
  activeIcon: JSX.Element;
  children?: SidebarItem[];
}