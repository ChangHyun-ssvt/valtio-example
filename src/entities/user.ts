export default class User {
  username: string | null = null;
  password: string | null = null;
  email: string | null = null;
  companyName: string | null = null;
  age: string | null = null;

  isAdult() {
    return Number(this.age) >= 20;
  }

  serialize() {
    return {
      username: this.username,
      password: this.password,
      email: this.email,
      companyName: this.companyName,
      age: Number(this.age),
    };
  }
}

export type UserValueKeys =
  | "username"
  | "password"
  | "email"
  | "companyName"
  | "age";
