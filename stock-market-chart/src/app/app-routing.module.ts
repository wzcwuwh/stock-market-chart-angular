import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserSignupComponent} from './components/user/user-signup/user-signup.component';
import {UserVeriCodeComponent} from './components/user/user-signup/user-veri-code/user-veri-code.component';
import {UserForgetPwdComponent} from './components/user/user-forget-pwd/user-forget-pwd.component';
import {UserResetPwdComponent} from './components/user/user-reset-pwd/user-reset-pwd.component';
import {UserSignupPwdComponent} from './components/user/user-signup/user-signup-pwd/user-signup-pwd.component';
import {UserSigninComponent} from './components/user/user-signin/user-signin.component';
import {UserLandingPageComponent} from './components/user/user-landing-page/user-landing-page.component';
import {UserProfileComponent} from './components/user/user-profile/user-profile.component';
import {AdminLandingPageComponent} from './components/admin/admin-landing-page/admin-landing-page.component';

const routes: Routes = [
  {
    path: 'user/signup',
    component: UserSignupComponent
  },
  {
    path: 'user/veri/code',
    component: UserVeriCodeComponent
  },
  {
    path: 'user/forget/pwd',
    component: UserForgetPwdComponent
  },
  {
    path: 'user/reset/pwd',
    component: UserResetPwdComponent
  },
  {
    path: 'user/signup/pwd',
    component: UserSignupPwdComponent
  },
  {
    path: 'user/signin',
    component: UserSigninComponent
  },
  {
    path: 'user/land',
    component: UserLandingPageComponent
  },
  {
    path: 'user/profile',
    component: UserProfileComponent
  },
  {
    path: 'admin/land',
    component: AdminLandingPageComponent
  },
  {
    path: '**',
    redirectTo: 'user/signin'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
