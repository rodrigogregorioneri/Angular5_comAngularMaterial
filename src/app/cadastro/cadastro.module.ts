import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { User } from '../mocks/User';
import { CadastroService } from '../cadastro/cadastro.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        CadastroRoutingModule,
        HttpClientModule
    ],
    providers: [CadastroService] ,
    declarations:[
        CadastroComponent,
    ],
    exports:[
        CadastroComponent,
        CadastroRoutingModule
        
    ]
})
export class CadastroModule {
    user: User;
    constructor(
        
      ){}



}