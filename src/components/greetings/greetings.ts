import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'greetings',
  templateUrl: 'greetings.html'
})
export class GreetingsComponent {
 
  constructor(public navCtrl: NavController) {
    console.log('Hello GreetingsComponent Component');
  }
  goToRates(event){
    this.navCtrl.push('DashboardPage');
  }
}
