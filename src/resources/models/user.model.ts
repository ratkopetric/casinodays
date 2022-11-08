export class UserModel {
  id: string;
  username: string;
  email: string;
  password: string;

  constructor(init: any = {}) {
    const data = {
      id: '',
      username: '',
      email: '',
      password: '',
      ...init,
    };

    this.id = data.id || data._id;
    this.username = data.username;
    this.email = data.email;
    this.password = data.password;
  }
}
