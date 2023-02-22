import { Component, Input } from '@angular/core';

//TODO: 
// 1. Animar este componente.

@Component({
  selector: 'app-error-label',
  templateUrl: './error-label.component.html',
  styleUrls: ['./error-label.component.css']
})
export class ErrorLabelComponent {
  @Input() error: string = "";
}
