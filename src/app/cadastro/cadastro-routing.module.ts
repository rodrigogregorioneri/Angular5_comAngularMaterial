import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro.component';

const cadastroRoutes: Routes = [
    {
        path: 'cadastro',
        redirectTo: '/cadastro',
        component: CadastroComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(cadastroRoutes)
    ]
})
export class CadastroRoutingModule{

}