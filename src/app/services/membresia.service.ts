import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Membresia } from '../models/membresia';
import { Membresia_X_UsersDTO } from '../models/Membresia_X_UsersDTO';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class MembresiaService {
  private url = `${base_url}/membresia`;  //misma ruta del backend
  private listaCambio = new Subject<Membresia[]>();
  constructor(private http: HttpClient) {}
  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<Membresia[]>(this.url,{
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  insert(membre: Membresia) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, membre,{
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  setList(listaNueva: Membresia[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.get<Membresia>(`${this.url}/${id}`,{
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  update(membre: Membresia) {
    let token = sessionStorage.getItem('token');

    return this.http.put(this.url, membre,{
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  delete(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.delete(`${this.url}/${id}`,{
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  getCount():Observable<Membresia_X_UsersDTO[]>{
    let token = sessionStorage.getItem('token');
    return this.http.get<Membresia_X_UsersDTO[]>(`${this.url}/usersXMembresiaXMontoRecaudado`,{
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
    
}

