import { comprobantepago } from "./comprobante-pago"
import { Membresia } from "./membresia"

export class detallepago{
  id: number=0
  cantidad_dispositivo: number=0
  consumo_dispositivo: number=0
  costo_dispositivo: number=0
  sub_total_pago: number=0
  comprobante_pago: comprobantepago = new comprobantepago()
  membresia: Membresia = new Membresia()
}
