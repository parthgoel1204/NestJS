export type Role =
  | 'Frontend Developer'
  | 'Backend Developer'
  | 'Full Stack Developer';

export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  role: Role;
}
