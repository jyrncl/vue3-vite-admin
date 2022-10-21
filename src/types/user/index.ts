export interface LoginUser {
  username: string;
  password: string;
}

export interface RegisteredUser {
  username: string;
  userNum?: string;
  password: string;
  describe?: string;
}
