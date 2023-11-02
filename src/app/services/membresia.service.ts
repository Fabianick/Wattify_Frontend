import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Membresia } from '../models/membresia';


const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class MembresiaService {
  private url = `${base_url}/membresias`;  //misma ruta del backend
  private listaCambio = new Subject<Membresia[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Membresia[]>(this.url);
  }
  insert(uni: Membresia) {
    return this.http.post(this.url, uni);
  }
  setList(listaNueva: Membresia[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  //hu3 y hu4
    listId(id: number) {
    return this.http.get<Membresia>(`${this.url}/${id}`);
    }
    update(u: Membresia) {
    return this.http.put(this.url, u);
    }
    delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
    }
    
}

