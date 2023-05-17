import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { Mail } from '../model/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  [x: string]: any;
  

  url: string = 'http://localhost:3000/sent-email';

  constructor(private http: HttpClient) {}

  save(mail: Mail): Observable<void>  {
    //console.log("dans le user service"+user.login+" "+user.password)
    return this.http.post<void>(this.url, mail, { withCredentials: true });
  }
  load(): Observable<Array<Mail>>  {
    //console.log("dans le user service"+user.login+" "+user.password)
    return this.http.get<Array<Mail>>('http://localhost:3000/load-email', { withCredentials: true });
  }
  Delete(mail:Mail): Observable<Mail>  {
    //console.log("dans le user service"+user.login+" "+user.password)
    return this.http.delete<Mail>('http://localhost:3000/delete-email/'+mail._id, { withCredentials: true });
  }

  
  
}