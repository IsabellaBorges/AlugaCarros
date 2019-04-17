import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../modelos/Carro';
import { Acessorio } from './acessorio';

@Component({
  selector: 'app-escolha',
  templateUrl: './escolha.page.html',
  styleUrls: ['./escolha.page.scss'],
})
export class EscolhaPage implements OnInit {
  private carro:Carro
  public Acessorios: Acessorio[];
  constructor(private navCtrl: NavController,
    private activatedRoute: ActivatedRoute) { }
    private precototal:number;

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(params =>{
        this.carro = <Carro>JSON.parse(params["carroSelecionado"]);

        console.log("O carro que chegou na pagina de escolha é: " + this.carro.nome);
      });

      this.precototal=this.carro.preco;
      this.Acessorios = [
        {
          "nome": "Freio ABS",
          "preco": 800
        },
        {
          "nome": "Ar-Condicionado",
          "preco": 1000
        },
        {
          "nome": "MP3 Player",
          "preco": 500
        },
      ];
  }

  voltar(){
    this.navCtrl.back();
  }

  atualizartotal(ativo:boolean, acessorio:Acessorio){

    ativo ? this.precototal += acessorio.preco : this.precototal -= acessorio.preco;


    /*if (ativo) {
      this.precototal+=acessorio.preco;
    }else{
      this.precototal-=acessorio.preco;
    }*/
  }

}
