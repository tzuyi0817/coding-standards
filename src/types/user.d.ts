export interface User {
  id?: string;
  account?: string;
}

export interface LoginPayload {
  account: string;
  password: string;
}
