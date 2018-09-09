import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {GreetingsComponent} from '../../components/greetings/greetings'

@NgModule({
  declarations: [
    HomePage,
    GreetingsComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage), 
  ],
})
export class HomePageModule {}
