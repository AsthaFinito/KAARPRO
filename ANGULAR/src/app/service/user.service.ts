import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
  

  url: string = 'http://localhost:3000/login';

  constructor(private http: HttpClient) {}

  login(user: User): Observable<void>  {
    console.log("dans le user service"+user.login+" "+user.password)
    return this.http.post<void>('http://localhost:3000/login', user, { withCredentials: true });
  }

  logout():Observable<void> {
    return this.http.post<void>('http://localhost:3000/logout', {}, { withCredentials: true });
  }
  
  isConnected(): Observable<void> {
    return this.http.get<void>('http://localhost:3000/isConnected', { withCredentials: true });
  }
  signIn2(NouvelleUtilisateur: User): Observable<void> {
    console.log(NouvelleUtilisateur.login)
    return this.http.post<void>('http://localhost:3000/signIn',NouvelleUtilisateur, { withCredentials: true });
  }
  
}
