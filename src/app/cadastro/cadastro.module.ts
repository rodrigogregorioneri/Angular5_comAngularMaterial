import { NgModule, OnInit } from '@angular/core';
import { CadastroComponent } from './cadastro.component';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { User } from '../mocks/User';
import { CadastroService } from '../cadastro/cadastro.service';

@NgModule({
    imports: [
        CadastroRoutingModule,
        CadastroService
    ],
    declarations:[
        CadastroComponent,
    ],
    exports:[
        CadastroComponent,
        CadastroRoutingModule
        
    ]
})
export class CadastroModule implements OnInit{
    user: User;
    constructor(
        private cadastroService: CadastroService
      ){}


      public ngOnInit(){
        let promise = this.cadastroService.cadastroUsuario(this.user).then((data)=>{ console.log(data)});
       // console.log(promise);
      }

}