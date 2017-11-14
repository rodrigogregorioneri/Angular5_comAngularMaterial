import { Component, OnInit } from '@angular/core';
import { User } from '../mocks/User';
import { CadastroService } from '../cadastro/cadastro.service';
import { HttpClientModule , HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Component({
selector: 'cadastro-form',
  templateUrl: './cadastro.component.html',
  providers: [CadastroService] ,
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
   this.user.login = "t";
   this.user.email = "teste@teste.com";
   this.user.password = 'teste';
   this.user.name = "teste";

   console.log(this.user.login);
  let promise = this.cadastroService.cadastroUsuario(this.user).then((data)=>{ console.log(data)});
 // console.log(promise);
}



}