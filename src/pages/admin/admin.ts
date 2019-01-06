import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController ,NavParams } from 'ionic-angular';
import { AddeventPage} from '../addevent/addevent';
import { EventsPage} from '../events/events';
import { ProfilePage} from '../profile/profile';
import { AlertController } from 'ionic-angular';
import {Http, Headers, RequestOptions}  from "@angular/http";

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  @ViewChild("search") search;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }
  AddEvent(){
        this.navCtrl.push(AddeventPage);
  }

  SearchIn(){
//// check to confirm the username and password fields are filled
        if(this.search.value=="" ){
            let alert = this.alertCtrl.create({
                title:"ATTENTION",
                subTitle:"search field is empty",
                buttons: ['OK']
            });
            alert.present();

        }else{
            let data = {
                    search: this.search.value
                };
            this.navCtrl.push(EventsPage,data);
        }

    }


}
