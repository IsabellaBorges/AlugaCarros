import { Component, OnInit } from '@angular/core';
import { Carro } from '../modelos/Carro';
import { ActivatedRoute } from '@angular/router';
import { AgendamentosService } from '../providers/agendamentos.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  private carro: Carro;
  private precoTotal: number;

  private nome:string = '';
  private endereco:string = '';
  private email:string = '';
  private data: string = new Date().toISOString();

  constructor(private activatedRoute: ActivatedRoute,
    private agendamento:AgendamentosService) { }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(params => {
        this.carro = <Carro>JSON.parse(params["carroSelecionado"]);
        this.precoTotal = params["precoTotal"];
      });
  }

  agenda(){
    console.log(this.nome);
    console.log(this.endereco);
    console.log(this.email);
    console.log(this.data);

    let agendamento = {
      nomeCliente:     this.nome,
      enderecoCliente: this.endereco,
      emailCliente:    this.email,
      modeloCarro:     this.carro.nome,
      precoTotal:      this.precoTotal
    };
    this.agendamento.agenda(agendamento)
    .subscribe(
      () => alert('Agendado'),
      () => alert('Erro')

    );
  }

}
