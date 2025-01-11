export interface IUser {
  id: string;
  email?: string;
  password?: string;
  username?: string;
  name?: string;
  dob?: Date;
  bio?: string;
  avatar?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
