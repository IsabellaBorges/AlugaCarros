import { Component, OnInit } from '@angular/core';
import { Carro } from '../modelos/Carro';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { LoadingController, AlertController } from '@ionic/angular';
import { Button } from 'protractor';
import { async } from 'q';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public carros: Carro[];

  constructor (public http:HttpClient,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController){

  }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      message: "Aguarde enquanto os carros são carregados."
    });
    await loading.present();

    this.http.get<Carro[]>('http://localhost:8080/api/carro/listaTodos')   
    .subscribe(
       (carros)=>{
         this.carros=carros;
       },
       async (err: HttpErrorResponse)=>{
          console.log("Erro" + err.status);
          const al = await this.alertCtrl.create({
            header: "Erro",
            message: "Erro ao listar os carros.",
            buttons: [{text: "OK"}]
          });
        await al.present();
       }
    ).add(
      ()=>{
        loading.dismiss();
      }
    )
  }
}
