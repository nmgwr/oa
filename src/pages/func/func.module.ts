import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FuncPage } from './func';

@NgModule({
  declarations: [
    FuncPage,
  ],
  imports: [
    IonicPageModule.forChild(FuncPage),
  ],
})
export class FuncPageModule {}
