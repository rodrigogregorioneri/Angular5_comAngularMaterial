import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { LoginModule } from './login/login.module';
import 'bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
