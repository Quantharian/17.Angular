/* eslint-disable @typescript-eslint/consistent-type-definitions */

type Role = 'ADMIN' | 'EDITOR' | 'USER';

export type User = {
  id: string;
  email: string;
  handleName?: string;
  password: string;
  firstName: string;
  lastName: string;
  role?: Role;
};
export type DTOUser = {
  email: string;
  handleName?: string;
  password: string;
  firstName: string;
  lastName: string;
};
