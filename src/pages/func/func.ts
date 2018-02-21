import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FuncPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-func',
  templateUrl: 'func.html',
})
export class FuncPage {

  pet:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pet = "office";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FuncPage');
  }

}
