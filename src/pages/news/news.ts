import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl:AlertController) {
    
  }

  /*筛选*/
  query(){
    console.log("查询");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
