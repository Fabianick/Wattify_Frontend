import { Users } from "./users"

export class Membresia{
    id_Membresia: number=0
    tipoMembresia: String=""
    fechaInicio: Date=new Date(Date.now())
    fechaFin: Date=new Date(Date.now())
    precio: number=0.0
    user:Users=new Users()
  }
