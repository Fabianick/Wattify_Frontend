import { comprobantepago } from "./comprobante-pago"
import { Membresia } from "./membresia"

export class detallepago{
  id: number=0
  Cantidad_dispositivo: number=0
  Consumo_dispositivo: number=0
  Costo_dispositivo: number=0
  Sub_total_pago: number=0
  comprobante_pago: comprobantepago = new comprobantepago()
  membresia: Membresia = new Membresia()
}
