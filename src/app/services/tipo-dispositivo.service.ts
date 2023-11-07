import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TipoDispositivo } from '../models/tipoDispositivo';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class TipoDispositivoService {
  private url = `${base_url}/tipos-dispositivos`;
  private listaCambio = new Subject<TipoDispositivo[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<TipoDispositivo[]>(this.url);
  }

  insert(dispo: TipoDispositivo) {
    return this.http.post(this.url, dispo);
  }

  setList(listaNueva: TipoDispositivo[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<TipoDispositivo>(`${this.url}/${id}`);
  }

  update(td: TipoDispositivo) {
    return this.http.put(this.url, td);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
