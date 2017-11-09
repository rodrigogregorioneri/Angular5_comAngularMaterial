import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro.component';
import { CadastroRoutingModule } from './cadastro-routing.module';

@NgModule({
    declarations:[
        CadastroComponent, CadastroRoutingModule
    ],
    exports:[
        CadastroComponent,
        CadastroRoutingModule
    ]
})
export class ContatoModule{

}