import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { LoginModule } from './login/login.module';
import { CadastroModule } from './cadastro/cadastro.module';
import 'bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    NoopAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    LoginModule,
    CadastroModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
