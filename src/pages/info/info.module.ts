import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoPage } from './info';
import {ComponentsModule} from '../../components/components.module';


@NgModule({
  declarations: [
    InfoPage,
    ComponentsModule
  ],
  imports: [
    IonicPageModule.forChild(InfoPage),
  ],
})
export class InfoPageModule {}
