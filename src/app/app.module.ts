import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
const config = {
  apiKey: 'AIzaSyC9hsy4nq2c5SFjgZVEbZnQ6BcS8jZ2HBs',
  authDomain: 'angular-4-auth.firebaseapp.com',
  databaseURL: 'https://angular-4-auth.firebaseio.com',
  projectId: 'angular-4-auth',
  storageBucket: '',
  messagingSenderId: '6380675794'
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    FormsModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
