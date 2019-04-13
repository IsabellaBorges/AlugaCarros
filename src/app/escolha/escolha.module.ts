import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EscolhaPage } from './escolha.page';
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'menu-example',
  templateUrl: 'escolha.page.html',
  styleUrls: ['./escolha.page.scss'],
})
export class MenuCtrl {

  constructor(private menu: MenuController) { }
  
    openFirst() {
      this.menu.enable(true, 'first');
      this.menu.open('first');
    }
    openEnd() {
      this.menu.open('end');
    }
  
    openCustom() {
      this.menu.enable(true, 'custom');
      this.menu.open('custom');
    }
  }

const routes: Routes = [
  {
    path: '',
    component: EscolhaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EscolhaPage]
})
export class EscolhaPageModule {}

