import { MetodoPago } from "./metodo-pago"
import { Users } from "./users"

export class comprobantepago{
  id: number=0
  fechaEmision: Date=new Date(Date.now())
  id_metodopago: MetodoPago = new MetodoPago()
  costo_total: number=0.0
  id_Usuario: Users = new Users()
}
