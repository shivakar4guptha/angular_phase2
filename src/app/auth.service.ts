import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  validateUser(){
    if (localStorage.getItem("shiva")!="password"){
      return false;
    }
    else {
      return true;
    }
  }

}
