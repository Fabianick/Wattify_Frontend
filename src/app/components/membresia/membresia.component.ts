import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-membresia',
  templateUrl: './membresia.component.html',
  styleUrls: ['./membresia.component.css']
})
export class MembresiaComponent {
  constructor(public route:ActivatedRoute) {}
}
