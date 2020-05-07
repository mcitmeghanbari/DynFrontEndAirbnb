import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() {
  }

  public users = [
    { id: 1, email: 'aaa@google.com', password: '123', fname: 'Mary', lname: 'John' },
    { id: 2, email: 'bbb@google.com', password: '123', fname: 'Tina', lname: 'Terner' }];

  public message = '';
  public user = null;

  isValid() {
    this.getUser();
    return (this.user != null);
  }

  setUser() {
    if (this.user != null)
      localStorage.setItem('Authentication_User', String(this.user.id));
    else
      localStorage.setItem('Authentication_User', null);
  }
  getUser() {
    if (this.user == null) {
      let userId = Number(localStorage.getItem('Authentication_User'));
      this.user = this.findUserById(userId);
    }
  }

  login(email: string, password: string) {
    let user = this.findUser(email);
    if (user != null) {
      if (user.password == password) {
        this.user = user;
      }
      else {
        this.message = 'Pasword does not correct!';
      }
    }
    else {
      this.message = 'User does not signed up!';
    }

    this.setUser();
  }

  signup(email: string, password: string, fname: string, lname: string) {
    let user = this.findUser(email);
    if (user == null) {
      let newId: number = this.users[this.users.length - 1].id + 1;
      this.users.push({ id: newId, email: email, password: password, fname: fname, lname: lname });
      this.user = this.users[this.users.length - 1];
    }
    else {
      this.message = 'User alreday is signed up, try to user another email';
    }

    this.setUser();
  }

  logout() {
    this.user = null;
    this.setUser();
  }

  findUser(email) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email == email) {
        return this.users[i];
      }
    }
    return null;
  }

  findUserById(id) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == id) {
        return this.users[i];
      }
    }
    return null;
  }
}
