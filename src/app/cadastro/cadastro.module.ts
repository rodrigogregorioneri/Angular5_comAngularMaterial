import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro.component';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { User } from '../mocks/User';

@NgModule({
    imports: [
        CadastroRoutingModule
    ],
    declarations:[
        CadastroComponent, 
    ],
    exports:[
        CadastroComponent,
        CadastroRoutingModule
    ]
})
export class CadastroModule{

 

}