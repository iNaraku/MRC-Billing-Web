import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor( private alert: AlertService, private roueter: Router ) { 

    const body = Array.from(document.getElementsByTagName('body'));
      body.forEach((element) => {
      element.classList.remove('theme-red');
      element.classList.add('login-page');
    });
  }

  ngOnInit(): void {
  }

  login() {
    this.roueter.navigate(['home']);
    // this.alert.inputAlert();
    // this.alert.confirm('Seguro que deses ingresar', 'Iniciaras sesion', 'info').then(result => {
    //   console.log(result);
    // });
  }

}
