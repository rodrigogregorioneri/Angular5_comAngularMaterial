import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro/cadastro.service';
import { User } from '../mocks/User';

@Component({
selector: 'cadastro-form',
  templateUrl: './cadastro.component.html',
  styleUrls:[
      './cadastro.component.css'
  ]
})
export class CadastroComponent implements OnInit{
  user: User;

 constructor(
   private cadastroService: CadastroService
 ){}

public ngOnInit(){
  let promise = this.cadastroService.cadastroUsuario(this.user);
  console.log(promise);
}




}