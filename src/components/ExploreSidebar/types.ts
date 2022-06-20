export type Field = {
  label: string;
  name: string;
};

export type ItemProps = {
  title: string;
  name: string;
  type: string;
  fields: Field[];
};

export type Values = {
  [field: string]: boolean | string;
};

export type ExploreSidebarProps = {
  items: ItemProps[];
  initialValues?: Values;
  onFilter: (values: Values) => void;
};

export type WrapperProps = {
  mobileFilterIsOpen?: boolean;
};
