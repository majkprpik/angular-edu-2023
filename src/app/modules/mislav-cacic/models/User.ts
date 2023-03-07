export interface User {
  username: string;
  age?: number;
  isAuthorized?: boolean;
  userDetails?: UserDetails;
}

export interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
}
