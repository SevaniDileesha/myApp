import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { RegisterPage} from '../register/register';
import { LoginPage} from '../login/login';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public platform: Platform ,public navCtrl: NavController, public alertCtrl: AlertController,public loading: LoadingController) {
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
    message:'You are about to exit the application.Confirm ?',

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

}
