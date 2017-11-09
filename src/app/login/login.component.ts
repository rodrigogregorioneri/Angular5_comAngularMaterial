import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';



@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: [
      './login.component.css'
  ]

})
export class LoginComponent{

  private route: ActivatedRoute;
  private router: Router;

  gotoHeroes() {
    this.router.navigate(['/cadastro']);
  }
}