import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController ,NavParams } from 'ionic-angular';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import { ChatPage} from '../chat/chat';
import { HomePage} from '../home/home';
import { AddeventPage} from '../addevent/addevent';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
data:any;
username:any;
items:any;

  constructor(public platform: Platform ,public navCtrl: NavController, public navParams: NavParams,  private http: Http,  public loading: LoadingController, public alertCtrl: AlertController) {
  }
  exitApp(){
  this.navCtrl.push(HomePage);
}

  logout(){//to exit app
      //creating an alert before exiting app
      let alert = this.alertCtrl.create({
        title:'Confirm exit',
        message:'You are about to log out the app?',

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





  chat(){
    this.navCtrl.push(ChatPage);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  ngOnInit(){
    this.username = this.navParams.get('username');

var headers = new Headers();
headers.append("Accept", 'application/json');
headers.append('Content-Type', 'application/json' );
let options = new RequestOptions({ headers: headers });

let data = {
    username: this.username

  };


let loader = this.loading.create({
content: 'Processing please wait...',
});

loader.present().then(() => {
//  this.http.post('https://2f1e6177.ngrok.io/retrieve_data.php',data,options)
this.http.post('http://localhost/myApp/retrieve_data.php',data, options)
//this.http.post('http://edomonitor.com/school-evaluation-api/retrieve_data.php',data, options)

.map(res => res.json())
    .subscribe(res => {

     loader.dismiss()
    this.items=res.server_response;

    console.log(this.items);
    });
    });
     }

    }
