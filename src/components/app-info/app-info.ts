import { Component } from '@angular/core';

/**
 * Generated class for the AppInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-info',
  templateUrl: 'app-info.html'
})
export class AppInfoComponent {

  text: string;

  constructor() {
    console.log('Hello AppInfoComponent Component');
    this.text = 'Hello World';
  }

}
