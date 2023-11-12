import { MetodoPago } from "./metodo-pago"
import { Users } from "./users"

export class comprobantepago{
  id: number=0
  fechaEmision: Date=new Date(Date.now())
  metodo_de_pago: MetodoPago = new MetodoPago()
  costo_total: number=0.0
  user: Users = new Users()
}
