export interface User {
  username: string;
  age?: string;
  userDetails?: UserDetails;
}

export interface UserDetails {
  firstName: string;
  lastName: string;
}
