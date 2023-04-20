import { Component } from '@angular/core';
import {AuthService} from './services/auth.service'
import { Elemento } from './Elemento';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-demo';
  lista: Elemento[] = [
    {"id": 1, "descripcion": "algo"},

    {"id": 2, "descripcion": "un item"},

    {"id": 3, "descripcion": "otra cosa"}
  ]

  elemento: Elemento = {"id": 3, "descripcion": "otra cosa"}

  constructor(private authService: AuthService,) {}

  setactual(elem:Elemento) {
    this.elemento = elem;
    console.log(elem.descripcion)
  }

  click() {
    
    let loginData = {
      'email': 'algo@algo.com',   //datos del usuario creado en Firebase auth
      'password': 'secreto'
    };

    this.authService
    .login(loginData)
    .then(() => console.log('logueado'))
    .catch((e) => console.log(e.message));    }
  }

