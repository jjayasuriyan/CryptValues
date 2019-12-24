import { Component } from '@angular/core';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'rates-list',
  templateUrl: 'rates-list.html'
})
export class RatesListComponent {

  myDate: any = new Date();
  rates=[];
  temp:any
  alertTitle:any;
  alertData:any;
  searchTerm: string = '';
  expand: boolean= false;
 
  constructor(private alertCtrl: AlertController,
    public restProvider: RestProvider) { 
      this.getRates() ;
  }

  getRates() {
    this.temp='';
    this.restProvider.getRates()
    .then(data => {
      this.temp = data;
      for(let data in this.temp.data){
        this.rates.push(this.temp.data[data]);
      }
    });
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: this.alertTitle,
      subTitle: this.alertData,
      buttons: ['Dismiss']
    });
    alert.present();
  }

setFilteredItems(ev:any){
  const val = ev.target.value;
  let filteredRates=[];
  if (val && val.trim() != '') {
        filteredRates = this.rates.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
    this.rates = filteredRates;
  } else{
    this.rates = [];
    this.getRates();
  }
}

expandSearch(ev:any){

    this.expand= true;
  
}
}
