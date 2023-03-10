import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent {
  @Output() sidenavClose = new EventEmitter();
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
