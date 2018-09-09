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
      console.log(this.rates);
  }

  getRates() {
    this.temp='';
    this.restProvider.getRates()
    .then(data => {
      this.temp = data;
      console.log(this.temp);
      for(let data in this.temp.data){
        this.rates.push(this.temp.data[data]);
      }
      console.log(this.rates);
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
  this.getRates();
  const val = ev.target.value;

  if (val && val.trim() != '') {
    this.rates = this.rates.filter((item) => {
      console.log('item',item);
      return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
  }
}

expandSearch(ev:any){

    this.expand= true;
  
}
}
