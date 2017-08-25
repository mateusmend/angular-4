import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth/';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  mateus: String;
  user: Observable<firebase.User>;
  login = new Login();
  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }
  cadastrarGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  ValidarLogin() {
    this.login.validar();
  }
  cadastrarUsuario() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.login.Login, this.login.Senha).then().catch();
  }
}

export class Login {
  Login: string;
  Senha: string;
  validar() {
    console.log('validação realizada');
  }
}
