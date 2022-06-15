export type Dataset = {
  user: User;
};

export type User = {
  id: number;
  name: Name;
  location: Location;
};
export type Name = {
  firstName: string;
  lastName: string;
};
export type Location = {
  city: string;
  state: string;
  address: string;
};
