import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSigninComponent } from './components/user/user-signin/user-signin.component';
import { UserSignupComponent } from './components/user/user-signup/user-signup.component';
import { UserSignupPwdComponent } from './components/user/user-signup/user-signup-pwd/user-signup-pwd.component';
import { UserVeriCodeComponent } from './components/user/user-signup/user-veri-code/user-veri-code.component';
import { UserResetPwdComponent } from './components/user/user-reset-pwd/user-reset-pwd.component';
import { UserForgetPwdComponent } from './components/user/user-forget-pwd/user-forget-pwd.component';
import {EncryptService} from './services/encrypt.service'
import {EmailValidationService} from './services/email-validation.service';

@NgModule({
  declarations: [
    AppComponent,
    UserSigninComponent,
    UserSignupComponent,
    UserSignupPwdComponent,
    UserVeriCodeComponent,
    UserResetPwdComponent,
    UserForgetPwdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EncryptService, EmailValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
