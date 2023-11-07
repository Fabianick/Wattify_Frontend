import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Dispositivo } from '../models/dispositivo';
import { HttpClient } from '@angular/common/http';
const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {
  private url=`${base_url}/dispositivo`
  private listacambio=new Subject<Dispositivo[]>();

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<Dispositivo[]>(this.url);				

  }

  insert(dispo:Dispositivo){
    return this.http.post(this.url, dispo);

  }

  setList(listaNueva:Dispositivo[]){
    this.listacambio.next(listaNueva);
  }

  getList(){
    return this.listacambio.asObservable();
  }



}
