import { NgModule } from '@angular/core';
import { RouterModule,RouterLink, Routes } from '@angular/router';


const  appRoutes: Routes = [
       {
        path: '',
        redirectTo:'/login',
        pathMatch: 'full',
       }  
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,
    { enableTracing: true })
   ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{

}