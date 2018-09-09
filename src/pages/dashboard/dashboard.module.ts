import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';
import {RatesListComponent} from '../../components/rates-list/rates-list'

@NgModule({
  declarations: [
    DashboardPage,
    RatesListComponent
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
  ],
})
export class DashboardPageModule {}
