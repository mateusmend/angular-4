import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth/';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  mateus: String;
  user: Observable<firebase.User>;
  login = new Login();
  NomeUser: String;
  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
    this.user = afAuth.authState;
    this.user.subscribe( user => {
      this.NomeUser = user.displayName;
    });
  }

  cadastrarGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  public CadastrarLoginEmailPassword(UsuarioNovo: Login) {
    this.afAuth.auth.createUserWithEmailAndPassword(UsuarioNovo.Login, UsuarioNovo.Senha).then(function (response) {
      alert('Cadastrado');
    }).catch(function (response) {
      console.log('Algo ocorreu...' + response);
    });
  }

  public Login(Usuario: Login) {
    this.afAuth.auth.signInWithEmailAndPassword(Usuario.Login, Usuario.Senha).then(function (response) {
      alert('Logado');
    }).catch(function (response) {
      console.log('Algo ocorreu...' + response);
    });
  }
}

class Login {
  Login: string;
  Senha: string;
  validar() {
    console.log('validação realizada');
  }
}
