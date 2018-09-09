import { NgModule } from '@angular/core';
import { AppInfoComponent } from './app-info/app-info';
import { GreetingsComponent } from './greetings/greetings';

import { RatesListComponent } from './rates-list/rates-list';

@NgModule({
	declarations: [AppInfoComponent,
    GreetingsComponent,
    RatesListComponent],
	imports: [],
	exports: [AppInfoComponent,
    GreetingsComponent,
    RatesListComponent]
})
export class ComponentsModule {}
