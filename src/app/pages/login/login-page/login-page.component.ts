import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { 

    const body = Array.from(document.getElementsByTagName('body'));
      body.forEach((element) => {
      element.classList.remove('theme-red');
      element.classList.add('login-page');
    });
  }

  ngOnInit(): void {
  }

}
