import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FuncPage } from '../func/func';
import { MyPage } from '../my/my';
import { NewsPage } from '../news/news';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  home = HomePage;
  func = FuncPage;
  news = NewsPage;
  my = MyPage;

  news_count:string;

  constructor() {
    this.news_count = "4";
  }
}
