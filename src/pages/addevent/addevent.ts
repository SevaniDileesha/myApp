
import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProfilePage} from '../profile/profile';
import { LoginPage} from '../login/login';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
/**
 * Generated class for the AddeventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addevent',
  templateUrl: 'addevent.html',
})
export class AddeventPage {
  @ViewChild("EventCode") EventCode;
  @ViewChild("EventName") EventName;
  @ViewChild("Discription") Discription;
  @ViewChild("Date") Date;
  @ViewChild("Time") Time;
  @ViewChild("Venue") Venue;


    constructor(public navCtrl: NavController, public alertCtrl: AlertController,  private http: Http,  public loading: LoadingController) {

    }

  Submit(){
//// check to confirm the username, email, telephone and password fields are filled
if(this.EventCode.value=="" ){
let alert = this.alertCtrl.create({
title:"ATTENTION",
subTitle:"EventCode field is empty",
buttons: ['OK']

});
alert.present();
} else
if(this.EventName.value==""){

let alert = this.alertCtrl.create({
title:"ATTENTION",
subTitle:"EventName field is empty",
buttons: ['OK']

});
alert.present();
} else
if(this.Discription.value==""){

let alert = this.alertCtrl.create({
title:"ATTENTION",
subTitle:"Discription field is empty",
buttons: ['OK']

});

alert.present();
} else
if(this.Date.value==""){

let alert = this.alertCtrl.create({
title:"ATTENTION",
subTitle:"Date field is empty",
buttons: ['OK']

});

alert.present();
}else
if(this.Time.value==""){

let alert = this.alertCtrl.create({
title:"ATTENTION",
subTitle:"Time field is empty",
buttons: ['OK']

});

alert.present();
}else
if(this.Venue.value==""){

let alert = this.alertCtrl.create({
title:"ATTENTION",
subTitle:"Venue field is empty",
buttons: ['OK']

});

alert.present();
}else{

var headers = new Headers();
headers.append("Accept", 'application/json');
headers.append('Content-Type', 'application/json' );
let options = new RequestOptions({ headers: headers });
let data = {

EventCode: this.EventCode.value,
EventName: this.EventName.value,
Discription: this.Discription.value,
Date: this.Date.value,
Time: this.Time.value,
Venue: this.Venue.value

};

let loader = this.loading.create({
content: 'Processing please wait…',

});

loader.present().then(() => {
this.http.post('http://localhost/myApp/addevent.php',data, options)
//this.http.post('https://2f1e6177.ngrok.io/register.php',data,options)
//this.http.post('http://ionicdon.com/mobile/register.php',data, options)


.map(res => res.json())
.subscribe(res => {
loader.dismiss()

if(res==1){
let alert = this.alertCtrl.create({
title:"CONGRATS",
subTitle:("New event add"),
buttons: ['OK']

});

alert.present();
this.navCtrl.push(LoginPage);
}else{

let alert = this.alertCtrl.create({
title:"ERROR",
subTitle:("unsuccess"),
buttons: ['OK']

});
alert.present();

}
});
});
}

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddeventPage');
  }

}
