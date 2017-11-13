import { Injectable } from '@angular/core';
import { User } from '../mocks/User';
//import {  Headers, Response } from '@angular/http';
import {HttpClientModule, HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';



@Injectable()
export class CadastroService{

  private cadastroUrl: string = 'https://parceiroscronapp.cronapp.io/api/security/User';
  private headers: HttpHeaders = new HttpHeaders({'Content-Type':'aplication/json'});


  constructor(private http: HttpClient){
      
  }

  cadastroUsuario(usuario: User): Promise<User> {
       return this.http.post(this.cadastroUrl ,JSON.stringify(usuario),{headers: this.headers})
       .toPromise()
       .then((response: HttpResponse<User>)=>{
           console.log(response);
             return response;
    }).catch(this.handleError);
  }

  private handleError (err: any): Promise<any>{
      console.log("Erro:", err);
      return Promise.reject(err.message || err);
  }

}