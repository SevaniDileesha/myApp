import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { RegisterPage} from '../register/register';
import { LoginPage} from '../login/login';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import{ CallNumber } from "@ionic-native/call-number";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public platform: Platform ,public navCtrl: NavController, public alertCtrl: AlertController,public loading: LoadingController,private callSve:CallNumber) {
}

  OnGoToLogin(){
    this.navCtrl.push(LoginPage);
    }

  OnGoToRegister(){
    this.navCtrl.push(RegisterPage);
    }
    exitApp(){
  this.platform.exitApp();
}
toBack(){ //to exit app
  //creating an alert before exiting app
  let alert = this.alertCtrl.create({
    title:'Confirm exit',
    message:'You exit the application ?',

    buttons: [
      {
        text: 'Confirm',
        role: ' exitApp()',
        handler: () => {
          this.exitApp();
        }
      },
      {
        text: 'Stay',
        role:'Stay',
        handler: () => {
          console.log('Stay clicked');
        }
      }
    ]
  });
  alert.present();
}


  call(){
  this.callSve.callNumber('0770045315',true).then(()=>{
      console.log('sms worked');
  }).catch((err) =>{
    alert(JSON.stringify(err))
  });
  }


}
