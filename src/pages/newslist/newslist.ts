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
    this.pageIndex = 1;
    // 初始化加载三条未读假数据
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

  // 获取新闻列表
  getNewsList(){
    let arr = this.newsList;
    for(let i = 0; i < 5; i++){
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

  // 下一页 上拉加载
  nextPage(infiniteScroll){
    console.log("加载第"+this.pageIndex+"页" + "目前共有数据" + this.newsList.length + "条");
    if(this.newsList.length > 20){
      console.log("没有更多数据！！");
      infiniteScroll.enable(false);
    }
    this.pageIndex++;
    setTimeout(() => {
      this.getNewsList();
      console.log('上拉加载结束');
      infiniteScroll.complete();
    }, 2000);
    
  }
  // 下拉刷新
  doRefresh(refresher){
    console.log("下拉刷新开始");
    this.constructor();
    setTimeout(() => {
      console.log('下拉属性结束');
      refresher.complete();
    }, 2000);
  }

}
