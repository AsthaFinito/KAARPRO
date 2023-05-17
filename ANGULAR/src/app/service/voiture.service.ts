import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voiture } from '../model/voiture';
@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  private url: string = 'http://localhost:3000/reprogrammation';
  constructor(private http: HttpClient) { }
  getVoiture(): Observable<Array<Voiture>> {
    return this.http.get<Array<Voiture>>(this.url, { withCredentials: true });
  }
  ajoutVoiture(voiture: Voiture): Observable<Voiture> {
    return this.http.post<Voiture>('http://localhost:3000/ajout', voiture, { withCredentials: true });
  }
  updateVoiture(voiture: Voiture): Observable<Voiture> {
    return this.http.put<Voiture>(this.url + voiture._id, voiture, { withCredentials: true });
  }
  removeVoiture(voiture: Voiture): Observable<Voiture> {
    return this.http.delete<Voiture>('http://localhost:3000/delete/'+voiture._id, { withCredentials: true });
  }
}