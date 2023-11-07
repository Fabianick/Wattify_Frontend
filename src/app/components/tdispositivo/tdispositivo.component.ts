import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tdispositivo',
  templateUrl: './tdispositivo.component.html',
  styleUrls: ['./tdispositivo.component.css']
})
export class TdispositivoComponent {
  constructor(public route:ActivatedRoute){}
}
