import { Injectable } from '@angular/core';
import { Receita } from '../pratos/prato';
@Injectable({
  providedIn: 'root'
})

export class CadastrarService {
  public listaDeReceitas : Receita[] = [];

  constructor() {
    let c1 : Receita = new Receita('Pão com mateiga', ['pão', 'manteiga'] ,'Pegue o pão e passe manteiga nele');
    this.listaDeReceitas.push(c1);
   }

   cadastrar(receita : Receita){
    this.listaDeReceitas.push(receita);
   }

   obterTodos() : Receita[]{
    return this.listaDeReceitas;
   }
  }