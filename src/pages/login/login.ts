import { Component,ViewChild } from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams } from 'ionic-angular';
import { RegisterPage} from '../register/register';
import { ProfilePage} from '../profile/profile';
import { AddeventPage} from '../addevent/addevent';
import { AdminPage} from '../admin/admin';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild("username") username;
  @ViewChild("password") password;
  data:string;
items:any;

constructor(public navCtrl: NavController, public alertCtrl: AlertController,
private http: Http, public loading: LoadingController) {
}

  //constructor(public navCtrl: NavController, public navParams: NavParams) {
  //}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signUp(){
    this.navCtrl.push(RegisterPage);
    }


    signIn(){

      if(this.username.value=="admin" && this.password.value=="admin"){

        let alert = this.alertCtrl.create({
          title:'Confirm ',
          message:'You are about go add event page,confirm?',

          buttons: [
            {
              text: ' confirm',
              role: 'confirm',
              handler: () => {
                    this.navCtrl.push(AdminPage);
              }
            },
            {
              text: 'stay',
              role:'stay',
              handler: () => {
                  console.log('Stay clicked');
              }
            }
          ]
        });
        alert.present();
      }else{


//// check to confirm the username and password fields are filled
if(this.username.value=="" ){
let alert = this.alertCtrl.create({
title:"ATTENTION",
subTitle:"Username field is empty",
buttons: ['OK']
});
alert.present();

} else
if(this.password.value==""){
let alert = this.alertCtrl.create({
title:"ATTENTION",
subTitle:"Password field is empty",
buttons: ['OK']
});
alert.present();

}else{

var headers = new Headers();
headers.append("Accept", 'application/json');
headers.append('Content-Type', 'application/json' );
let options = new RequestOptions({ headers: headers });
let data = {

username: this.username.value,
password: this.password.value
};

let loader = this.loading.create({
content: 'Processing please wait…',

});


loader.present().then(() => {
//  this.http.post('https://2f1e6177.ngrok.io/login.php',data,options)
this.http.post('http://localhost/myApp/login.php',data,options)
//this.http.post('http://ionicdon.com/mobile/login.php',data,options)


.map(res => res.json())
.subscribe(res => {
console.log(res)
loader.dismiss()

if(res=="Your Login success"){
let alert = this.alertCtrl.create({
title:"CONGRATS",
subTitle:(res),
buttons: ['OK'],

});

alert.present();
this.navCtrl.push(ProfilePage, data);
}else{

let alert = this.alertCtrl.create({
title:"ERROR",
subTitle:"Your Login Username or Password is invalid",
buttons: ['OK']

});

alert.present();
}

});

});

}
}
}
}
