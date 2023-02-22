import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent {

  @Input() visibility: boolean = false;
  // private _isVisible = false;

  // public get isVisible(): boolean {
  //   return this._isVisible;
  // }

  // public set setIsVisible(visibility: boolean) {
  //   this._isVisible = visibility;
  // }
}
