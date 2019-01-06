import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Headers, Http, RequestOptions} from "@angular/http";
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  data: any;
  search: any;
  items: any;

      constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public loading: LoadingController) {
      }

      ngOnInit() {
    this.search = this.navParams.get('search');

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});

    let data = {
        search: this.search

    };


    let loader = this.loading.create({
        content: 'Processing please wait...',
    });

    loader.present().then(() => {
        this.http.post('http://localhost/myApp/search.php', data, options)
        //this.http.post('http://edomonitor.com/school-evaluation-api/retrieve_data.php',data, options)

            .map(res => res.json())
            .subscribe(res => {
                loader.dismiss()
                this.items = res.server_response;

                console.log(this.items);
            });

    });

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

}
