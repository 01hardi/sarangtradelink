
export interface SubNavLink {
  name: string;
  path: string;
}

export interface NavLink {
  name: string;
  path: string;
  dropdown?: boolean;
  subLinks?: SubNavLink[];
}
