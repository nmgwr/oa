import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,LoadingController } from 'ionic-angular';
import { NewslistPage } from '../newslist/newslist';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  newslist = NewslistPage;
  newsType = "全部";
  params = {
    newsType:"",
    startTime:"",
    endTime:"",
    newTitle:""
  }
  public newsTypeList = [{
    label:'技术培训',
    value:'1'
  },{
    label:'会议通知',
    value:'2'
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl:AlertController,public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  selectNewsType(){
    let alert = this.alertCtrl.create();
    alert.setTitle("公告类型");
    alert.addInput({
      type:'radio',
      label:'全部',
      value:'',
      checked:true
    });
    for(let i = 0; i < this.newsTypeList.length; i++){
      alert.addInput({
        type:'radio',
        label:this.newsTypeList[i].label,
        value:this.newsTypeList[i].value
      });
    }
    alert.addButton("返回");
    alert.addButton({
      text:'确定',
      handler:data=>{
        let list = this.newsTypeList;
        for(let i = 0; i < list.length; i++){
          if(list[i].value == data){
            this.newsType = list[i].label;
            this.params.newsType = data
            break;
          }
        }
      }
    });
    alert.present();
  }

  queryNotice(){
    if(this.params.startTime.length > 16){
      this.params.startTime = this.params.startTime.replace("T"," ").substr(0,this.params.startTime.length-4);
    }
    if(this.params.endTime.length > 16){
      this.params.endTime = this.params.endTime.replace("T"," ").substr(0,this.params.endTime.length-4);
    }
    console.log(JSON.stringify(this.params));
    let loading = this.loadingCtrl.create({
      content:"请稍等，正在查询..."
    });
    loading.present();
    setTimeout(() => {
      // 结束loading（数据请求完）用以下方法
      loading.dismiss();
    }, 1000);
  }

}
