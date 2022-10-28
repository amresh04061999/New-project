import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
  public subject:Subject<boolean>

  constructor() { 
    this.subject=new Subject()
  }

  isAuth() {
    let isAuthentication = localStorage.getItem('isAuthentication');
    if (isAuthentication) {
      return true
      this.subject.next(true)
    } else {
      return false
    }
  }
}
