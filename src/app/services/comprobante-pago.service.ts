import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { comprobantepago } from '../models/comprobante-pago';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class ComprobantePagoService {
  private url = `${base_url}/comprobante-pago`;
  private listaCambio = new Subject<comprobantepago[]>();
  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<comprobantepago[]>(this.url);
  }

  insert(compro: comprobantepago) {
    return this.http.post(this.url, compro);
  }

  setList(listaNueva: comprobantepago[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
