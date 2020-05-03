import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  public users = [
    { id: 1, email: 'aaa@google.com', password: 'aaa', fname: 'Mary', lname: 'John' },
    { id: 2, email: 'bbb@google.com', password: 'bbb', fname: 'Tina', lname: 'Terner' }];

  public isValid = false;
  public message = '';

  login(email: string, password: string) {
    let user = this.findUser(email);
    if (user != null) {
      if (user.password == password) {
        this.isValid = true;
      }
      else {
        this.message = 'Pasword does not correct!';
      }
    }
    else {
      this.message = 'User does not signed up!';
    }
  }

  signup(email: string, password: string, fname: string, lname: string) {
    let user = this.findUser(email);
    if (user == null) {
      let newId : number = this.users[this.users.length].id + 1;
      this.users.push({ id: newId, email: email, password: password, fname: fname, lname: lname })
    }
    else{
      this.message = 'User alreday is signed up, try to user another email';
    }
  }

  findUser(email) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email == email) {
        return this.users[i];
      }
    }
    return null;
  }
}
