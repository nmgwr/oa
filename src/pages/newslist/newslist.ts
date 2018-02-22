import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-newslist',
  templateUrl: 'newslist.html',
})
export class NewslistPage {

  newsList:any = [];
  pageIndex=1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // 加载三条未读假数据
    let arr = [];
    for(let i = 0; i < 3; i++){
      arr.push({
        title:"企业OA新闻业开发正在进行中，看看标题能打多少字",
        content:"这块运用了ionic的ion-list组件,增加了些自己的样式",
        createTime:"2018-02-19 15:37:42",
        icon:"assets/imgs/slider1.jpg",
        isRade:"1"//未读1，已读0
      });
    }
    this.newsList = arr;
    this.getNewsList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewslistPage');
  }

  getNewsList(){
    let arr = this.newsList;
    for(let i = 0; i < 15; i++){
      arr.push({
        title:"企业OA新闻业开发正在进行中，看看标题能打多少字",
        content:"这块运用了ionic的ion-list组件,增加了些自己的样式",
        createTime:"2018-02-19 15:37:42",
        icon:"assets/imgs/slider1.jpg",
        isRade:"0"//未读1，已读0
      });
    }
    this.newsList = arr;
  }

  nextPage(infiniteScroll){
    console.log("加载第"+this.pageIndex+"页");
    this.pageIndex++;
    infiniteScroll.complete();
  }

}
