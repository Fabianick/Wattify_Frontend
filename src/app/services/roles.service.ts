import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Roles } from '../models/roles';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private url = `${base_url}/roles`;  //misma ruta del backend
  private listaCambio = new Subject<Roles[]>();
  constructor(private http: HttpClient) {}
  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<Roles[]>(this.url,{
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  insert(authority: string, user_id: number) {

    return this.http.post(`${this.url}?authority=${authority}&user_id=${user_id}`, null);
  }
  setList(listaNueva: Roles[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.get<Roles>(`${this.url}/${id}`,{
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  update(authority: string, user_id: number) {
    let token = sessionStorage.getItem('token');
    const body = {
      authority: authority,
      user_id: user_id
    };

    return this.http.put(`${this.url}?authority=${authority}&user_id=${user_id}`, null,{
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
  postrol(){
    return this.http.post(`${this.url}/insrollog`,null);
  }

}
