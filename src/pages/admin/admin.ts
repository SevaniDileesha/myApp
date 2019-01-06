
import { ProfilePage} from '../profile/profile';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController,AlertController ,NavParams } from 'ionic-angular';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import { ChatPage} from '../chat/chat';
import { HomePage} from '../home/home';
import { EventsPage} from '../events/events';
import { AddeventPage} from '../addevent/addevent';
import { ProfileeventPage} from '../profileevent/profileevent';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
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
  data:any;
  items:any;

  @ViewChild("search") search;
  @ViewChild("EventCode") EventCode;

    constructor(public platform: Platform ,public navCtrl: NavController, public navParams: NavParams,  private http: Http,  public loading: LoadingController, public alertCtrl: AlertController) {
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

        }else
        if(this.search.value!=this.EventCode ){
            let alert = this.alertCtrl.create({
                title:"ATTENTION",
                subTitle:"search field is not valid",
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
