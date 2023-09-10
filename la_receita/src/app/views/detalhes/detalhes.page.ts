import { Component, OnInit } from '@angular/core';
import { Receita } from 'src/app/services/pratos/prato';
import { CadastrarService } from 'src/app/services/cadastrar/cadastrar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  public receitas : Receita[] = [];
  index: number = -1;

  constructor( private cadastrarService : CadastrarService,
    private route: ActivatedRoute) { 
    this.receitas = this.cadastrarService.obterTodos();
    this.route.paramMap.subscribe(params => {
      const index = params.get('index');
      console.log('Índice recebido na página de detalhes:', index);
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const indexParam = params.get('index');
      if (indexParam !== null) {
        this.index = +indexParam;
      }
    });
  }

}
