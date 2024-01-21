import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica = (userid: string, password: string): boolean => {
    var retVal = (userid === 'davide' && password === '123_Gino!!1') ? true : false;

    if (retVal) {
      sessionStorage.setItem("Utente", userid);
    }

    return retVal;
  }

  loggerUser = (): string | null => (sessionStorage.getItem("Utente")) ? sessionStorage.getItem("Utente") : "";

  isLogged = (): boolean => (sessionStorage.getItem("Utente")) ? true : false;


}

